
$jsFile = "script.js"
$tempFile = "script_restored.js"

$jsContent = Get-Content $jsFile -Raw

# Robust extraction using text finding instead of complex regex
$startIndex = $jsContent.IndexOf('"fs25": [')
if ($startIndex -eq -1) {
    Write-Error "Could not find 'fs25': [' start."
    exit 1
}

# Find the matching closing bracket for fs25 array
# Since we know the structure is likely:
#   ]
# };
# We can search for the last occurrence of ']' before '};'
# Or just use Regex with SingleLine mode correctly this time.

# Try capturing the JSON array content:
if ($jsContent -match '(?s)"fs25":\s*(\[.*\])\s*\};') {
    $jsonArray = $matches[1]
    
    # Try to clean trailing commas before JSON parsing if any (JS allows, JSON doesn't)
    $jsonArray = $jsonArray -replace ",\s*\]", "]" 

    try {
        $mods = $jsonArray | ConvertFrom-Json
        
        $newMods = @()
        
        foreach ($mod in $mods) {
            # Restore Data
            $filename = [System.IO.Path]::GetFileName($mod.downloadUrl)
            
            # Smart Name Cleaning
            # Remove "FS25_" prefix
            $cleanName = $filename -replace "^FS25_", "" 
            # Remove ".zip" extension
            $cleanName = $cleanName -replace "\.zip$", "" 
            # Remove version numbers like _v1, _v1.0
            $cleanName = $cleanName -replace "_v\d+(\.\d+)*", "" 
            # Replace underscores with spaces
            $cleanName = $cleanName -replace "_", " " 
            # Insert space before CamelCase (e.g. BigBarn -> Big Barn)
            $cleanName = $cleanName -replace "([a-z])([A-Z])", '$1 $2'
            # Capitalize words
            $cleanName = (Get-Culture).TextInfo.ToTitleCase($cleanName)
            
            $cleanName = $cleanName.Trim()

            # Categories & Descriptions logic
            $category = "gameplay" 
            $desc = "$cleanName modu ile oyun deneyiminizi zenginleştirin."
            $author = "Kerem"
            
            # Keyword matching (Case insensitive)
            if ($cleanName -match "(?i)Map|Harita|Koy|Village|Farm") {
                $category = "maps"
                $desc = "Anadolu'nun ve dünyanın eşsiz manzaralarını keşfedin. $cleanName haritası, detaylı arazi yapısı ve gerçekçi çevre detaylarıyla yeni bir çiftçilik macerası sunuyor."
            }
            elseif ($cleanName -match "(?i)Tractor|Traktor|Series|Fendt|John|Deutz|Massey|New Holland|Case|Valtra|McCormick|Tumosan|Erkunt|Fiat|Ford") {
                $category = "tractors"
                $desc = "Güç ve performansı bir arada sunan $cleanName traktörü, tarladaki en büyük yardımcınız olacak. Modern tasarımı ve yüksek tork kapasitesiyle her türlü zorluğun üstesinden gelin."
            }
            elseif ($cleanName -match "(?i)Combine|Harvester|Bicer|Dover|Claas|New Holland") {
                if ($cleanName -match "(?i)New Holland" -and !($cleanName -match "T[0-9]")) { $category = "harvesters" } 
                elseif ($cleanName -match "(?i)Claas") { $category = "harvesters" }
                else { $category = "harvesters" }
                
                $desc = "Hasat zamanının yıldızı $cleanName ile verimliliğinizi maksimize edin. Minimum ürün kaybı ve hızlı çalışma kapasitesiyle kazancınızı katlayın."
            }
            elseif ($cleanName -match "(?i)Trailer|Romork|Tipper|Krampe|Fliegl|Rudolph|Brantner|Welger") {
                $category = "trailers"
                $desc = "Taşıma işleriniz için mükemmel çözüm: $cleanName. Geniş hacmi ve sağlam şasisi ile ürünlerinizi güvenle depolara veya satış noktalarına ulaştırın."
            }
            elseif ($cleanName -match "(?i)Plow|Pulluk|Cultivator|Seeder|Mibzer|Planter|Harrow|Diskarow|Ozdoken|Unlu|Ozduman") {
                $category = "equipment"
                $desc = "Toprağınızı ekime hazırlamanın en profesyonel yolu: $cleanName. Dayanıklı yapısı ve hassas işçiliği ile tarlanızdan en yüksek verimi alın."
            }
            elseif ($cleanName -match "(?i)House|Shed|Barn|Garage|Silo|Bina|Ev|Garaj|Ahir|Coop|Kumes|Hangar") {
                $category = "gameplay" 
                $desc = "Çiftliğinize yeni bir soluk getirin. $cleanName, hem işlevsel kullanımı hem de görsel estetiğiyle çiftlik düzeninizi modernleştirecek."
            }
            elseif ($cleanName -match "(?i)Pack|Paket") {
                $desc = "Bu kapsamlı $cleanName paketi ile ihtiyacınız olan her şeye tek seferde sahip olun. Çiftlik operasyonlarınızı kolaylaştıracak araç ve ekipmanlar bir arada."
            }
            
            # Create ordered object to keep JSON clean
            $newMod = [Ordered]@{
                id          = $mod.id
                name        = $cleanName
                category    = $category
                description = $desc
                author      = $author
                images      = $mod.images
                downloadUrl = $mod.downloadUrl
            }
            
            $newMods += $newMod
        }
        
        $jsonOutput = $newMods | ConvertTo-Json -Depth 4
        
        # Build the new JS file content
        # We replace the entire 'allMods' variable definition block
        # Match from "let allMods" to "};"
        
        if ($jsContent -match "(?s)(let allMods = \{.*?\};)(.*)") {
            $header = "// FS Mod Hub - JavaScript`n`n// Global variables - Mod Data Embedded directly`n"
            $newBlock = "let allMods = {
  `"fs25`": $jsonOutput
};"
            $restOfFile = $matches[2]
             
            $finalContent = $newBlock + $restOfFile
            # Prepend header if missing from restOfFile (it likely is since we matched from start)
            # Wait, regex match covered the whole file? No.
             
            # Let's simple string replace based on exact match of the extracted array isn't safe if I modified it.
            # Better: Split by the regex match.
             
            $finalContent = $header + $newBlock + $restOfFile
             
            $finalContent | Out-File $tempFile -Encoding utf8
            Write-Host "Success! Check $tempFile"
        }
        else {
            # Fallback: Just overwrite the whole file content structure if regex fails again on the BLOCK
            # (unlikely if first regex worked)
            Write-Warning "Could not preserve file bottom. Writing just data for check."
            $jsonOutput | Out-File $tempFile
        }

    }
    catch {
        Write-Error "JSON Parsing error: $_"
    }
}
else {
    Write-Error "Could not find allMods block with Regex."
    # Dump 100 chars around where it might be
    Write-Host "Context: " $jsContent.Substring(0, 200)
}
