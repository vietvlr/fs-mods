# Add proper brand names to mods

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Brand name mappings - pattern to brand prefix
$brandMappings = @{
    # Deutz Fahr
    '^6C|^5C|^7C|Deutz'                                    = 'Deutz Fahr'
    # New Holland
    'Newholland|New Holland|^Nh |^T5 |^T6 |^T7 |^T8 |Tr6s' = 'New Holland'
    # Massey Ferguson
    'Massey|Ferguson|^Mf |^Mf_'                            = 'Massey Ferguson'
    # John Deere
    'Johndeere|John Deere|Deere'                           = 'John Deere'
    # Case IH
    '^Case|Axial'                                          = 'Case IH'
    # Fendt
    'Fendt'                                                = 'Fendt'
    # JCB
    'Jcb'                                                  = 'JCB'
    # Claas
    'Claas|Lexion'                                         = 'CLAAS'
    # Krone
    'Krone|Big X'                                          = 'Krone'
    # Kuhn
    'Kuhn'                                                 = 'Kuhn'
    # Lemken
    'Lemken|Juwel'                                         = 'Lemken'
    # Amazone
    'Amazone'                                              = 'Amazone'
    # Väderstad
    'Vaderstad|Väderstad'                                  = 'Väderstad'
    # Alpego
    'Alpego|Cayman'                                        = 'Alpego'
    # Ozdoken
    'Ozdoken|Ozuman|Ozenis'                                = 'Özdöken'
    # Tumosan
    'Tumosan'                                              = 'Tümosan'
    # Erkunt
    'Erkunt'                                               = 'Erkunt'
    # Landini
    'Landini'                                              = 'Landini'
    # Sigma
    'Sigma'                                                = 'Sigma'
    # Paksan
    'Paksan'                                               = 'Paksan'
    # Unlu
    'Unlu'                                                 = 'Ünlü'
    # Valentini
    'Valentini|Mammut'                                     = 'Valentini'
    # BMW
    'Bmw'                                                  = 'BMW'
    # Scania
    'Scania'                                               = 'Scania'
    # Mercedes
    'Mercedes|Actros'                                      = 'Mercedes-Benz'
    # Lizard (game brand)
    'Lizard'                                               = 'Lizard'
    # SDF (Same Deutz Fahr)
    'Sdf'                                                  = 'SDF'
}

# Better name formatting
$nameReplacements = @{
    'Rvshift' = 'RV Shift'
    'Gts'     = 'GTS'
    'Blm'     = 'BLM'
    'Mxgs'    = 'MX GS'
    'Hd'      = 'HD'
    'Ac Dc'   = 'AC/DC'
    'Dof'     = 'DoF'
    'Pgr'     = 'PGR'
    'Fdp'     = 'FDP'
    'Silo'    = 'Silo'
    '8700s'   = '8700S'
    '6700s'   = '6700S'
    '7s'      = '7S'
    '6s'      = '6S'
    '9s'      = '9S'
    'T7070'   = 'T7070'
    'T7edit'  = 'T7 Edit'
    'V5'      = 'v5'
    'V3'      = 'v3'
}

# Parse mods
$modPattern = '\{\s*"id":\s*(\d+),\s*"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"description":\s*"([^"]+)",\s*"author":\s*"([^"]+)",\s*"images":\s*\[[^\]]*\],\s*"downloadUrl":\s*"([^"]+)"\s*\}'

$matches = [regex]::Matches($content, $modPattern)
Write-Host "Processing $($matches.Count) mods with brand names..."

foreach ($match in $matches) {
    $id = $match.Groups[1].Value
    $name = $match.Groups[2].Value
    $category = $match.Groups[3].Value
    $oldDesc = $match.Groups[4].Value
    $author = $match.Groups[5].Value
    $downloadUrl = $match.Groups[6].Value
    
    $newName = $name
    $brandAdded = $false
    
    # Check for brand matches and add brand prefix if not already present
    foreach ($pattern in $brandMappings.Keys) {
        if ($name -match $pattern -and $name -notmatch "^$($brandMappings[$pattern])") {
            $brand = $brandMappings[$pattern]
            # Don't add brand if name already starts with it
            if (-not $name.StartsWith($brand)) {
                $newName = "$brand $name"
                $brandAdded = $true
                break
            }
        }
    }
    
    # Apply name replacements for better formatting
    foreach ($old in $nameReplacements.Keys) {
        $newName = $newName -replace $old, $nameReplacements[$old]
    }
    
    # Clean up double spaces
    $newName = $newName -replace '\s+', ' '
    $newName = $newName.Trim()
    
    # Generate better description with brand
    $desc = switch ($category) {
        'tractors' { 
            "$newName traktörü ile tarlalarınızı profesyonelce işleyin. Güçlü motor, gerçekçi detaylar ve yüksek performans."
        }
        'harvesters' {
            "$newName biçerdöver ile hasadınızı hızlı ve verimli şekilde yapın."
        }
        'trucks' {
            "$newName ile ürünlerinizi güvenle taşıyın. Yüksek kapasite ve detaylı tasarım."
        }
        'equipment' {
            "$newName ekipmanı ile tarım işlerinizi kolaylaştırın. Dayanıklı ve verimli."
        }
        'maps' {
            "$newName haritası ile yeni bir çiftçilik macerasına atılın. Detaylı arazi ve tesisler."
        }
        'objects' {
            "$newName ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar."
        }
        'tools' {
            "$newName aleti ile çiftlik işlerinizi hızlandırın."
        }
        default {
            "$newName modu ile oyun deneyiminizi zenginleştirin."
        }
    }
    
    $oldEntry = $match.Value
    $newEntry = @"
{
            "id": $id,
            "name": "$newName",
            "category": "$category",
            "description": "$desc",
            "author": "$author",
            "images": [

            ],
            "downloadUrl": "$downloadUrl"
        }
"@
    
    $content = $content.Replace($oldEntry, $newEntry)
    if ($brandAdded) {
        Write-Host "  $name -> $newName"
    }
}

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "`nDone! Added brand names to mods."
