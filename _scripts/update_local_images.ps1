# Update tractor images to use local files

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Deutz Fahr - all variants
$content = $content -replace 'https://placehold\.co/400x200/1a4d2e/ffffff\?text=Deutz\+Fahr', 'images/deutz_fahr_6c.png'

# New Holland - all variants
$content = $content -replace 'https://placehold\.co/400x200/00529b/ffffff\?text=New\+Holland', 'images/new_holland_t7.png'

# Massey Ferguson - all variants
$content = $content -replace 'https://placehold\.co/400x200/c12026/ffffff\?text=Massey\+Ferguson', 'images/massey_ferguson.png'

# John Deere
$content = $content -replace 'https://placehold\.co/400x200/367c2b/ffffff\?text=John\+Deere', 'images/john_deere.png'

# JCB
$content = $content -replace 'https://placehold\.co/400x200/f5c10e/000000\?text=JCB', 'images/jcb.png'

# Tumosan
$content = $content -replace 'https://placehold\.co/400x200/cc0000/ffffff\?text=Tumosan\+9115', 'images/tumosan.png'
$content = $content -replace 'https://placehold\.co/400x200/cc0000/ffffff\?text=Tumosan\+8075', 'images/tumosan.png'

# Erkunt - use Tumosan image for now
$content = $content -replace 'https://placehold\.co/400x200/e31837/ffffff\?text=Erkunt', 'images/tumosan.png'

# Landini - use Massey Ferguson image
$content = $content -replace 'https://placehold\.co/400x200/0066b2/ffffff\?text=Landini', 'images/massey_ferguson.png'

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "Updated tractor images to use local files"
