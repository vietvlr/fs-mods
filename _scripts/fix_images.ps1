# Update tractor images to use working placeholder URLs

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Replace farming-simulator.com URLs with placeholder URLs that work
# Using placehold.co which is more reliable

# Pattern to find and replace farming-simulator URLs
$content = $content -replace 'https://farming-simulator\.com/img/teasers/mod/mods_teaserImage/FS25/228829\.webp', 'https://placehold.co/400x200/1a4d2e/ffffff?text=Deutz+Fahr'

$content = $content -replace 'https://farming-simulator\.com/img/teasers/mod/mods_teaserImage/FS25/228561\.webp', 'https://placehold.co/400x200/367c2b/ffffff?text=John+Deere'

$content = $content -replace 'https://farming-simulator\.com/img/teasers/mod/mods_teaserImage/FS25/228733\.webp', 'https://placehold.co/400x200/0066b2/ffffff?text=Landini'

$content = $content -replace 'https://farming-simulator\.com/img/teasers/mod/mods_teaserImage/FS25/228745\.webp', 'https://placehold.co/400x200/f5c10e/000000?text=JCB'

$content = $content -replace 'https://farming-simulator\.com/img/teasers/mod/mods_teaserImage/FS25/228577\.webp', 'https://placehold.co/400x200/c12026/ffffff?text=Massey+Ferguson'

$content = $content -replace 'https://farming-simulator\.com/img/teasers/mod/mods_teaserImage/FS25/228641\.webp', 'https://placehold.co/400x200/00529b/ffffff?text=New+Holland'

$content = $content -replace 'https://www\.erkunt\.com\.tr/assets/images/tractors/erkunt-kudret-90-4wd\.png', 'https://placehold.co/400x200/e31837/ffffff?text=Erkunt'

$content = $content -replace 'https://www\.tumosan\.com\.tr/uploads/products/2024/01/tumosan-8115\.png', 'https://placehold.co/400x200/cc0000/ffffff?text=Tumosan+9115'

$content = $content -replace 'https://www\.tumosan\.com\.tr/uploads/products/2024/01/tumosan-8075\.png', 'https://placehold.co/400x200/cc0000/ffffff?text=Tumosan+8075'

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "Updated tractor images to use placeholder URLs"
