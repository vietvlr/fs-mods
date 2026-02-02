# Complete fix - unique descriptions and proper brand names

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Complete mod database with proper names and unique descriptions
$modDatabase = @{
    # TRACTORS
    'downloads/FS25_6C_RVshift.zip'                      = @{
        name     = 'Deutz Fahr 6C RV Shift'
        category = 'tractors'
        desc     = 'Deutz Fahr 6C serisi traktör. RV Shift vites sistemi ile sorunsuz güç aktarımı ve 120 HP motor gücü.'
    }
    'downloads/FS25_Deutz_Series_9.zip'                  = @{
        name     = 'Deutz Fahr Series 9'
        category = 'tractors'
        desc     = 'Deutz Fahr Series 9 büyük güç traktörü. 340 HP motor, geniş tarlalar için ideal performans.'
    }
    'downloads/FS25_FD_SDF_6C.zip'                       = @{
        name     = 'SDF 6C'
        category = 'tractors'
        desc     = 'Same Deutz Fahr 6C traktör. Kompakt tasarım ve yüksek manevra kabiliyeti.'
    }
    'downloads/FS25_SDF_6C_Modifiyeli.zip'               = @{
        name     = 'SDF 6C Modifiyeli'
        category = 'tractors'
        desc     = 'Modifiye edilmiş SDF 6C traktör. Özel görünüm ve geliştirilmiş özellikler.'
    }
    'downloads/FS25_ErkuntSerisi.zip'                    = @{
        name     = 'Erkunt Serisi'
        category = 'tractors'
        desc     = 'Türk markası Erkunt traktör serisi. Yerli üretim, güvenilir performans.'
    }
    'downloads/FS25_johnDeereSeries5M.zip'               = @{
        name     = 'John Deere 5M Series'
        category = 'tractors'
        desc     = 'John Deere 5M serisi orta sınıf traktör. 90-140 HP, çok yönlü kullanım.'
    }
    'downloads/FS25_landiniSerie7RoboSixrustedition.zip' = @{
        name     = 'Landini Serie 7 Robo Six'
        category = 'tractors'
        desc     = 'Landini Serie 7 Robo Six traktör. İtalyan mühendisliği, rust edition görünümü.'
    }
    'downloads/FS25_JCBBackhoeLoader.zip'                = @{
        name     = 'JCB Backhoe Loader'
        category = 'tractors'
        desc     = 'JCB kazıcı yükleyici. Çift taraflı çalışma, inşaat ve çiftlik işleri için ideal.'
    }
    'downloads/FS25_MasseyFerguson_8700S.zip'            = @{
        name     = 'Massey Ferguson 8700S'
        category = 'tractors'
        desc     = 'Massey Ferguson 8700S güçlü traktör. 270-405 HP, premium kabin konforu.'
    }
    'downloads/FS25_Massey_Ferguson_Series_6700S.zip'    = @{
        name     = 'Massey Ferguson 6700S'
        category = 'tractors'
        desc     = 'Massey Ferguson 6700S serisi. 120-180 HP, orta ölçekli çiftlikler için mükemmel.'
    }
    'downloads/FS25_MF_6S_RUST_ED__T_.zip'               = @{
        name     = 'Massey Ferguson 6S Rust Edition'
        category = 'tractors'
        desc     = 'Massey Ferguson 6S traktör, yaşlandırılmış rust görünümü ile karakteristik tasarım.'
    }
    'downloads/FS25_MF_9S_Editado.zip'                   = @{
        name     = 'Massey Ferguson 9S'
        category = 'tractors'
        desc     = 'Massey Ferguson 9S büyük traktör. 350+ HP, büyük tarlalar için tasarlandı.'
    }
    'downloads/MF_7S.zip'                                = @{
        name     = 'Massey Ferguson 7S'
        category = 'tractors'
        desc     = 'Massey Ferguson 7S serisi. Modern tasarım, 150-230 HP güç aralığı.'
    }
    'downloads/FS25_NewHollandT5AC_DC.zip'               = @{
        name     = 'New Holland T5 AC/DC'
        category = 'tractors'
        desc     = 'New Holland T5 elektrikli hibrit traktör. Çevre dostu, verimli güç.'
    }
    'downloads/FS25_NewHollandT5_Utility.zip'            = @{
        name     = 'New Holland T5 Utility'
        category = 'tractors'
        desc     = 'New Holland T5 Utility traktör. 80-120 HP, çok amaçlı kullanım için ideal.'
    }
    'downloads/FS25_NewhollandT7.zip'                    = @{
        name     = 'New Holland T7'
        category = 'tractors'
        desc     = 'New Holland T7 serisi traktör. 180-270 HP, Auto Command CVT şanzıman.'
    }
    'downloads/FS25_newHollandT72011.zip'                = @{
        name     = 'New Holland T7 2011'
        category = 'tractors'
        desc     = 'New Holland T7 2011 model traktör. Klasik tasarım, güvenilir performans.'
    }
    'downloads/FS25_NewHolland_T5_Blm_Series.zip'        = @{
        name     = 'New Holland T5 BLM Series'
        category = 'tractors'
        desc     = 'New Holland T5 BLM serisi. Kompakt güç, dar alanlar için mükemmel.'
    }
    'downloads/FS25_NewHolland_T6_T4B_MxGs.zip'          = @{
        name     = 'New Holland T6 MX GS'
        category = 'tractors'
        desc     = 'New Holland T6 traktör. 120-175 HP, modern teknoloji ve konfor.'
    }
    'downloads/FS25_NewHolland_T7070.zip'                = @{
        name     = 'New Holland T7070'
        category = 'tractors'
        desc     = 'New Holland T7070 premium traktör. 250 HP, lüks kabin donanımı.'
    }
    'downloads/FS25_NewHolland_T7Edit.zip'               = @{
        name     = 'New Holland T7 Edit'
        category = 'tractors'
        desc     = 'Düzenlenmiş New Holland T7 traktör. Özel renk ve aksesuar seçenekleri.'
    }
    'downloads/FS25_NewHolland_t7HD_edition.zip'         = @{
        name     = 'New Holland T7 HD Edition'
        category = 'tractors'
        desc     = 'New Holland T7 Heavy Duty versiyon. Güçlendirilmiş şasi ve aks sistemi.'
    }
    'downloads/FS25_NewHolland_TR6S_Series.zip'          = @{
        name     = 'New Holland TR6S Series'
        category = 'tractors'
        desc     = 'New Holland TR6S serisi. 130-160 HP, meyve bahçeleri için uygun.'
    }
    'downloads/FS25_New_Holland_T7.zip'                  = @{
        name     = 'New Holland T7 Standard'
        category = 'tractors'
        desc     = 'New Holland T7 standart versiyon. Güvenilir güç, kolay kullanım.'
    }
    'downloads/FS25_New_Holland_T7_Agribumper.zip'       = @{
        name     = 'New Holland T7 Agribumper'
        category = 'tractors'
        desc     = 'New Holland T7 Agribumper ön koruma sistemi ile. Ekstra güvenlik.'
    }
    'downloads/FS25_New_Holland_T8_ByZladdi76.zip'       = @{
        name     = 'New Holland T8'
        category = 'tractors'
        desc     = 'New Holland T8 büyük traktör. 270-435 HP, büyük çiftlikler için.'
    }
    'downloads/FS25_New_Holland_TDD_Bluemaster.zip'      = @{
        name     = 'New Holland TDD Bluemaster'
        category = 'tractors'
        desc     = 'New Holland TDD Bluemaster özel seri. Mavi renk, premium donanım.'
    }
    'downloads/FS25_New_Holland_TT_Series.zip'           = @{
        name     = 'New Holland TT Series'
        category = 'tractors'
        desc     = 'New Holland TT ekonomik seri. Giriş seviyesi, uygun fiyat.'
    }
    'downloads/FS25_NH_T8.zip'                           = @{
        name     = 'New Holland T8 Pro'
        category = 'tractors'
        desc     = 'New Holland T8 profesyonel seri. IntelliView ekran, GPS hazır.'
    }
    'downloads/FS25_t6_edit.zip'                         = @{
        name     = 'New Holland T6 Edit'
        category = 'tractors'
        desc     = 'Özelleştirilmiş New Holland T6 traktör. Modifiye görünüm.'
    }
    'downloads/New_Holland_T7_Modifie.zip'               = @{
        name     = 'New Holland T7 Modifiye'
        category = 'tractors'
        desc     = 'Modifiye edilmiş New Holland T7. Türk modifiye stili, özel dokunuşlar.'
    }
    'downloads/FS25_Tumosan9115_v5_REPACK_FIXED.zip'     = @{
        name     = 'Tümosan 9115'
        category = 'tractors'
        desc     = 'Türk markası Tümosan 9115 traktör. 110 HP, yerli ve milli güç.'
    }
    'downloads/FS25_Tumosan_8075.zip'                    = @{
        name     = 'Tümosan 8075'
        category = 'tractors'
        desc     = 'Tümosan 8075 orta sınıf traktör. 75 HP, ekonomik ve dayanıklı.'
    }
    
    # EQUIPMENT
    'downloads/FS25_KuhnProfilePack.zip'                 = @{
        name     = 'Kuhn Profile Paketi'
        category = 'equipment'
        desc     = 'Kuhn profile serisi ekipman paketi. Toprak işleme için profesyonel çözümler.'
    }
    'downloads/FS25_Lemken_Juwel8_Pack.zip'              = @{
        name     = 'Lemken Juwel 8 Paketi'
        category = 'equipment'
        desc     = 'Lemken Juwel 8 pulluk paketi. Yüksek kaliteli toprak işleme.'
    }
    'downloads/FS25_AlpegoCaymanCF_Series.zip'           = @{
        name     = 'Alpego Cayman CF Series'
        category = 'equipment'
        desc     = 'Alpego Cayman CF disk tırmık serisi. İtalyan kalitesi, derin toprak işleme.'
    }
    'downloads/FS25_harrows_pack.zip'                    = @{
        name     = 'Tırmık Paketi'
        category = 'equipment'
        desc     = 'Çeşitli tırmık modelleri içeren paket. Tohum yatağı hazırlama için ideal.'
    }
    'downloads/FS25_OzdokenEvodiscKPack.zip'             = @{
        name     = 'Özdöken Evodisc K Paketi'
        category = 'equipment'
        desc     = 'Türk markası Özdöken Evodisc K disk tırmık. Yerli üretim kalitesi.'
    }
    'downloads/FS25_OzdokenRCPack.zip'                   = @{
        name     = 'Özdöken RC Paketi'
        category = 'equipment'
        desc     = 'Özdöken RC serisi tarım aletleri paketi. Çok yönlü kullanım.'
    }
    'downloads/FS25_OzdokenRotokulPack.zip'              = @{
        name     = 'Özdöken Rotokul Paketi'
        category = 'equipment'
        desc     = 'Özdöken Rotokul rotary tiller paketi. Toprak hazırlama için.'
    }
    'downloads/FS25_OzenisStonePicker.zip'               = @{
        name     = 'Özeniş Taş Toplama Makinesi'
        category = 'equipment'
        desc     = 'Özeniş taş toplama makinesi. Tarlalarınızı taşlardan temizleyin.'
    }
    'downloads/FS25_Unlu5.zip'                           = @{
        name     = 'Ünlü 5 Saban'
        category = 'equipment'
        desc     = 'Türk markası Ünlü 5 diskli saban. Kaliteli toprak işleme.'
    }
    'downloads/FS25_Unlu_Automatic_Plow.zip'             = @{
        name     = 'Ünlü Otomatik Saban'
        category = 'equipment'
        desc     = 'Ünlü otomatik dönüşlü saban. Kolay kullanım, verimli çalışma.'
    }
    'downloads/FS25_Sigma4_Pack.zip'                     = @{
        name     = 'Sigma 4 Paketi'
        category = 'equipment'
        desc     = 'Sigma 4 tarım ekipmanları paketi. Kaliteli Türk markası.'
    }
    'downloads/FS25_Paksan_Hammer.zip'                   = @{
        name     = 'Paksan Çekiç Kırıcı'
        category = 'equipment'
        desc     = 'Paksan çekiç kırıcı. Taş kırma ve arazi temizleme için.'
    }
    'downloads/FS25_ValentiniMammut_Series.zip'          = @{
        name     = 'Valentini Mammut Series'
        category = 'equipment'
        desc     = 'Valentini Mammut ağır hizmet frezesi. Orman ve tarla temizliği.'
    }
    'downloads/FS25_Unihyd.zip'                          = @{
        name     = 'Ünihid Hidrolik Ekipman'
        category = 'equipment'
        desc     = 'Ünihid hidrolik tarım ekipmanları. Türk kalitesi.'
    }
    'downloads/FS25_bucket.zip'                          = @{
        name     = 'Kepçe'
        category = 'equipment'
        desc     = 'Çok amaçlı ön kepçe. Yükleme ve taşıma işleri için.'
    }
    'downloads/FS25_Ramp.zip'                            = @{
        name     = 'Rampa'
        category = 'equipment'
        desc     = 'Yükleme rampası. Araç ve ekipman yüklemesi için.'
    }
    'downloads/FS25_ScrewConveyor.zip'                   = @{
        name     = 'Vidalı Konveyör'
        category = 'equipment'
        desc     = 'Vidalı konveyör sistemi. Tahıl ve yem taşıma için.'
    }
    'downloads/FS25_PneumaticConveyorForGrain.zip'       = @{
        name     = 'Pnömatik Tahıl Konveyörü'
        category = 'equipment'
        desc     = 'Pnömatik tahıl taşıma sistemi. Hızlı ve verimli aktarım.'
    }
    'downloads/FS25_cultivatorFieldCreator.zip'          = @{
        name     = 'Tarla Oluşturucu Kültivatör'
        category = 'equipment'
        desc     = 'Tarla oluşturma özellikli kültivatör. Yeni tarla açma için.'
    }
    'downloads/FS25_TrailerJointBlock.zip'               = @{
        name     = 'Römork Bağlantı Bloğu'
        category = 'equipment'
        desc     = 'Römork bağlantı aparatı. Birden fazla römork çekme.'
    }
    'downloads/FS25_Ozduman18.zip'                       = @{
        name     = 'Özduman 18 Tonluk'
        category = 'equipment'
        desc     = 'Özduman 18 tonluk damperli römork. Büyük kapasite taşıma.'
    }
    
    # MAPS
    'downloads/FarmTurkMap.zip'                          = @{
        name     = 'Farm Türk Haritası'
        category = 'maps'
        desc     = 'Türkiye temalı çiftlik haritası. Anadolu manzarası, Türk köy atmosferi.'
    }
    'downloads/FS25_Hagenstedt_Husbandries.zip'          = @{
        name     = 'Hagenstedt Çiftlikleri'
        category = 'maps'
        desc     = 'Genişletilmiş Hagenstedt haritası. Ek çiftlikler ve hayvancılık alanları.'
    }
    'downloads/FS25_Mala_wies.zip'                       = @{
        name     = 'Mala Wieś Haritası'
        category = 'maps'
        desc     = 'Polonya köy haritası. Küçük tarlalar, otantik Avrupa atmosferi.'
    }
    'downloads/FS25_Westerrade.zip'                      = @{
        name     = 'Westerrade Haritası'
        category = 'maps'
        desc     = 'Alman köy haritası. Detaylı köy merkezi, geleneksel çiftçilik.'
    }
    'downloads/FS25_Yigitpinari_Village.zip'             = @{
        name     = 'Yiğitpınarı Köyü'
        category = 'maps'
        desc     = 'Türk köyü haritası. Anadolu köy yaşamı, özgün Türk çiftliği.'
    }
    
    # TRUCKS & CARS
    'downloads/FS25_BMW_M4_GTS_2016.zip'                 = @{
        name     = 'BMW M4 GTS 2016'
        category = 'trucks'
        desc     = 'BMW M4 GTS spor otomobil. Çiftlik arabası olarak kullanım, hızlı ulaşım.'
    }
    
    # TOOLS
    'downloads/FS25_Forest_Machete.zip'                  = @{
        name     = 'Orman Palası'
        category = 'tools'
        desc     = 'Orman temizliği için pala. Çalı ve dal kesimi.'
    }
    'downloads/FS25_LumberJack.zip'                      = @{
        name     = 'Oduncu Seti'
        category = 'tools'
        desc     = 'Odunculuk ekipman seti. Ağaç kesimi ve odun işleme araçları.'
    }
    'downloads/FS25_PowerTools.zip'                      = @{
        name     = 'Elektrikli El Aletleri'
        category = 'tools'
        desc     = 'Elektrikli alet seti. Tamir ve bakım işleri için.'
    }
    'downloads/FS25_Scythe.zip'                          = @{
        name     = 'Tırpan'
        category = 'tools'
        desc     = 'Geleneksel tırpan. Elle ot biçme, küçük alanlar için.'
    }
    'downloads/FS25_Shovelhand.zip'                      = @{
        name     = 'El Küreği'
        category = 'tools'
        desc     = 'El küreği. Manuel yükleme ve boşaltma işleri.'
    }
    
    # HARVESTERS
    'downloads/FS25_foragePickup.zip'                    = @{
        name     = 'Yem Toplama Makinesi'
        category = 'harvesters'
        desc     = 'Yem toplama ünitesi. Ot ve silaj toplama için.'
    }
    
    # BUILDINGS/OBJECTS - sampling some key ones
    'downloads/FS25_BaleShed.zip'                        = @{
        name     = 'Balya Deposu'
        category = 'objects'
        desc     = 'Kapalı balya deposu. Balya saklama, yağmurdan koruma.'
    }
    'downloads/FS25_BigCowBarn.zip'                      = @{
        name     = 'Büyük İnek Ahırı'
        category = 'objects'
        desc     = 'Geniş kapasiteli inek ahırı. 200+ hayvan kapasiteli modern tesis.'
    }
    'downloads/FS25_Barns.zip'                           = @{
        name     = 'Ahırlar Paketi'
        category = 'objects'
        desc     = 'Çeşitli ahır modelleri paketi. Farklı hayvan türleri için.'
    }
}

