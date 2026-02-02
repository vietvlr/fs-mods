$modsJson = Get-Content "fs22_mods_gen.json" -Raw
$scriptJs = Get-Content "assets/js/script.js" -Raw

# Escape dollar signs in regex replacement string?
# Or just valid string replacement.
$newContent = $scriptJs.Replace('"fs22": [],', '"fs22": ' + $modsJson + ',')

$newContent | Set-Content "assets/js/script.js"
Write-Host "Updated script.js with FS22 mods"
