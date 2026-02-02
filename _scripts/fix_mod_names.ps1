$jsonContent = Get-Content "fs22_mods_gen.json" -Raw | ConvertFrom-Json
$fixedMods = @()

foreach ($mod in $jsonContent) {
    $fileName = Split-Path $mod.downloadUrl -Leaf
    $baseName = $fileName -replace "\.zip$", ""
    
    # 1. Remove prefixes
    $name = $baseName -replace "^FS22_", "" -replace "^FS_", "" -replace "^FS22", ""
    
    # 2. Replace underscores/dots with spaces
    $name = $name -replace "[_\.-]", " "
    
    # 3. Split CamelCase (Simple version)
    $name = $name -replace "([a-z])([A-Z])", '$1 $2'
    
    # 4. Split numbers
    $name = $name -replace "([a-zA-Z])(\d)", '$1 $2'
    $name = $name -replace "(\d)([a-zA-Z])", '$1 $2'
    
    # 5. Clean up multiple spaces
    $name = $name -replace "\s+", " "
    $name = $name.Trim()
    
    # Update properties
    $mod.name = $name
    $mod.description = "$name modu - FS22 için. İndirin ve oyununuza ekleyin."
    
    $fixedMods += $mod
}

$fixedMods | ConvertTo-Json -Depth 3 | Out-File "fs22_mods_gen.json" -Encoding utf8
Write-Host "Fixed names in fs22_mods_gen.json"
