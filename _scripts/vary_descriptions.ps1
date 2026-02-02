# Generate unique descriptions for remaining mods

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Description templates by category - many variations
$descTemplates = @{
    'tractors'   = @(
        "{0} traktörü, güçlü motoru ve modern tasarımıyla çiftliğinizin vazgeçilmezi olacak."
        "{0} ile tarlalarınızı verimli şekilde işleyin. Güvenilir performans, düşük yakıt tüketimi."
        "Profesyonel tarım için {0}. Ergonomik kabin, kolay kullanım."
        "{0} traktör, ağır işler için tasarlandı. Yüksek çekiş gücü, dayanıklı yapı."
        "{0} ile çiftçiliğin keyfini çıkarın. Konforlu sürüş, güçlü performans."
    )
    'harvesters' = @(
        "{0} ile hasadınızı hızlı ve kayıpsız tamamlayın. Büyük depo kapasitesi."
        "{0} biçerdöver, profesyonel hasat için en iyi tercih. Yüksek verimlilik."
        "Hasat zamanı geldiğinde {0} yanınızda. Kaliteli kesim, temiz toplama."
    )
    'trucks'     = @(
        "{0} ile ürünlerinizi güvenle taşıyın. Geniş yük kapasitesi, güçlü motor."
        "{0} kamyon, lojistik işlerinizi kolaylaştırır. Dayanıklı şasi, konforlu kabin."
        "Nakliye ihtiyaçlarınız için {0}. Ekonomik yakıt tüketimi, yüksek performans."
    )
    'equipment'  = @(
        "{0} ile toprağınızı mükemmel şekilde hazırlayın. Profesyonel sonuçlar."
        "{0} ekipmanı, tarım işlerinizi kolaylaştırır. Dayanıklı ve verimli."
        "Çiftliğiniz için {0}. Kaliteli işçilik, uzun ömürlü kullanım."
        "{0} ile işlerinizi hızlandırın. Kolay bakım, yüksek performans."
        "Profesyonel çiftçiler için {0}. Güvenilir çalışma, düşük maliyet."
    )
    'maps'       = @(
        "{0} ile yeni bir tarım macerasına atılın. Keşfedilecek geniş alanlar."
        "{0} haritasında çiftçiliğin tadını çıkarın. Detaylı arazi, çeşitli tesisler."
        "Benzersiz {0} deneyimi. Farklı bölgeler, yeni fırsatlar."
    )
    'objects'    = @(
        "{0} ile çiftliğinizi güzelleştirin. Estetik tasarım, fonksiyonel kullanım."
        "Çiftliğinize {0} ekleyin. Pratik çözüm, kolay yerleştirme."
        "{0} binası, çiftlik operasyonlarınızı destekler. Geniş kapasite."
        "{0} ile çiftliğinizi modernleştirin. Şık görünüm, kaliteli yapı."
        "Depolama ihtiyaçlarınız için {0}. Organize alan, kolay erişim."
    )
    'tools'      = @(
        "{0} ile çiftlik işlerinizi kolaylaştırın. Pratik ve kullanışlı."
        "El işleri için {0}. Kaliteli yapım, ergonomik tasarım."
        "{0} aleti, günlük işlerinizde yardımcınız. Hafif ve dayanıklı."
    )
    'gameplay'   = @(
        "{0} modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol."
        "{0} - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım."
        "Oyun kalitesini artıran {0}. Performans iyileştirmeleri, ekstra özellikler."
        "{0} modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli."
        "{0} ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler."
    )
}

# Parse mods
$modPattern = '\{\s*"id":\s*(\d+),\s*"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"description":\s*"([^"]+)",\s*"author":\s*"([^"]+)",\s*"images":\s*\[[^\]]*\],\s*"downloadUrl":\s*"([^"]+)"\s*\}'

$matches = [regex]::Matches($content, $modPattern)
Write-Host "Generating unique descriptions for $($matches.Count) mods..."

$updateCount = 0

foreach ($match in $matches) {
    $id = [int]$match.Groups[1].Value
    $name = $match.Groups[2].Value
    $category = $match.Groups[3].Value
    $oldDesc = $match.Groups[4].Value
    $author = $match.Groups[5].Value
    $downloadUrl = $match.Groups[6].Value
    
    # Get templates for this category
    $templates = $descTemplates[$category]
    if (-not $templates) {
        $templates = $descTemplates['gameplay']
    }
    
    # Use mod ID to select template (ensures variety and consistency)
    $templateIndex = $id % $templates.Count
    $newDesc = $templates[$templateIndex] -f $name
    
    # Only update if description looks generic (contains old format markers)
    if ($oldDesc -match 'modu ile oyun deneyiminizi' -or $oldDesc -match 'Pratik özellikler' -or $oldDesc -match 'zenginleştirin\.$') {
        $oldEntry = $match.Value
        $newEntry = @"
{
            "id": $id,
            "name": "$name",
            "category": "$category",
            "description": "$newDesc",
            "author": "$author",
            "images": [

            ],
            "downloadUrl": "$downloadUrl"
        }
"@
        
        $content = $content.Replace($oldEntry, $newEntry)
        $updateCount++
    }
}

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "`nDone! Updated $updateCount mods with varied descriptions."
