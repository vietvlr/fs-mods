$jsonFile = "images_found_all.json"
$jsFile = "script.js"
$tempFile = "script_new.js"

if (!(Test-Path $jsonFile)) {
    Write-Error "JSON file not found!"
    exit 1
}


$imagesData = Get-Content $jsonFile | ConvertFrom-Json
$jsContent = Get-Content $jsFile -Raw

# Get all property names (PSObject)
$props = $imagesData | Get-Member -MemberType NoteProperty | Select-Object -ExpandProperty Name

foreach ($modName in $props) {
    if ([string]::IsNullOrWhiteSpace($modName)) { continue }
    
    $images = $imagesData.$modName
    if ($images -is [string]) { $images = @($images) } # Force array
    
    # Create JSON array string like ["url1", "url2"]
    $imagesJson = $images | ConvertTo-Json -Compress
    
    # Escape special regex chars in mod name
    $escapedName = [regex]::Escape($modName)
    
    # Regex to find the block for this mod
    # Look for "name": "ModName", then capture until "images": [...]
    # This is tricky with regex. 
    # Better approach: Match "name": "ModName" ... "images": [ ... ]
    
    # Simplified regex assuming standard formatting in script.js:
    # "name": "Mod Name",
    # ...
    # "images": [ ... ],
    
    # We will search for the name, then find the next "images": ... line
    
    $pattern = "(?s)(""name"":\s*""$escapedName"".*?)""images"":\s*\[.*?\]"
    $replacement = "${1}""images"": $imagesJson"
    
    if ($jsContent -match $pattern) {
        $jsContent = [regex]::Replace($jsContent, $pattern, $replacement)
        Write-Host "Updated images for: $modName"
    }
    else {
        # Try finding single line images: []
        $patternEmpty = "(?s)(""name"":\s*""$escapedName"".*?)""images"":\s*\[\]"
        if ($jsContent -match $patternEmpty) {
            $jsContent = [regex]::Replace($jsContent, $patternEmpty, $replacement)
            Write-Host "Updated (empty) images for: $modName"
        }
        else {
            Write-Warning "Could not find block for $modName"
        }
    }
}

$jsContent | Out-File $tempFile -Encoding utf8
Write-Host "Done. Verify $tempFile then overwrite."
