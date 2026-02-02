
$jsFile = "script.js"
$tempFile = "script_final_fixed.js"

$content = Get-Content $jsFile -Raw

# 1. Define Missing Constants
$constants = @"
const categoryLabels = {
    'tractors': 'Traktörler',
    'harvesters': 'Biçerdöverler',
    'trailers': 'Römorklar',
    'equipment': 'Ekipmanlar',
    'gameplay': 'Oynanış',
    'maps': 'Haritalar',
    'trucks': 'Kamyonlar',
    'cars': 'Arabalar',
    'tools': 'Aletler',
    'objects': 'Objeler'
};

const path = window.location.pathname;
const currentGame = path.includes('fs22') ? 'fs22' : 'fs25';

"@

# 2. Add fs22 to allMods if missing
# Pattern: "fs25": [
# We replace it with "fs22": [], "fs25": [

if ($content -match '"fs25":\s*\[') {
    $content = $content -replace '"fs25":\s*\[', '"fs22": [], "fs25": ['
}
else {
    Write-Warning "Could not match fs25 key. Init might fail if structure is wrong."
}

# 3. Prepend constants to the file
# Ideally after the header comments if any, but top is fine.
$finalContent = $constants + "`n" + $content

$finalContent | Out-File $tempFile -Encoding utf8
Write-Host "Fixed script saved to $tempFile"