# Parse and update mods
$modPattern = '\{\s*"id":\s*(\d+),\s*"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"description":\s*"([^"]+)",\s*"author":\s*"([^"]+)",\s*"images":\s*\[[^\]]*\],\s*"downloadUrl":\s*"([^"]+)"\s*\}'

$matches = [regex]::Matches($content, $modPattern)
Write-Host "Processing $($matches.Count) mods..."

$updateCount = 0

foreach ($match in $matches) {
    $id = $match.Groups[1].Value
    $oldName = $match.Groups[2].Value
    $oldCat = $match.Groups[3].Value
    $oldDesc = $match.Groups[4].Value
    $author = $match.Groups[5].Value
    $downloadUrl = $match.Groups[6].Value
    
    # Check if we have specific data for this mod
    if ($modDatabase.ContainsKey($downloadUrl)) {
        $modData = $modDatabase[$downloadUrl]
        $newName = $modData.name
        $newCat = $modData.category
        $newDesc = $modData.desc
        
        $oldEntry = $match.Value
        $newEntry = @"
{
            "id": $id,
            "name": "$newName",
            "category": "$newCat",
            "description": "$newDesc",
            "author": "$author",
            "images": [

            ],
            "downloadUrl": "$downloadUrl"
        }
"@
        
        $content = $content.Replace($oldEntry, $newEntry)
        Write-Host "Updated: $newName"
        $updateCount++
    }
}

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "`nDone! Updated $updateCount mods with unique descriptions."
