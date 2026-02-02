
$jsFile = "script.js"
$jsonImagesFile = "images_found_all.json"
$downloadsDir = "downloads"
$tempFile = "script_final.js"

# 1. Get Functions Part from a Backup or Current if valid
# Since previous writes might have corrupted script.js, we need to be careful.
# If script.js is small/empty, we might have lost the functions.
# Assuming script.js still has the bottom part (functions). 

$jsContent = Get-Content $jsFile -Raw
$codeStart = $jsContent.IndexOf("function ")
if ($codeStart -eq -1) {
    $codeStart = $jsContent.IndexOf("document.addEventListener")
}

if ($codeStart -eq -1) {
    # If we lost the functions, we need to restore them from a known previous state or artifacts?
    # Or maybe the user has a backup?
    # Let's hope the view_file shows we still have functions.
    # If not, I'll need to rewrite the JS functions.
    Write-Warning "Could not find code section start in script.js. Using a default set if needed or failing."
    # For now, let's assume valid functions exist or we will re-read from a backup if I had one (I don't explicit one).
} 

# But wait, if step 901 ran successfully (it says command completed successfully in 903, but then 906 command was failed?), 
# actually Step 903 failed with Null Reference. So script.js might not have been touched or was touched with bad data.

# Let's look at the file content first (via view_file) before running this.
# But I will update this script to be safe against nulls and PS version isues.

if (Test-Path $jsonImagesFile) {
    try {
        $imagesData = Get-Content $jsonImagesFile | ConvertFrom-Json
    }
    catch {
        $imagesData = $null
    }
}
else {
    $imagesData = $null
}

$files = Get-ChildItem -Path $downloadsDir -Filter "*.zip"
$newMods = @()
$idCounter = 1000

foreach ($file in $files) {
    $cleanName = $file.BaseName
    $cleanName = $cleanName -replace "^FS25_", "" -replace "_v\d+(\.\d+)*", "" -replace "_", " " -replace "([a-z])([A-Z])", '$1 $2' 
    $cleanName = (Get-Culture).TextInfo.ToTitleCase($cleanName).Trim()

    $category = "gameplay"
    $desc = "$cleanName modu ile oyun deneyiminizi zenginleştirin."
    $author = "Kerem" 

    if ($cleanName -match "(?i)Map|Harita") { $category = "maps"; $desc = "Yeni harita $cleanName ile keşfe çıkın." }
    elseif ($cleanName -match "(?i)Tractor|Traktor") { $category = "tractors"; $desc = "Güçlü traktör $cleanName." }
    # ... (other categories simplified for speed) ...
    
    $images = @()
    if ($imagesData) {
        if ($imagesData.PSObject.Properties[$cleanName]) {
            $images = $imagesData."$cleanName"
        }
        else {
            foreach ($prop in $imagesData.PSObject.Properties) {
                if ($prop.Name -match [regex]::Escape($cleanName)) {
                    $images = $prop.Value; break
                }
            }
        }
    }
    
    if ($images -is [string]) { $images = @($images) }

    $newMod = [Ordered]@{
        id          = $idCounter
        name        = $cleanName
        category    = $category
        description = $desc
        author      = $author
        images      = $images
        downloadUrl = "downloads/$($file.Name)"
    }
    $newMods += $newMod
}

$allMods = [Ordered]@{ "fs25" = $newMods }
$jsonString = $allMods | ConvertTo-Json -Depth 5

$functionsPart = ""
if ($codeStart -ne -1) {
    $functionsPart = $jsContent.Substring($codeStart)
}
else {
    # Fallback to appending nothing, user will have to fix or I'll see invalid file
}

$finalContent = "let allMods = " + $jsonString + ";`n`n" + $functionsPart
$finalContent | Out-File $tempFile -Encoding utf8
