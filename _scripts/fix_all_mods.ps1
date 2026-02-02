# More comprehensive fix for mod names, categories and descriptions

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Function to determine category
function Get-ModCategory($name) {
    $n = $name.ToLower()
    
    # Tractors
    if ($n -match 'tractor|fendt|deutz|massey|ferguson|john deere|jcb|landini|tumosan|erkunt|t5|t6|t7|t8|7s|8r|9r|5m|6s|6c|7hd|580s|mf |mf_|^mf') {
        return 'tractors'
    }
    if ($n -match 'new.?holland.?t[4-9]|newholland') {
        return 'tractors'
    }
    
    # Harvesters
    if ($n -match 'harvester|combine|lexion|axial|big.?x|forage') {
        return 'harvesters'
    }
    
    # Trucks & Cars
    if ($n -match 'truck|actros|scania|man |daf |volvo truck|mercedes.?benz|bmw|car ') {
        return 'trucks'
    }
    
    # Equipment
    if ($n -match 'plow|cultivator|seeder|sprayer|spreader|trailer|kuhn|amazone|lemken|v.derstad|harrow|disc|bucket|unihyd|ozdoken|ozuman|ozenis|paksan|sigma|ramp|conveyor|unlu') {
        return 'equipment'
    }
    
    # Maps
    if ($n -match 'map|village|westerrade|hagenstedt|mala.?wies|yigit|pinari') {
        return 'maps'
    }
    
    # Buildings/Objects
    if ($n -match 'barn|shed|house|garage|silo|building|fence|gate|coop|shelter|workshop|storage|hall|greenhouse|office|pigsty|beehive|garden|pit|rack|deco|sign|cone|bench|table|plant|tree|placeable') {
        return 'objects'
    }
    
    # Tools
    if ($n -match 'tool|machete|shovel|scythe|chainsaw|power.?tool|lumber|axe|saw ') {
        return 'tools'
    }
    
    # Default to gameplay
    return 'gameplay'
}

# Function to generate nice description
function Get-ModDescription($name, $category) {
    switch ($category) {
        'tractors' { 
            $templates = @(
                "$name traktörü ile tarlalarınızı verimli şekilde işleyin. Güçlü motor ve gerçekçi detaylar.",
                "Farming Simulator 25 için $name traktör modu. Yüksek performans ve kaliteli modelleme.",
                "$name ile çiftliğinizi güçlendirin. Detaylı iç mekan ve gerçekçi fizik özellikleri."
            )
        }
        'harvesters' {
            $templates = @(
                "$name biçerdöver ile hasadınızı profesyonelce yapın. Yüksek kapasite ve verimlilik.",
                "Hasat zamanı için ideal $name. Büyük tarlalar için mükemmel performans."
            )
        }
        'trucks' {
            $templates = @(
                "$name ile ürünlerinizi güvenle taşıyın. Detaylı tasarım ve yüksek kapasite.",
                "Lojistik işleriniz için $name. Güçlü motor ve dayanıklı yapı."
            )
        }
        'equipment' {
            $templates = @(
                "$name ekipmanı ile tarım işlerinizi kolaylaştırın. Profesyonel kalite ve yüksek verim.",
                "$name ile toprağınızı mükemmel şekilde hazırlayın. Dayanıklı ve etkili.",
                "Çiftliğiniz için $name ekipmanı. Modern tasarım ve kolay kullanım."
            )
        }
        'maps' {
            $templates = @(
                "$name haritası ile yeni tarım macerasına atılın. Detaylı arazi ve çeşitli tesisler.",
                "$name - keşfedilmeyi bekleyen benzersiz bir çiftçilik deneyimi."
            )
        }
        'objects' {
            $templates = @(
                "$name ile çiftliğinizi güzelleştirin. Gerçekçi detaylar ve kolay yerleştirme.",
                "Çiftliğinize $name ekleyin. Fonksiyonel tasarım ve estetik görünüm.",
                "$name binası ile çiftliğinizi genişletin. Pratik kullanım ve güzel görünüm."
            )
        }
        'tools' {
            $templates = @(
                "$name aleti ile işlerinizi hızlandırın. Çiftliğiniz için vazgeçilmez.",
                "Pratik $name - çiftlik işlerinde büyük kolaylık sağlar."
            )
        }
        default {
            $templates = @(
                "$name modu ile oyun deneyiminizi zenginleştirin. Yeni özellikler ve iyileştirmeler.",
                "$name - oynanışı geliştiren kullanışlı mod. Daha iyi kontrol ve özelleştirme."
            )
        }
    }
    
    $index = (Get-Random -Maximum $templates.Count)
    return $templates[$index]
}

# Parse and fix all mods
$modPattern = '\{\s*"id":\s*(\d+),\s*"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"description":\s*"([^"]+)",\s*"author":\s*"([^"]+)",\s*"images":\s*\[[^\]]*\],\s*"downloadUrl":\s*"([^"]+)"\s*\}'

$matches = [regex]::Matches($content, $modPattern)
Write-Host "Processing $($matches.Count) mods..."

$replacements = @{}

foreach ($match in $matches) {
    $id = $match.Groups[1].Value
    $oldName = $match.Groups[2].Value
    $author = $match.Groups[5].Value
    $downloadUrl = $match.Groups[6].Value
    
    # Get clean name
    $fileName = [System.IO.Path]::GetFileNameWithoutExtension($downloadUrl)
    $cleanName = $fileName -replace '^FS25_', '' -replace '_', ' '
    
    # Capitalize properly
    $cleanName = (Get-Culture).TextInfo.ToTitleCase($cleanName.ToLower())
    
    # Determine category
    $category = Get-ModCategory $cleanName
    
    # Generate description
    $description = Get-ModDescription $cleanName $category
    
    $oldEntry = $match.Value
    $newEntry = @"
{
            "id": $id,
            "name": "$cleanName",
            "category": "$category",
            "description": "$description",
            "author": "$author",
            "images": [

            ],
            "downloadUrl": "$downloadUrl"
        }
"@
    
    if (-not $replacements.ContainsKey($oldEntry)) {
        $replacements[$oldEntry] = $newEntry
        Write-Host "[$category] $cleanName"
    }
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "`nDone! Fixed all $($matches.Count) mods."
