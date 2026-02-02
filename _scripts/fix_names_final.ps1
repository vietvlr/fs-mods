# Clean and properly format mod names with brands

$scriptPath = "script.js"
$content = Get-Content $scriptPath -Raw -Encoding UTF8

# Direct name replacements - old name -> new proper name
$nameMap = @{
    # Deutz Fahr
    'Deutz Fahr 6C RV Shift'                = 'Deutz Fahr 6C RV Shift'
    'Deutz Fahr Deutz Series 9'             = 'Deutz Fahr Series 9'
    
    # New Holland
    'New Holland Newhollandt5AC/DC'         = 'New Holland T5 AC/DC'
    'New Holland Newhollandt5 Utility'      = 'New Holland T5 Utility'
    'New Holland Newhollandt7'              = 'New Holland T7'
    'New Holland Newhollandt72011'          = 'New Holland T7 2011'
    'New Holland Newholland T5 BLM Series'  = 'New Holland T5 BLM Series'
    'New Holland Newholland T6 T4b MX GS'   = 'New Holland T6 T4B MX GS'
    'New Holland Newholland T7070'          = 'New Holland T7070'
    'New Holland Newholland T7 Edit'        = 'New Holland T7 Edit'
    'New Holland Newholland T7HD Edition'   = 'New Holland T7 HD Edition'
    'New Holland Newholland Tr6S Series'    = 'New Holland TR6S Series'
    'New Holland Nh T8'                     = 'New Holland T8'
    'New Holland T6 Edit'                   = 'New Holland T6 Edit'
    'New Holland T7 Modifie'                = 'New Holland T7 Modifiye'
    'New Holland T7'                        = 'New Holland T7'
    'New Holland T7 Agribumper'             = 'New Holland T7 Agribumper'
    'New Holland T8 Byzladdi76'             = 'New Holland T8'
    'New Holland Tdd Bluemaster'            = 'New Holland TDD Bluemaster'
    'New Holland Tt Series'                 = 'New Holland TT Series'
    
    # Massey Ferguson
    'Massey Ferguson Masseyferguson 8700S'  = 'Massey Ferguson 8700S'
    'Massey Ferguson Series 6700S'          = 'Massey Ferguson 6700S Series'
    'Massey Ferguson Mf 6S Rust Ed T'       = 'Massey Ferguson 6S Rust Edition'
    'Massey Ferguson Mf 9S Editado'         = 'Massey Ferguson 9S Editado'
    'Massey Ferguson Mf 7S'                 = 'Massey Ferguson 7S'
    
    # John Deere
    'John Deere Johndeereseries5m'          = 'John Deere 5M Series'
    
    # SDF
    'SDF Fd Sdf 6C'                         = 'SDF 6C'
    'Sdf 6C Modifiyeli'                     = 'SDF 6C Modifiyeli'
    
    # Tümosan
    'Tümosan Tumosan9115 v5 Repack Fıxed'   = 'Tümosan 9115 v5'
    'Tümosan Tumosan 8075'                  = 'Tümosan 8075'
    
    # Özdöken
    'Özdöken Ozdokenevodisckpack'           = 'Özdöken Evodisc K Paketi'
    'Özdöken Ozdokenrcpack'                 = 'Özdöken RC Paketi'
    'Özdöken Ozdokenrotokulpack'            = 'Özdöken Rotokul Paketi'
    'Özdöken Ozenisstonepicker'             = 'Özeniş Taş Toplama'
    
    # Ünlü
    'Ünlü Unlu5'                            = 'Ünlü 5'
    'Ünlü Unlu Automatic Plow'              = 'Ünlü Otomatik Saban'
    
    # Lizard
    'Lizard Deco Lizard'                    = 'Lizard Dekorasyon'
    'Lızard 12'                             = 'Lizard 12'
    'Lizard Bigbaglift'                     = 'Lizard Big Bag Lift'
    
    # Erkunt
    'Erkuntserisi'                          = 'Erkunt Serisi'
    
    # Landini
    'Landiniserie7robosixrustedition'       = 'Landini Serie 7 Robo Six Rust Edition'
    
    # JCB
    'Jcbbackhoeloader'                      = 'JCB Backhoe Loader'
    
    # Kuhn
    'Kuhnprofilepack'                       = 'Kuhn Profile Paketi'
    
    # Lemken
    'Lemken Juwel8 Pack'                    = 'Lemken Juwel 8 Paketi'
    
    # Alpego
    'Alpegocaymancf Series'                 = 'Alpego Cayman CF Series'
    
    # Valentini
    'Valentinimammut Series'                = 'Valentini Mammut Series'
    
    # Equipment
    'Harrows Pack'                          = 'Tırmık Paketi'
    'Sigma4 Pack'                           = 'Sigma 4 Paketi'
    'Paksan Hammer'                         = 'Paksan Çekiç'
    'Bucket'                                = 'Kepçe'
    'Ramp'                                  = 'Rampa'
    'Screwconveyor'                         = 'Vidalı Konveyör'
    'Pneumaticconveyorforgrain'             = 'Pnömatik Tahıl Konveyörü'
    'Cultivatorfieldcreator'                = 'Tarla Oluşturucu Kültivatör'
    'Trailerjointblock'                     = 'Römork Bağlantı Bloğu'
    'Unihyd'                                = 'Ünihid'
    
    # Maps
    'Farmturkmap'                           = 'Farm Türk Haritası'
    'Hagenstedt Husbandries'                = 'Hagenstedt Çiftlikleri'
    'Mala Wies'                             = 'Mala Wieś Haritası'
    'Westerrade'                            = 'Westerrade Haritası'
    'Yigitpinari Village'                   = 'Yiğitpınarı Köyü'
    'Mapobjectshider'                       = 'Harita Objeleri Gizleyici'
    
    # Buildings
    'Average Wooden Shelter'                = 'Orta Boy Ahşap Barınak'
    'Baleshed'                              = 'Balya Deposu'
    'Barbed Wire Fence And Wooden Gate'     = 'Dikenli Tel Çit ve Ahşap Kapı'
    'Barns'                                 = 'Ahırlar'
    'Barnwithcows'                          = 'İnekli Ahır'
    'Beehives Pack'                         = 'Arı Kovanları Paketi'
    'Benchespack'                           = 'Bank Paketi'
    'Bigcowbarn'                            = 'Büyük İnek Ahırı'
    'Bigfarmhousepack'                      = 'Büyük Çiftlik Evi Paketi'
    'Bigwhitecowbarn'                       = 'Büyük Beyaz İnek Ahırı'
    'Brick Fence'                           = 'Tuğla Çit'
    'Building70s'                           = '70ler Tarzı Bina'
    'Calfshed'                              = 'Buzağı Barınağı'
    'Chickencoop31x12'                      = 'Tavuk Kümesi 31x12'
    'Cinderblockfarm'                       = 'Briket Çiftlik'
    'Concreteblocksilopack'                 = 'Beton Blok Silo Paketi'
    'Cone'                                  = 'Trafik Konisi'
    'Construction Signs'                    = 'İnşaat İşaretleri'
    'Cowbarn85'                             = 'İnek Ahırı 85'
    'Decopackage'                           = 'Dekorasyon Paketi'
    'Doghouse Deco'                         = 'Köpek Kulübesi'
    'Doublerodmatfence'                     = 'Çift Çubuklu Mat Çit'
    'Farmbuildingset'                       = 'Çiftlik Bina Seti'
    'Farmbuilding Pack'                     = 'Çiftlik Bina Paketi'
    'Farmdecorationpack Crossplay'          = 'Çiftlik Dekorasyon Paketi'
    'Farmshedsmallold'                      = 'Küçük Eski Çiftlik Ambarı'
    'Garage18x7'                            = 'Garaj 18x7'
    'Garagecowsheed'                        = 'Garajlı İnek Barınağı'
    'Gardenplot'                            = 'Bahçe Parseli'
    'Gatehouse'                             = 'Bekçi Kulübesi'
    'Gdr Metal Mesh Panel Fence'            = 'Metal Kafes Panel Çit'
    'Grainhall28x12'                        = 'Tahıl Ambarı 28x12'
    'Halfmodernhouse'                       = 'Yarı Modern Ev'
    'Heavydutyrack'                         = 'Ağır Hizmet Rafı'
    'Hobofarmhouses'                        = 'Hobo Çiftlik Evleri'
    'Housesn'                               = 'SN Evi'
    'Industrialsawmill'                     = 'Endüstriyel Kereste Fabrikası'
    'Ivoy Chicken Coop'                     = 'Ivoy Tavuk Kümesi'
    'Ivoy Farm Garage'                      = 'Ivoy Çiftlik Garajı'
    'Ivoy Straw Hangar'                     = 'Ivoy Saman Hangarı'
    'Largestackbales'                       = 'Büyük Balya Yığını'
    'Machinestorage'                        = 'Makine Deposu'
    'Ma Hedgeplaceable'                     = 'Yerleştirilebilir Çit'
    'Mobileworkshop'                        = 'Mobil Atölye'
    'Modernhouseset'                        = 'Modern Ev Seti'
    'Modularshed'                           = 'Modüler Ambar'
    'Oldbrickfarmhouse'                     = 'Eski Tuğla Çiftlik Evi'
    'Oldconcretefence'                      = 'Eski Beton Çit'
    'Oldfarmbuildingset'                    = 'Eski Çiftlik Bina Seti'
    'Oldgarage'                             = 'Eski Garaj'
    'Oldpolishfencespack'                   = 'Eski Polonya Çitleri Paketi'
    'Oldpolishgarage'                       = 'Eski Polonya Garajı'
    'Oldrustyshed'                          = 'Eski Paslı Ambar'
    'Oldshedpack'                           = 'Eski Ambar Paketi'
    'Old Manure Heap'                       = 'Eski Gübre Yığını'
    'Old Woodenshed'                        = 'Eski Ahşap Ambar'
    'Open Chicken Coop'                     = 'Açık Tavuk Kümesi'
    'Packlargecowsheds'                     = 'Büyük İnek Barınakları Paketi'
    'Packofgraybuildings'                   = 'Gri Binalar Paketi'
    'Packofgreenhouses'                     = 'Seralar Paketi'
    'Pack Of Decorative Tiles'              = 'Dekoratif Karo Paketi'
    'Pack Sheds Br'                         = 'BR Ambar Paketi'
    'Pallegney Buildings Pack'              = 'Pallegney Binalar Paketi'
    'Pgr Office'                            = 'PGR Ofis'
    'Pigstywithbarn'                        = 'Ahırlı Domuz Ağılı'
    'Pit'                                   = 'Çukur/Silaj Çukuru'
    'Placeable Filling Stations'            = 'Yerleştirilebilir Dolum İstasyonları'
    'Placefencesanywhere'                   = 'Her Yere Çit Koy'
    'Placetreesındefinitely'                = 'Sınırsız Ağaç Dik'
    'Plant Decoration Pack'                 = 'Bitki Dekorasyon Paketi'
    'Polankifarmbuildings'                  = 'Polanki Çiftlik Binaları'
    'Polishfarmhouse'                       = 'Polonya Çiftlik Evi'
    'Polishfence'                           = 'Polonya Çiti'
    'Polishwoodenshed'                      = 'Polonya Ahşap Ambarı'
    'Productiondecorationpack'              = 'Üretim Dekorasyon Paketi'
    'Shedcowbarn'                           = 'Ambarlı İnek Ahırı'
    'Shedgarage'                            = 'Ambar Garaj'
    'Shedspackpgr'                          = 'PGR Ambar Paketi'
    'Silagesilo'                            = 'Silaj Silosu'
    'Silopack'                              = 'Silo Paketi'
    'Smallbeehives'                         = 'Küçük Arı Kovanları'
    'Smallconcretebunkersilo'               = 'Küçük Beton Bunker Silo'
    'Smallcowshed'                          = 'Küçük İnek Barınağı'
    'Smallwoodenshed'                       = 'Küçük Ahşap Ambar'
    'Smallworkshop'                         = 'Küçük Atölye'
    'Small Chicken Coop'                    = 'Küçük Tavuk Kümesi'
    'Straw Shed Old'                        = 'Eski Saman Ambarı'
    'Straw Storage'                         = 'Saman Deposu'
    'Toolshed'                              = 'Alet Deposu'
    'Whitecowbarn'                          = 'Beyaz İnek Ahırı'
    'Woodcladmachineshed'                   = 'Ahşap Kaplı Makine Ambarı'
    'Woodenbarnpd'                          = 'PD Ahşap Ahır'
    'Workshoptable'                         = 'Atölye Masası'
    
    # Tools
    'Forest Machete'                        = 'Orman Palası'
    'Lumberjack'                            = 'Oduncu'
    'Powertools'                            = 'Elektrikli Aletler'
    'Scythe'                                = 'Tırpan'
    'Shovelhand'                            = 'El Küreği'
    
    # Gameplay mods
    '5S V3 Pempe'                           = '5S v3 Pembe'
    'Addabletriggers'                       = 'Eklenebilir Tetikleyiciler'
    'Additionalcurrencies'                  = 'Ek Para Birimleri'
    'Additionalfieldınfo'                   = 'Ek Tarla Bilgisi'
    'Additionalgamesettings'                = 'Ek Oyun Ayarları'
    'Aditionalgamesettings'                 = 'Ek Oyun Ayarları'
    'Adjustworkingspeed'                    = 'Çalışma Hızı Ayarlama'
    'Allthegroundtextures'                  = 'Tüm Zemin Dokuları'
    'Alterunterstand'                       = 'Alternatif Barınak'
    'Animallimitıncreaser64'                = 'Hayvan Limiti Artırıcı 64x'
    'Betterplacablesellprices'              = 'Daha İyi Yerleşim Satış Fiyatları'
    'Buyablemanureandother'                 = 'Satın Alınabilir Gübre'
    'Cabview'                               = 'Kabin Görünümü'
    'Camerazoom'                            = 'Kamera Zoom'
    'Disableplayercameradof'                = 'Oyuncu Kamera DoF Kapat'
    'Dynamiclowering'                       = 'Dinamik Alçaltma'
    'Easydevcontrols'                       = 'Kolay Geliştirici Kontrolleri'
    'Enhancedvehicle'                       = 'Gelişmiş Araç'
    'Exhaustextension'                      = 'Egzoz Uzantısı'
    'Fdp'                                   = 'FDP'
    'Foragepickup'                          = 'Yem Toplama'
    'Freeterraformingandpainting'           = 'Ücretsiz Arazi Düzenleme'
    'Fuellevelwarning'                      = 'Yakıt Seviyesi Uyarısı'
    'Grownow'                               = 'Hemen Büyüt'
    'Hirschfeld Brantner Pack By Hıp Marco' = 'Hirschfeld Brantner Paketi'
    'Insidecamerazoom'                      = 'İç Kamera Zoom'
    'İnteractivecontrol'                    = 'Etkileşimli Kontrol'
    'Licenseplatemanager'                   = 'Plaka Yöneticisi'
    'Liquid Lime'                           = 'Sıvı Kireç'
    'Longerlastingmud'                      = 'Uzun Süren Çamur'
    'Lowrumbler'                            = 'Düşük Titreşim'
    'Morehoneypalletspawneroptions'         = 'Daha Fazla Bal Paleti Seçeneği'
    'Naturalwaterriversandpondspack'        = 'Doğal Su Kaynakları Paketi'
    'Ozduman18'                             = 'Özduman 18'
    'Paintandterraformanywhere'             = 'Her Yerde Boyama ve Düzenleme'
    'Perfectedge'                           = 'Mükemmel Kenar'
    'Pgr Mpack'                             = 'PGR M Paketi'
    'Placeterraformpaintanywhere Kingmods'  = 'Her Yerde Düzenleme'
    'Playermovement'                        = 'Oyuncu Hareketi'
    'Pongespx'                              = 'Ponge SPX'
    'Quickscreenshotmode'                   = 'Hızlı Ekran Görüntüsü'
    'Realisticweather'                      = 'Gerçekçi Hava Durumu'
    'Realspeedlimit'                        = 'Gerçek Hız Limiti'
    'Ropeandchain'                          = 'İp ve Zincir'
    'Rudolphdk 280Ra'                       = 'Rudolph DK 280RA'
    'Selleverything'                        = 'Her Şeyi Sat'
    'Shopsearch'                            = 'Mağaza Arama'
    'Splitbrakes'                           = 'Ayrı Frenler'
    'Storedeliveries'                       = 'Mağaza Teslimatları'
    'Switchablebalewrappersforbalers'       = 'Değiştirilebilir Balya Sarıcılar'
    'Tarpaulin'                             = 'Branda'
    'Testdrive'                             = 'Test Sürüşü'
    'Tipanywhere'                           = 'Her Yere Boşalt'
    'Towingchain'                           = 'Çekme Zinciri'
    'Transferownership'                     = 'Sahiplik Transferi'
    'Universalautoload'                     = 'Evrensel Otomatik Yükleme'
    'Unlimitedcolorconfigurations'          = 'Sınırsız Renk Ayarları'
    'Unrestrictedplacement'                 = 'Sınırsız Yerleştirme'
    
    # BMW
    'Bmw M4 Gts 2016'                       = 'BMW M4 GTS 2016'
}

Write-Host "Applying $($nameMap.Count) name corrections..."

foreach ($oldName in $nameMap.Keys) {
    $newName = $nameMap[$oldName]
    $pattern = '"name": "' + [regex]::Escape($oldName) + '"'
    $replacement = '"name": "' + $newName + '"'
    
    if ($content -match [regex]::Escape($oldName)) {
        $content = $content -replace $pattern, $replacement
        Write-Host "  $oldName -> $newName"
    }
}

$content | Set-Content $scriptPath -Encoding UTF8
Write-Host "`nDone! All names corrected."
