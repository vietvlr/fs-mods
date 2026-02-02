$files = Get-ChildItem "downloads2"
$mods = @()
$idCounter = 2001

foreach ($file in $files) {
    if ($file.Name -match "^\.") { continue }

    $uniqueId = $idCounter
    $downloadUrl = "downloads2/" + $file.Name
    $baseName = $file.BaseName

    $name = $baseName

    # Remove strict prefixes (Case insensitive is fine here)
    if ($name -match "^FS22_") { $name = $name.Substring(5) }
    elseif ($name -match "^FS_") { $name = $name.Substring(3) }
    elseif ($name -match "^FS22") { $name = $name.Substring(4) }

    # Replace separators
    $name = $name -replace "_", " " -replace "-", " " -replace "\.", " "

    # CamelCase Split - MUST BE CASE SENSITIVE (-creplace)
    $name = $name -creplace "([a-z])([A-Z])", '$1 $2'

    # Number Split (Case insensitive fine, but lets be explicit)
    $name = $name -replace "([a-zA-Z])(\d)", '$1 $2'
    $name = $name -replace "(\d)([a-zA-Z])", '$1 $2'

    # Clean up artifacts like "T 7" -> "T7"
    $name = $name -replace "\b([a-zA-Z])\s+(\d)\b", '$1$2'
    
    # Specific fixes
    $name = $name -replace "J C B", "JCB"
    $name = $name -replace "S D F", "SDF"
    $name = $name -replace "C A S E", "CASE"

    # Normalize spaces
    $name = $name -replace "\s+", " "
    $name = $name.Trim()

    # Smart Categorization
    $category = "gameplay"
    if ($name -match "Tractor|Fendt|Case|John\s*Deere|New\s*Holland|Massey|Valtra|Deutz|Claas|JCB|Steyr|Zetor|Ursus|Landini|Erkunt|Tumosan|Hattat") { $category = "tractors" }
    elseif ($name -match "Harvester|Combine|Lexion|Tucano|Ideal|Axial|CR|CH|TC5|TR6S") { $category = "harvesters" }
    elseif ($name -match "Truck|Lorry|Man|Scania|Volvo|Mercedes|Iveco|Daf|Mack|Kenworth|Peterbilt") { $category = "trucks" }
    elseif ($name -match "Map|Farm|Valley|Land|Country|Village|City|Town|Forest|Hills|Mountains|River|Lake|Sea|Ocean|Island|Dolina|Hagenstedt") { $category = "maps" }
    elseif ($name -match "Shed|Barn|House|Garage|Silo|Stable|Coop|Hive|Greenhouse|Factory|Production|Sellpoint|BuyingStation|Fence|Gate|Building|Shelter") { $category = "objects" }
    elseif ($name -match "Plow|Cultivator|Seeder|Planter|Spreader|Sprayer|Mower|Tedder|Windrower|Baler|Wrapper|Mixer|Header|Cutter|Weight|Frontloader|Trailer|Tipper|Wagon") { $category = "equipment" }
    elseif ($name -match "Saw|Chainsaw|Winch|Skidder|Forwarder") { $category = "tools" }

    # Smart Descriptions
    $catText = switch ($category) {
        "tractors" { "güçlü bir traktör" }
        "harvesters" { "yüksek kapasiteli bir biçerdöver" }
        "trucks" { "dayanıklı bir kamyon" }
        "maps" { "keşfedilmeyi bekleyen bir harita" }
        "equipment" { "işinizi kolaylaştıracak bir ekipman" }
        "gameplay" { "oyun deneyimini geliştiren bir mod" }
        "objects" { "çiftliğinizi güzelleştirecek bir yapı" }
        "tools" { "kullanışlı bir alet" }
        Default { "oyununuza renk katacak bir mod" }
    }

    $description = "$name. FS22 için $catText. İndirin ve keyfini çıkarın."

    $mod = @{
        id          = $uniqueId
        name        = $name
        category    = $category
        description = $description
        author      = "FS22 Community"
        images      = @()
        downloadUrl = $downloadUrl
    }
    $mods += $mod
    $idCounter++
}

$jsonOutput = $mods | ConvertTo-Json -Depth 3
[System.IO.File]::WriteAllText("$PWD/fs22_mods_gen.json", $jsonOutput)
Write-Host "Generated fs22_mods_gen.json with $($mods.Count) mods."
