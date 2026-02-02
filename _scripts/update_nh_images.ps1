# Update New Holland images to use different images per model

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# T5 models - compact/utility
$t5Models = @(
    'New Holland T5 AC/DC',
    'New Holland T5 Utility', 
    'New Holland T5 BLM Series',
    'New Holland TT Series'
)

# T6 models - medium
$t6Models = @(
    'New Holland T6 MX GS',
    'New Holland T6 Edit',
    'New Holland TR6S Series'
)

# T8 models - large
$t8Models = @(
    'New Holland T8',
    'New Holland T8 Pro'
)

# T7 models keep existing T7 image
$t7Models = @(
    'New Holland T7',
    'New Holland T7 2011',
    'New Holland T7070',
    'New Holland T7 Edit',
    'New Holland T7 HD Edition',
    'New Holland T7 Standard',
    'New Holland T7 Agribumper',
    'New Holland TDD Bluemaster',
    'New Holland T7 Modifiye'
)

foreach ($model in $t5Models) {
    $escapedModel = [regex]::Escape($model)
    $pattern = '("name": "' + $escapedModel + '",[\s\S]*?"images": \[)"[^"]*"(\])'
    $content = $content -replace $pattern, '$1"images/new_holland_t5.png"$2'
    Write-Host "Updated $model to T5 image"
}

foreach ($model in $t6Models) {
    $escapedModel = [regex]::Escape($model)
    $pattern = '("name": "' + $escapedModel + '",[\s\S]*?"images": \[)"[^"]*"(\])'
    $content = $content -replace $pattern, '$1"images/new_holland_t6.png"$2'
    Write-Host "Updated $model to T6 image"
}

foreach ($model in $t8Models) {
    $escapedModel = [regex]::Escape($model)
    $pattern = '("name": "' + $escapedModel + '",[\s\S]*?"images": \[)"[^"]*"(\])'
    $content = $content -replace $pattern, '$1"images/new_holland_t8.png"$2'
    Write-Host "Updated $model to T8 image"
}

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "`nDone! New Holland images updated by model type."
