# Add new tractor images

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Find Erkunt Serisi and update its image
$content = $content -replace '("name": "Erkunt Serisi",[\s\S]*?"images": \[)"images/tumosan\.png"(\])', '$1"images/erkunt.png"$2'

# Find Landini and update its image  
$content = $content -replace '("name": "Landini Serie 7 Robo Six",[\s\S]*?"images": \[)"images/massey_ferguson\.png"(\])', '$1"images/landini.png"$2'

# Find SDF and update its image
$content = $content -replace '("name": "SDF 6C",[\s\S]*?"images": \[)"images/deutz_fahr_6c\.png"(\])', '$1"images/sdf.png"$2'
$content = $content -replace '("name": "SDF 6C Modifiyeli",[\s\S]*?"images": \[)"images/deutz_fahr_6c\.png"(\])', '$1"images/sdf.png"$2'

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "Updated Erkunt, Landini and SDF images"
