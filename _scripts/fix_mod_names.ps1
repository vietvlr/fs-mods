# Fix mod names in script.js by extracting correct names from download file names

$scriptPath = "script.js"
$downloadsDir = "downloads"

# Read script.js content
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Get all zip files and create a mapping
$zipFiles = Get-ChildItem -Path $downloadsDir -Filter "*.zip" | Select-Object -ExpandProperty Name

foreach ($zipFile in $zipFiles) {
    # Extract readable name from zip file
    # FS25_FarmTurkMap.zip -> FarmTurkMap -> Farm Turk Map
    $baseName = $zipFile -replace "\.zip$", ""
    
    # Create the download path as it appears in script.js
    $downloadPath = "downloads/$zipFile"
    
    # Create a readable name: FS25_FarmTurkMap -> Farm Turk Map
    $readableName = $baseName -replace "^FS25_", ""
    $readableName = $readableName -replace "_", " "
    
    # Find and replace the broken name in the JSON structure
    # Look for entries with this downloadUrl and fix their name
    $pattern = '("name":\s*")([^"]+)(",\s*"category"[^}]+?"downloadUrl":\s*"' + [regex]::Escape($downloadPath) + '")'
    
    if ($content -match $pattern) {
        $content = $content -replace $pattern, ('$1' + $readableName + '$3')
        Write-Host "Fixed: $readableName"
    }
}

# Save the fixed content
$content | Set-Content $scriptPath -Encoding UTF8

Write-Host "`nDone! Fixed mod names in script.js"
