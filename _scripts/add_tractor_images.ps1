# Add tractor images from reliable sources

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Tractor image URLs - using placeholder images based on brand
$tractorImages = @{
    # Deutz Fahr
    'Deutz Fahr 6C RV Shift'          = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228829.webp'
    'Deutz Fahr Series 9'             = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228829.webp'
    
    # SDF
    'SDF 6C'                          = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228829.webp'
    'SDF 6C Modifiyeli'               = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228829.webp'
    
    # Erkunt 
    'Erkunt Serisi'                   = 'https://www.erkunt.com.tr/assets/images/tractors/erkunt-kudret-90-4wd.png'
    
    # John Deere
    'John Deere 5M Series'            = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228561.webp'
    
    # Landini
    'Landini Serie 7 Robo Six'        = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228733.webp'
    
    # JCB
    'JCB Backhoe Loader'              = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228745.webp'
    
    # Massey Ferguson
    'Massey Ferguson 8700S'           = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228577.webp'
    'Massey Ferguson 6700S'           = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228577.webp'
    'Massey Ferguson 6S Rust Edition' = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228577.webp'
    'Massey Ferguson 9S'              = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228577.webp'
    'Massey Ferguson 7S'              = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228577.webp'
    
    # New Holland
    'New Holland T5 AC/DC'            = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T5 Utility'          = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T7'                  = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T7 2011'             = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T5 BLM Series'       = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T6 MX GS'            = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T7070'               = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T7 Edit'             = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T7 HD Edition'       = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland TR6S Series'         = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T7 Standard'         = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T7 Agribumper'       = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T8'                  = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland TDD Bluemaster'      = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland TT Series'           = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T8 Pro'              = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T6 Edit'             = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    'New Holland T7 Modifiye'         = 'https://farming-simulator.com/img/teasers/mod/mods_teaserImage/FS25/228641.webp'
    
    # Tumosan
    'Tümosan 9115'                    = 'https://www.tumosan.com.tr/uploads/products/2024/01/tumosan-8115.png'
    'Tümosan 8075'                    = 'https://www.tumosan.com.tr/uploads/products/2024/01/tumosan-8075.png'
}

Write-Host "Adding images to tractors..."

foreach ($tractorName in $tractorImages.Keys) {
    $imageUrl = $tractorImages[$tractorName]
    
    # Find and replace empty images array for this tractor
    $pattern = [regex]::Escape('"name": "' + $tractorName + '"') + ',\s+"category": "tractors",\s+"description": "[^"]+",\s+"author": "[^"]+",\s+"images": \[\s*\]'
    
    $replacement = @"
"name": "$tractorName",
            "category": "tractors",
            "description": 
"@
    
    # Simpler approach - just find and add image
    $oldPattern = '"name": "' + [regex]::Escape($tractorName) + '"'
    
    if ($content -match [regex]::Escape($tractorName)) {
        # Find the mod entry and add image
        $searchPattern = '("name": "' + [regex]::Escape($tractorName) + '",[\s\S]*?"images": \[)\s*(\])'
        $replaceWith = '$1"' + $imageUrl + '"$2'
        
        $content = $content -replace $searchPattern, $replaceWith
        Write-Host "  Added image for: $tractorName"
    }
}

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "`nDone!"
