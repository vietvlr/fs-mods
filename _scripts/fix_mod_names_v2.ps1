$jsonContent = Get-Content "fs22_mods_gen.json" -Raw | ConvertFrom-Json
$fixedMods = @()

foreach ($mod in $jsonContent) {
    $fileName = Split-Path $mod.downloadUrl -Leaf
    $baseName = $fileName -replace "\.zip$", ""
    
    # 1. Start fresh from filename
    # Remove common prefixes
    $name = $baseName -replace "^FS22_", "" -replace "^FS_", "" -replace "^FS22", ""
    
    # 2. Replace separators with spaces
    $name = $name -replace "_", " " -replace "-", " " -replace "\.", " "
    
    # 3. Smart CamelCase Split
    # Split lowercase followed by uppercase: "placeAnywhere" -> "place Anywhere"
    $name = $name -replace "([a-z])([A-Z])", '$1 $2'
    
    # Split number after text: "Tractor500" -> "Tractor 500"
    $name = $name -replace "([a-zA-Z])(\d)", '$1 $2'
    
    # Split text after number: "500Tractor" -> "500 Tractor"
    $name = $name -replace "(\d)([a-zA-Z])", '$1 $2'

    # 4. Clean up specific artifacts if any exist (e.g. T 7 -> T7)
    # T 7, 6 C, 8 R etc.
    $name = $name -replace "\b([a-zA-Z])\s+(\d)\b", '$1$2'
    
    # 5. Restore specific acronyms if split (manual fix list)
    $name = $name -replace "J C B", "JCB"
    $name = $name -replace "S D F", "SDF"
    
    # 6. Final Clean
    $name = $name -replace "\s+", " "
    $name = $name.Trim()
    
    # 7. Better Description
    # Try to derive category text
    $catText = switch ($mod.category) {
        "tractors" { "güçlü bir traktör" }
        "harvesters" { "yüksek kapasiteli bir biçerdöver" }
        "trucks" { "dayanıklı bir kamyon" }
        "maps" { "keşfedilmeyi bekleyen bir harita" }
        "equipment" { "işinizi kolaylaştıracak bir ekipman" }
        "gameplay" { "oyun deneyimini geliştiren bir mod" }
        "objects" { "çiftliğinizi güzelleştirecek bir yapı" }
        "tools" { "kullanışlı bir alet" }
        Default { "harika bir mod" }
    }
    
    $mod.name = $name
    $mod.description = "$name. Farming Simulator 22 için $catText."
    
    # Fix corrupted description if previously generated really badly
    if ($mod.description -match "P la ce") {
        $mod.description = "$name. FS22 için $catText."
    }
    
    $fixedMods += $mod
}

$fixedMods | ConvertTo-Json -Depth 3 | Out-File "fs22_mods_gen.json" -Encoding utf8
Write-Host "Fixed names in fs22_mods_gen.json"
