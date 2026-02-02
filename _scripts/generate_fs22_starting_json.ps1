$files = Get-ChildItem "downloads2"
$mods = @()
$idCounter = 2001

foreach ($file in $files) {
    if ($file.Name -match "^\.") { continue } # Skip hidden files

    $name = $file.BaseName
    $cleanName = $name -replace "^FS22_", "" -replace "_", " " -replace "([a-z])([A-Z])", '$1 $2'

    # Simple categorization
    $category = "gameplay"
    if ($name -match "Tractor|Fendt|Case|JohnDeere|NewHolland|Massey|Valtra|Deutz|Claas|JCB|Steyr|Zetor|Ursus|Belarus|Vario|Farmall|TDD|Series|7S|8S|9S|6C") { $category = "tractors" }
    elseif ($name -match "Harvester|Combine|Lexion|Tucano|Ideal|Axial|CR|CH") { $category = "harvesters" }
    elseif ($name -match "Truck|Lorry|Man|Scania|Volvo|Mercedes|Iveco|Daf|Mack|Kenworth|Peterbilt") { $category = "trucks" }
    elseif ($name -match "Trailer|Tipper|Wagon|Krampe|Fliegl|Krone|Bergmann|Strautmann|Annamburger|Joskin") { $category = "equipment" }
    elseif ($name -match "Map|Farm|Valley|Land|Country|Village|City|Town|Forest|Hills|Mountains|River|Lake|Sea|Ocean|Island") { $category = "maps" }
    elseif ($name -match "Shed|Barn|House|Garage|Silo|Stable|Coop|Hive|Greenhouse|Factory|Production|Sellpoint|BuyingStation") { $category = "objects" }
    elseif ($name -match "Plow|Cultivator|Seeder|Planter|Spreader|Sprayer|Mower|Tedder|Windrower|Baler|Wrapper|Mixer|Header|Cutter|Weight|Frontloader|Wheel|Tire|Track") { $category = "equipment" }
    elseif ($name -match "Saw|Chainsaw|Winch|Skidder|Forwarder|Harvester") { $category = "tools" }

    $mod = @{
        id = $idCounter
        name = $cleanName
        category = $category
        description = "$cleanName modu. FS22 için kaliteli bir $category modu."
        author = "FS22 Modder"
        images = @()
        downloadUrl = "downloads2/" + $file.Name
    }
    $mods += $mod
    $idCounter++
}

$modsJson = $mods | ConvertTo-Json -Depth 3
$modsJson | Out-File "fs22_mods_gen.json" -Encoding utf8
Write-Host "Generated fs22_mods_gen.json"
