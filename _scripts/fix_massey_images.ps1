
$jsonContent = Get-Content "images_found_all.json" -Raw | ConvertFrom-Json
$imagesDir = "images"

# Mapping: ScriptName (for comment/ref) -> JsonKey -> OutputFilename
$mappings = @(
    @{ Name = "MF 8700S"; JsonKey = "Massey Ferguson 8700 S"; Output = "massey_ferguson_8700s.jpg" },
    @{ Name = "MF 6700S"; JsonKey = "Massey Ferguson 6700S"; Output = "massey_ferguson_6700s.jpg" },
    @{ Name = "MF 6S Rust"; JsonKey = "Massey Ferguson 6S (Paslı)"; Output = "massey_ferguson_6s_rust.jpg" },
    @{ Name = "MF 9S"; JsonKey = "Massey Ferguson 9S Edit"; Output = "massey_ferguson_9s.jpg" },
    @{ Name = "MF 7S"; JsonKey = "Massey Ferguson 7S"; Output = "massey_ferguson_7s.jpg" }
)

foreach ($map in $mappings) {
    $key = $map.JsonKey
    $output = Join-Path $imagesDir $map.Output
    
    if ($jsonContent.PSObject.Properties.Name -contains $key) {
        $urlData = $jsonContent.$key
        $url = ""
        
        if ($urlData -is [array]) {
            $url = $urlData[0]
        }
        else {
            $url = $urlData
        }
        
        if ($url) {
            Write-Host "Downloading $key to $output..."
            try {
                Invoke-WebRequest -Uri $url -OutFile $output
                Write-Host "Success."
            }
            catch {
                Write-Error "Failed to download ${url}: $_"
            }
        }
        else {
            Write-Warning "No URL found for $key"
        }
    }
    else {
        Write-Warning "Key '$key' not found in JSON."
    }
}
