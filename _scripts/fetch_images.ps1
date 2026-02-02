$scriptPath = "script.js"
$htmlDir = "mod_html_files"
$resultsFile = "images_found_all.json"
$MAX_IMAGES = 4

if (!(Test-Path $htmlDir)) {
    New-Item -ItemType Directory -Path $htmlDir | Out-Null
}

# Read script.js and extract names
$content = Get-Content $scriptPath -Raw
# Extract all names
$modNames = [regex]::Matches($content, '"name":\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value }

Write-Host "Found $($modNames.Count) mods to process."

if (Test-Path $resultsFile) {
    $results = Get-Content $resultsFile | ConvertFrom-Json -AsHashtable
}
else {
    $results = @{}
}

# Parallel processing is hard in basic PS without workflows/jobs complexity, 
# so we will optimize the loop and save incrementally.

$counter = 0
foreach ($name in $modNames) {
    $counter++
    if ($results.ContainsKey($name)) {
        # Skip if already found and has images
        continue
    }

    if ([string]::IsNullOrWhiteSpace($name)) { continue }
    
    $cleanName = $name -replace "^FS25_", "" -replace "_", " "
    $safeName = $cleanName -replace "[^a-zA-Z0-9]", "_"
    Write-Host "[$counter/$($modNames.Count)] Searching for: $cleanName"
    
    $searchUrl = "https://www.kingmods.net/en/search?q=$([uri]::EscapeDataString($cleanName))"
    $searchPagePath = Join-Path $htmlDir "${safeName}_search.html"
    
    try {
        # Only download if not exists to speed up retries
        if (!(Test-Path $searchPagePath)) {
            Invoke-WebRequest -Uri $searchUrl -OutFile $searchPagePath -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -TimeoutSec 10
            Start-Sleep -Milliseconds 200 # Small delay to avoid aggressive rate limiting but faster than before
        }
        
        $searchContent = Get-Content $searchPagePath -Raw
        
        # Look for mod link
        $linkMatch = [regex]::Match($searchContent, 'href="(https://www\.kingmods\.net/en/fs25/mods/[^"]+)"')
        
        if ($linkMatch.Success) {
            $modUrl = $linkMatch.Groups[1].Value
            # Write-Host "  Found Mod URL: $modUrl"
            
            $modPagePath = Join-Path $htmlDir "${safeName}.html"
            
            if (!(Test-Path $modPagePath)) {
                Invoke-WebRequest -Uri $modUrl -OutFile $modPagePath -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" -TimeoutSec 10
                Start-Sleep -Milliseconds 200
            }
            
            $modContent = Get-Content $modPagePath -Raw
            
            # Find all images in swiper-slide or og:image
            $images = @()
            
            # Strategy 1: Find images in swiper slides
            $slideMatches = [regex]::Matches($modContent, '<div class="aspect-w-16 aspect-h-9">\s*<img src="([^"]+)"')
            foreach ($match in $slideMatches) {
                $images += $match.Groups[1].Value
            }
            
            # Strategy 2: If no slides, fallback to og:image
            if ($images.Count -eq 0) {
                $imgMatch = [regex]::Match($modContent, 'property="og:image" content="([^"]+)"')
                if ($imgMatch.Success) {
                    $images += $imgMatch.Groups[1].Value
                }
            }
            
            # Unique and limit
            $images = $images | Select-Object -Unique | Select-Object -First $MAX_IMAGES
            
            if ($images.Count -gt 0) {
                Write-Host "  Found $($images.Count) images."
                $results[$name] = $images
            }
            else {
                Write-Host "  No images found."
            }
        }
        else {
            Write-Host "  Mod URL not found."
        }
    }
    catch {
        Write-Host "  Error processing $name : $($_.Exception.Message)"
    }
    
    # Save every 5 items to not lose progress
    if ($counter % 5 -eq 0) {
        $results | ConvertTo-Json -Depth 2 | Out-File $resultsFile -Encoding utf8
    }
}

$results | ConvertTo-Json -Depth 2 | Out-File $resultsFile -Encoding utf8
Write-Host "Done. Results saved to $resultsFile"
