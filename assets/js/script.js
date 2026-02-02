const categoryLabels = {
    'tractors': 'Traktörler',
    'harvesters': 'Biçerdöverler',
    'trailers': 'Römorklar',
    'equipment': 'Ekipmanlar',
    'gameplay': 'Oynanış',
    'maps': 'Haritalar',
    'trucks': 'Kamyonlar',
    'cars': 'Arabalar',
    'tools': 'Aletler',
    'objects': 'Objeler'
};

const path = window.location.pathname;
const currentGame = path.includes('fs22') ? 'fs22' : 'fs25';
let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 10;

let allMods = {
    "fs22": [
    {
        "id":  2001,
        "name":  "P la ce An yw he re ma st er",
        "description":  "P la ce An yw he re ma st er modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22PlaceAnywheremaster.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2002,
        "name":  "3 r dP er so n",
        "description":  "3 r dP er so n modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_3rdPerson.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2003,
        "name":  "a dd it io na lC ur re nc ie s",
        "description":  "a dd it io na lC ur re nc ie s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_additionalCurrencies.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2004,
        "name":  "a dj us tW or ki ng Sp ee d",
        "description":  "a dj us tW or ki ng Sp ee d modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_adjustWorkingSpeed.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2005,
        "name":  "C as eIH F ar ma ll",
        "description":  "C as eIH F ar ma ll modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_CaseIH_Farmall.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2006,
        "name":  "E as yD ev Co nt ro ls",
        "description":  "E as yD ev Co nt ro ls modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_EasyDevControls.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2007,
        "name":  "E ce",
        "description":  "E ce modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Ece.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2008,
        "name":  "E rk un t S er ve t 80",
        "description":  "E rk un t S er ve t 80 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Erkunt_Servet_80.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2009,
        "name":  "E rk un t S er ve t 85 P lu s",
        "description":  "E rk un t S er ve t 85 P lu s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Erkunt_Servet_85Plus.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2010,
        "name":  "F ah rA PN",
        "description":  "F ah rA PN modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_FahrAPN.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2011,
        "name":  "H ar ro wT",
        "description":  "H ar ro wT modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_HarrowT.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2012,
        "name":  "H at ta t 398",
        "description":  "H at ta t 398 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Hattat_398.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2013,
        "name":  "H oc ao gl u K as a",
        "description":  "H oc ao gl u K as a modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Hocaoglu_Kasa.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2014,
        "name":  "IM T p lo ws",
        "description":  "IM T p lo ws modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_IMT_plows.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "equipment"
    },
    {
        "id":  2015,
        "name":  "J oh nD ee re 6 R Ex tr aL ar ge Se ri es",
        "description":  "J oh nD ee re 6 R Ex tr aL ar ge Se ri es modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_JohnDeere6RExtraLargeSeries.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2016,
        "name":  "J oh nD ee re 5090 5125 M",
        "description":  "J oh nD ee re 5090 5125 M modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_JohnDeere_5090_5125M.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2017,
        "name":  "k ok sa l 4 t on",
        "description":  "k ok sa l 4 t on modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_koksal_4ton.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2018,
        "name":  "L iz ar dT ur ki sh Se ed er",
        "description":  "L iz ar dT ur ki sh Se ed er modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_LizardTurkishSeeder.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "equipment"
    },
    {
        "id":  2019,
        "name":  "L iz ar d S co rp io n",
        "description":  "L iz ar d S co rp io n modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Lizard_Scorpion.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2020,
        "name":  "L iz ar d T ur Pl ow",
        "description":  "L iz ar d T ur Pl ow modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Lizard_TurPlow.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "equipment"
    },
    {
        "id":  2021,
        "name":  "M ap Ob je ct sH id er",
        "description":  "M ap Ob je ct sH id er modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_MapObjectsHider.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "maps"
    },
    {
        "id":  2022,
        "name":  "M as se yF er gu so n 240",
        "description":  "M as se yF er gu so n 240 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_MasseyFerguson240.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2023,
        "name":  "M as se yF er gu so n 240 s",
        "description":  "M as se yF er gu so n 240 s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_MasseyFerguson240s.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2024,
        "name":  "m as se yF er gu so n 5 S 2024",
        "description":  "m as se yF er gu so n 5 S 2024 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_masseyFerguson5S_2024.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2025,
        "name":  "M as se yF er gu so n 8700 S Ed it",
        "description":  "M as se yF er gu so n 8700 S Ed it modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_MasseyFerguson8700SEdit.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2026,
        "name":  "M as se yF er gu so n 5400 S er ie s",
        "description":  "M as se yF er gu so n 5400 S er ie s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_MasseyFerguson_5400_Series.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2027,
        "name":  "M as se y F er gu so n 398",
        "description":  "M as se y F er gu so n 398 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Massey_Ferguson_398.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2028,
        "name":  "N ew Ho ll an d 5556 s",
        "description":  "N ew Ho ll an d 5556 s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/Fs22_NewHolland5556s.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2029,
        "name":  "N ew Ho ll an dT 5 A C D C",
        "description":  "N ew Ho ll an dT 5 A C D C modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_NewHollandT5AC_DC.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2030,
        "name":  "N ew Ho ll an dT 5 A C D C A ta",
        "description":  "N ew Ho ll an dT 5 A C D C A ta modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_NewHollandT5AC_DC_Ata.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2031,
        "name":  "n ew Ho ll an dT C 5 S er ie s",
        "description":  "n ew Ho ll an dT C 5 S er ie s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_newHollandTC5Series.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2032,
        "name":  "N ew Ho ll an d T 7 H D 21 M od di ng V 2",
        "description":  "N ew Ho ll an d T 7 H D 21 M od di ng V 2 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_NewHolland_T7HD_21Modding_V2.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2033,
        "name":  "N ew Ho ll an d T R 6 S S er ie s",
        "description":  "N ew Ho ll an d T R 6 S S er ie s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_NewHolland_TR6S_Series.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2034,
        "name":  "N ew H ol la nd T DD B lu em as te r",
        "description":  "N ew H ol la nd T DD B lu em as te r modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_New_Holland_TDD_Bluemaster.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2035,
        "name":  "N H T DD",
        "description":  "N H T DD modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_NH_TDD.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2036,
        "name":  "O NA L T RM 5 T ON",
        "description":  "O NA L T RM 5 T ON modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_ONAL_TRM_5TON.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2037,
        "name":  "O zd um an",
        "description":  "O zd um an modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Ozduman.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "trucks"
    },
    {
        "id":  2038,
        "name":  "O zk an R om or k",
        "description":  "O zk an R om or k modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Ozkan_Romork.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2039,
        "name":  "P la ye rC am",
        "description":  "P la ye rC am modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_PlayerCam.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2040,
        "name":  "P la ye rS pe ed",
        "description":  "P la ye rS pe ed modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_PlayerSpeed.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2041,
        "name":  "R AN ew H ol la nd T DS er ie s",
        "description":  "R AN ew H ol la nd T DS er ie s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_RANew_Holland_TDSeries.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "tractors"
    },
    {
        "id":  2042,
        "name":  "R EA wh ee ls",
        "description":  "R EA wh ee ls modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_REAwheels.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "equipment"
    },
    {
        "id":  2043,
        "name":  "S ak al ak",
        "description":  "S ak al ak modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Sakalak.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2044,
        "name":  "S at ex",
        "description":  "S at ex modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Satex.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2045,
        "name":  "S ay gi nl ar",
        "description":  "S ay gi nl ar modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Sayginlar.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2046,
        "name":  "s im pl eIC",
        "description":  "s im pl eIC modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_simpleIC.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2047,
        "name":  "S li pD es tr oy sF ie ld s",
        "description":  "S li pD es tr oy sF ie ld s modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_SlipDestroysFields.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2048,
        "name":  "S pr ea de rs",
        "description":  "S pr ea de rs modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Spreaders.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "equipment"
    },
    {
        "id":  2049,
        "name":  "s to re De li ve ri es",
        "description":  "s to re De li ve ri es modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_storeDeliveries.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2050,
        "name":  "S un T ra il er",
        "description":  "S un T ra il er modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Sun_Trailer.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "equipment"
    },
    {
        "id":  2051,
        "name":  "T AT U G AIC R 300 24 x 28",
        "description":  "T AT U G AIC R 300 24 x 28 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_TATU_GAICR_300_24x28.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "harvesters"
    },
    {
        "id":  2052,
        "name":  "T em iz el T ra il er",
        "description":  "T em iz el T ra il er modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Temizel_Trailer.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "equipment"
    },
    {
        "id":  2053,
        "name":  "T er ra Fa rm M CE",
        "description":  "T er ra Fa rm M CE modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_TerraFarm_MCE.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "maps"
    },
    {
        "id":  2054,
        "name":  "T in az T an de m",
        "description":  "T in az T an de m modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Tinaz_Tandem.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2055,
        "name":  "T ow in gC ha in",
        "description":  "T ow in gC ha in modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_TowingChain.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "harvesters"
    },
    {
        "id":  2056,
        "name":  "T um os an 8075",
        "description":  "T um os an 8075 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Tumosan_8075.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2057,
        "name":  "T um os an 8095 c ng",
        "description":  "T um os an 8095 c ng modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Tumosan_8095_cng.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2058,
        "name":  "T um os an 8110",
        "description":  "T um os an 8110 modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Tumosan_8110.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2059,
        "name":  "T um os an 9115 v 4 c ng",
        "description":  "T um os an 9115 v 4 c ng modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Tumosan_9115v4_cng.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2060,
        "name":  "U cy ol",
        "description":  "U cy ol modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_Ucyol.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2061,
        "name":  "W ar dr ob eP lu s R ag na r",
        "description":  "W ar dr ob eP lu s R ag na r modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/FS22_WardrobePlus_Ragnar.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2062,
        "name":  "L ub el sk a D ol in a",
        "description":  "L ub el sk a D ol in a modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/Lubelska_Dolina.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    },
    {
        "id":  2063,
        "name":  "N H N os ta lg ia",
        "description":  "N H N os ta lg ia modu - FS22 için. İndirin ve oyununuza ekleyin.",
        "downloadUrl":  "downloads2/NH_Nostalgia.zip",
        "images":  [

                   ],
        "author":  "FS22 Modder",
        "category":  "gameplay"
    }
]
, "fs25": [
        {
            "id": 1001,
            "name": "Farm Türk Haritası",
            "category": "maps",
            "description": "Türkiye temalı çiftlik haritası. Anadolu manzarası, Türk köy atmosferi.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FarmTurkMap.zip"
        },
        {
            "id": 1002,
            "name": "5S v3 Pembe",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran 5S v3 Pembe. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_5s_v3_pempe.zip"
        },
        {
            "id": 1003,
            "name": "Deutz Fahr 6C RV Shift",
            "category": "tractors",
            "description": "Deutz Fahr 6C serisi traktör. RV Shift vites sistemi ile sorunsuz güç aktarımı ve 120 HP motor gücü.",
            "author": "Kerem",
            "images": ["images/deutz_fahr_6c.png"],
            "downloadUrl": "downloads/FS25_6C_RVshift.zip"
        },
        {
            "id": 1004,
            "name": "Eklenebilir Tetikleyiciler",
            "category": "gameplay",
            "description": "Eklenebilir Tetikleyiciler ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_AddableTriggers.zip"
        },
        {
            "id": 1005,
            "name": "Ek Para Birimleri",
            "category": "gameplay",
            "description": "Ek Para Birimleri modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_additionalCurrencies.zip"
        },
        {
            "id": 1006,
            "name": "Ek Tarla Bilgisi",
            "category": "gameplay",
            "description": "Ek Tarla Bilgisi - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_additionalFieldInfo.zip"
        },
        {
            "id": 1007,
            "name": "Ek Oyun Ayarları",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Ek Oyun Ayarları. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_additionalGameSettings.zip"
        },
        {
            "id": 1008,
            "name": "Ek Oyun Ayarları",
            "category": "gameplay",
            "description": "Ek Oyun Ayarları modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_AditionalGameSettings.zip"
        },
        {
            "id": 1009,
            "name": "Çalışma Hızı Ayarlama",
            "category": "gameplay",
            "description": "Çalışma Hızı Ayarlama ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_adjustWorkingSpeed.zip"
        },
        {
            "id": 1010,
            "name": "Tüm Zemin Dokuları",
            "category": "gameplay",
            "description": "Tüm Zemin Dokuları modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_allTheGroundTextures.zip"
        },
        {
            "id": 1011,
            "name": "Alpego Cayman CF Series",
            "category": "equipment",
            "description": "Alpego Cayman CF disk tırmık serisi. İtalyan kalitesi, derin toprak işleme.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_AlpegoCaymanCF_Series.zip"
        },
        {
            "id": 1012,
            "name": "Alternatif Barınak",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Alternatif Barınak. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_alterUnterstand.zip"
        },
        {
            "id": 1013,
            "name": "Hayvan Limiti Artırıcı 64x",
            "category": "gameplay",
            "description": "Hayvan Limiti Artırıcı 64x modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_animalLimitIncreaser64.zip"
        },
        {
            "id": 1014,
            "name": "Orta Boy Ahşap Barınak",
            "category": "objects",
            "description": "Average Wooden Shelter ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Average_Wooden_Shelter.zip"
        },
        {
            "id": 1015,
            "name": "Balya Deposu",
            "category": "objects",
            "description": "Kapalı balya deposu. Balya saklama, yağmurdan koruma.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_BaleShed.zip"
        },
        {
            "id": 1016,
            "name": "Dikenli Tel Çit ve Ahşap Kapı",
            "category": "objects",
            "description": "Barbed Wire Fence And Wooden Gate ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Barbed_Wire_Fence_And_Wooden_Gate.zip"
        },
        {
            "id": 1017,
            "name": "Ahırlar Paketi",
            "category": "objects",
            "description": "Çeşitli ahır modelleri paketi. Farklı hayvan türleri için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Barns.zip"
        },
        {
            "id": 1018,
            "name": "İnekli Ahır",
            "category": "objects",
            "description": "Barnwithcows ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_BarnWithCows.zip"
        },
        {
            "id": 1019,
            "name": "Arı Kovanları Paketi",
            "category": "objects",
            "description": "Beehives Pack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Beehives_Pack.zip"
        },
        {
            "id": 1020,
            "name": "Bank Paketi",
            "category": "objects",
            "description": "Benchespack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_benchesPack.zip"
        },
        {
            "id": 1021,
            "name": "Daha İyi Yerleşim Satış Fiyatları",
            "category": "gameplay",
            "description": "Daha İyi Yerleşim Satış Fiyatları - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_BetterPlacableSellPrices.zip"
        },
        {
            "id": 1022,
            "name": "Büyük İnek Ahırı",
            "category": "objects",
            "description": "Geniş kapasiteli inek ahırı. 200+ hayvan kapasiteli modern tesis.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_BigCowBarn.zip"
        },
        {
            "id": 1023,
            "name": "Büyük Çiftlik Evi Paketi",
            "category": "objects",
            "description": "Bigfarmhousepack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_BigFarmHousePack.zip"
        },
        {
            "id": 1024,
            "name": "Büyük Beyaz İnek Ahırı",
            "category": "objects",
            "description": "Bigwhitecowbarn ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_BigWhiteCowBarn.zip"
        },
        {
            "id": 1025,
            "name": "BMW M4 GTS 2016",
            "category": "trucks",
            "description": "BMW M4 GTS spor otomobil. Çiftlik arabası olarak kullanım, hızlı ulaşım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_BMW_M4_GTS_2016.zip"
        },
        {
            "id": 1026,
            "name": "Tuğla Çit",
            "category": "objects",
            "description": "Brick Fence ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Brick_fence.zip"
        },
        {
            "id": 1027,
            "name": "Kepçe",
            "category": "equipment",
            "description": "Çok amaçlı ön kepçe. Yükleme ve taşıma işleri için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_bucket.zip"
        },
        {
            "id": 1028,
            "name": "70ler Tarzı Bina",
            "category": "objects",
            "description": "Building70s ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Building70s.zip"
        },
        {
            "id": 1029,
            "name": "Satın Alınabilir Gübre",
            "category": "gameplay",
            "description": "Satın Alınabilir Gübre ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_BuyableManureAndOther.zip"
        },
        {
            "id": 1030,
            "name": "Kabin Görünümü",
            "category": "gameplay",
            "description": "Kabin Görünümü modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_CabView.zip"
        },
        {
            "id": 1031,
            "name": "Buzağı Barınağı",
            "category": "objects",
            "description": "Calfshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_CalfShed.zip"
        },
        {
            "id": 1032,
            "name": "Kamera Zoom",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Kamera Zoom. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_CameraZoom.zip"
        },
        {
            "id": 1033,
            "name": "Tavuk Kümesi 31x12",
            "category": "objects",
            "description": "Chickencoop31x12 ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ChickenCoop31x12.zip"
        },
        {
            "id": 1034,
            "name": "Briket Çiftlik",
            "category": "gameplay",
            "description": "Briket Çiftlik ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_CinderblockFarm.zip"
        },
        {
            "id": 1035,
            "name": "Beton Blok Silo Paketi",
            "category": "objects",
            "description": "ConcreteblockSilopack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ConcreteBlockSiloPack.zip"
        },
        {
            "id": 1036,
            "name": "Trafik Konisi",
            "category": "objects",
            "description": "Cone ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_cone.zip"
        },
        {
            "id": 1037,
            "name": "İnşaat İşaretleri",
            "category": "objects",
            "description": "Construction Signs ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Construction_Signs.zip"
        },
        {
            "id": 1038,
            "name": "İnek Ahırı 85",
            "category": "objects",
            "description": "Cowbarn85 ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Cowbarn85.zip"
        },
        {
            "id": 1039,
            "name": "Tarla Oluşturucu Kültivatör",
            "category": "equipment",
            "description": "Tarla oluşturma özellikli kültivatör. Yeni tarla açma için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_cultivatorFieldCreator.zip"
        },
        {
            "id": 1040,
            "name": "Dekorasyon Paketi",
            "category": "objects",
            "description": "Decopackage ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_DecoPackage.zip"
        },
        {
            "id": 1041,
            "name": "Lizard Dekorasyon",
            "category": "objects",
            "description": "Lizard Deco Lizard ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Deco_Lizard.zip"
        },
        {
            "id": 1042,
            "name": "Deutz Fahr Series 9",
            "category": "tractors",
            "description": "Deutz Fahr Series 9 büyük güç traktörü. 340 HP motor, geniş tarlalar için ideal performans.",
            "author": "Kerem",
            "images": ["images/deutz_fahr_6c.png"],
            "downloadUrl": "downloads/FS25_Deutz_Series_9.zip"
        },
        {
            "id": 1043,
            "name": "Oyuncu Kamera DoF Kapat",
            "category": "gameplay",
            "description": "Oyuncu Kamera DoF Kapat modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_disablePlayerCameraDoF.zip"
        },
        {
            "id": 1044,
            "name": "Köpek Kulübesi",
            "category": "objects",
            "description": "Doghouse Deco ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_doghouse_deco.zip"
        },
        {
            "id": 1045,
            "name": "Çift Çubuklu Mat Çit",
            "category": "objects",
            "description": "Doublerodmatfence ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_doubleRodMatFence.zip"
        },
        {
            "id": 1046,
            "name": "Dinamik Alçaltma",
            "category": "gameplay",
            "description": "Dinamik Alçaltma - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_DynamicLowering.zip"
        },
        {
            "id": 1047,
            "name": "Kolay Geliştirici Kontrolleri",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Kolay Geliştirici Kontrolleri. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_EasyDevControls.zip"
        },
        {
            "id": 1048,
            "name": "Gelişmiş Araç",
            "category": "gameplay",
            "description": "Gelişmiş Araç modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_EnhancedVehicle.zip"
        },
        {
            "id": 1049,
            "name": "Erkunt Serisi",
            "category": "tractors",
            "description": "Türk markası Erkunt traktör serisi. Yerli üretim, güvenilir performans.",
            "author": "Kerem",
            "images": ["images/erkunt.png"],
            "downloadUrl": "downloads/FS25_ErkuntSerisi.zip"
        },
        {
            "id": 1050,
            "name": "Egzoz Uzantısı",
            "category": "gameplay",
            "description": "Egzoz Uzantısı modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_exhaustExtension.zip"
        },
        {
            "id": 1051,
            "name": "Çiftlik Bina Seti",
            "category": "objects",
            "description": "Farmbuildingset ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_FarmBuildingSet.zip"
        },
        {
            "id": 1052,
            "name": "Çiftlik Bina Paketi",
            "category": "objects",
            "description": "Farmbuilding Pack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Farmbuilding_Pack.zip"
        },
        {
            "id": 1053,
            "name": "Çiftlik Dekorasyon Paketi",
            "category": "objects",
            "description": "Farmdecorationpack Crossplay ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_farmDecorationPack_crossplay.zip"
        },
        {
            "id": 1054,
            "name": "Küçük Eski Çiftlik Ambarı",
            "category": "objects",
            "description": "Farmshedsmallold ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_FarmShedSmallOld.zip"
        },
        {
            "id": 1055,
            "name": "FDP",
            "category": "gameplay",
            "description": "FDP modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_FDP.zip"
        },
        {
            "id": 1056,
            "name": "SDF 6C",
            "category": "tractors",
            "description": "Same Deutz Fahr 6C traktör. Kompakt tasarım ve yüksek manevra kabiliyeti.",
            "author": "Kerem",
            "images": ["images/sdf.png"],
            "downloadUrl": "downloads/FS25_FD_SDF_6C.zip"
        },
        {
            "id": 1057,
            "name": "Yem Toplama Makinesi",
            "category": "equipment",
            "description": "Yem toplama ünitesi. Ot ve silaj toplama için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_foragePickup.zip"
        },
        {
            "id": 1058,
            "name": "Orman Palası",
            "category": "tools",
            "description": "Orman temizliği için pala. Çalı ve dal kesimi.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Forest_Machete.zip"
        },
        {
            "id": 1059,
            "name": "Ücretsiz Arazi Düzenleme",
            "category": "gameplay",
            "description": "Ücretsiz Arazi Düzenleme ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_FreeTerraformingAndPainting.zip"
        },
        {
            "id": 1060,
            "name": "Yakıt Seviyesi Uyarısı",
            "category": "gameplay",
            "description": "Yakıt Seviyesi Uyarısı modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_FuelLevelWarning.zip"
        },
        {
            "id": 1061,
            "name": "Garaj 18x7",
            "category": "objects",
            "description": "Garage18x7 ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Garage18x7.zip"
        },
        {
            "id": 1062,
            "name": "Garajlı İnek Barınağı",
            "category": "objects",
            "description": "Garagecowsheed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_GarageCowSheed.zip"
        },
        {
            "id": 1063,
            "name": "Bahçe Parseli",
            "category": "objects",
            "description": "Gardenplot ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_GardenPlot.zip"
        },
        {
            "id": 1064,
            "name": "Bekçi Kulübesi",
            "category": "objects",
            "description": "Gatehouse ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_GateHouse.zip"
        },
        {
            "id": 1065,
            "name": "Metal Kafes Panel Çit",
            "category": "objects",
            "description": "Gdr Metal Mesh Panel Fence ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_GDR_Metal_Mesh_Panel_Fence.zip"
        },
        {
            "id": 1066,
            "name": "Tahıl Ambarı 28x12",
            "category": "objects",
            "description": "Grainhall28x12 ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_GrainHall28x12.zip"
        },
        {
            "id": 1067,
            "name": "Hemen Büyüt",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Hemen Büyüt. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_growNow.zip"
        },
        {
            "id": 1068,
            "name": "Hagenstedt Çiftlikleri",
            "category": "objects",
            "description": "Hagenstedt temalı çiftlik binaları paketi. Ahırlar, barınaklar ve hayvancılık tesisleri.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Hagenstedt_Husbandries.zip"
        },
        {
            "id": 1069,
            "name": "Yarı Modern Ev",
            "category": "objects",
            "description": "Halfmodernhouse ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_HalfModernHouse.zip"
        },
        {
            "id": 1070,
            "name": "Tırmık Paketi",
            "category": "equipment",
            "description": "Çeşitli tırmık modelleri içeren paket. Tohum yatağı hazırlama için ideal.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_harrows_pack.zip"
        },
        {
            "id": 1071,
            "name": "Ağır Hizmet Rafı",
            "category": "objects",
            "description": "Heavydutyrack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_HeavyDutyRack.zip"
        },
        {
            "id": 1072,
            "name": "Hirschfeld Brantner Paketi",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Hirschfeld Brantner Paketi. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Hirschfeld_Brantner_Pack_by_HIP_Marco.zip"
        },
        {
            "id": 1073,
            "name": "Hobo Çiftlik Evleri",
            "category": "objects",
            "description": "Hobofarmhouses ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_hoboFarmhouses.zip"
        },
        {
            "id": 1074,
            "name": "SN Evi",
            "category": "objects",
            "description": "Housesn ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_HouseSN.zip"
        },
        {
            "id": 1075,
            "name": "Endüstriyel Kereste Fabrikası",
            "category": "gameplay",
            "description": "Endüstriyel Kereste Fabrikası modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_IndustrialSawmill.zip"
        },
        {
            "id": 1076,
            "name": "İç Kamera Zoom",
            "category": "gameplay",
            "description": "İç Kamera Zoom - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_InsideCameraZoom.zip"
        },
        {
            "id": 1077,
            "name": "Etkileşimli Kontrol",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Etkileşimli Kontrol. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_interactiveControl.zip"
        },
        {
            "id": 1078,
            "name": "Ivoy Tavuk Kümesi",
            "category": "objects",
            "description": "Ivoy Chicken Coop ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Ivoy_Chicken_Coop.zip"
        },
        {
            "id": 1079,
            "name": "Ivoy Çiftlik Garajı",
            "category": "objects",
            "description": "Ivoy Farm Garage ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Ivoy_Farm_Garage.zip"
        },
        {
            "id": 1080,
            "name": "Ivoy Saman Hangarı",
            "category": "gameplay",
            "description": "Ivoy Saman Hangarı modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Ivoy_Straw_Hangar.zip"
        },
        {
            "id": 1081,
            "name": "JCB Backhoe Loader",
            "category": "tractors",
            "description": "JCB kazıcı yükleyici. Çift taraflı çalışma, inşaat ve çiftlik işleri için ideal.",
            "author": "Kerem",
            "images": ["images/jcb.png"],
            "downloadUrl": "downloads/FS25_JCBBackhoeLoader.zip"
        },
        {
            "id": 1082,
            "name": "John Deere 5M Series",
            "category": "tractors",
            "description": "John Deere 5M serisi orta sınıf traktör. 90-140 HP, çok yönlü kullanım.",
            "author": "Kerem",
            "images": ["images/john_deere.png"],
            "downloadUrl": "downloads/FS25_johnDeereSeries5M.zip"
        },
        {
            "id": 1083,
            "name": "Kuhn Profile Paketi",
            "category": "equipment",
            "description": "Kuhn profile serisi ekipman paketi. Toprak işleme için profesyonel çözümler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_KuhnProfilePack.zip"
        },
        {
            "id": 1084,
            "name": "Landini Serie 7 Robo Six",
            "category": "tractors",
            "description": "Landini Serie 7 Robo Six traktör. İtalyan mühendisliği, rust edition görünümü.",
            "author": "Kerem",
            "images": ["images/landini.png"],
            "downloadUrl": "downloads/FS25_landiniSerie7RoboSixrustedition.zip"
        },
        {
            "id": 1085,
            "name": "Büyük Balya Yığını",
            "category": "gameplay",
            "description": "Büyük Balya Yığını modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_LargeStackBales.zip"
        },
        {
            "id": 1086,
            "name": "Lemken Juwel 8 Paketi",
            "category": "equipment",
            "description": "Lemken Juwel 8 pulluk paketi. Yüksek kaliteli toprak işleme.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Lemken_Juwel8_Pack.zip"
        },
        {
            "id": 1087,
            "name": "Plaka Yöneticisi",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Plaka Yöneticisi. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_LicensePlateManager.zip"
        },
        {
            "id": 1088,
            "name": "Sıvı Kireç",
            "category": "gameplay",
            "description": "Sıvı Kireç modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Liquid_Lime.zip"
        },
        {
            "id": 1089,
            "name": "Lizard 12",
            "category": "gameplay",
            "description": "Lizard 12 ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_LIZARD_12.zip"
        },
        {
            "id": 1090,
            "name": "Lizard Big Bag Lift",
            "category": "gameplay",
            "description": "Lizard Big Bag Lift modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Lizard_bigbaglift.zip"
        },
        {
            "id": 1091,
            "name": "Uzun Süren Çamur",
            "category": "gameplay",
            "description": "Uzun Süren Çamur - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_LongerLastingMud.zip"
        },
        {
            "id": 1092,
            "name": "Düşük Titreşim",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Düşük Titreşim. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_lowRumbler.zip"
        },
        {
            "id": 1093,
            "name": "Oduncu Seti",
            "category": "tools",
            "description": "Odunculuk ekipman seti. Ağaç kesimi ve odun işleme araçları.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_LumberJack.zip"
        },
        {
            "id": 1094,
            "name": "Makine Deposu",
            "category": "objects",
            "description": "Machinestorage ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_MachineStorage.zip"
        },
        {
            "id": 1095,
            "name": "Mala Wieś Haritası",
            "category": "maps",
            "description": "Polonya köy haritası. Küçük tarlalar, otantik Avrupa atmosferi.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Mala_wies.zip"
        },
        {
            "id": 1096,
            "name": "Harita Objeleri Gizleyici",
            "category": "gameplay",
            "description": "Haritadaki objeleri gizlemenizi sağlayan mod. Gereksiz objeleri kaldırarak performansı artırın.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_MapObjectsHider.zip"
        },
        {
            "id": 1097,
            "name": "Massey Ferguson 8700S",
            "category": "tractors",
            "description": "Massey Ferguson 8700S güçlü traktör. 270-405 HP, premium kabin konforu.",
            "author": "Kerem",
            "images": ["images/massey_ferguson_8700s.jpg"],
            "downloadUrl": "downloads/FS25_MasseyFerguson_8700S.zip"
        },
        {
            "id": 1098,
            "name": "Massey Ferguson 6700S",
            "category": "tractors",
            "description": "Massey Ferguson 6700S serisi. 120-180 HP, orta ölçekli çiftlikler için mükemmel.",
            "author": "Kerem",
            "images": ["images/massey_ferguson_6700s.jpg"],
            "downloadUrl": "downloads/FS25_Massey_Ferguson_Series_6700S.zip"
        },
        {
            "id": 1099,
            "name": "Yerleştirilebilir Çit",
            "category": "objects",
            "description": "Ma Hedgeplaceable ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_MA_hedgePlaceable.zip"
        },
        {
            "id": 1100,
            "name": "Massey Ferguson 6S Rust Edition",
            "category": "tractors",
            "description": "Massey Ferguson 6S traktör, yaşlandırılmış rust görünümü ile karakteristik tasarım.",
            "author": "Kerem",
            "images": ["images/massey_ferguson_6s_rust.jpg"],
            "downloadUrl": "downloads/FS25_MF_6S_RUST_ED__T_.zip"
        },
        {
            "id": 1101,
            "name": "Massey Ferguson 9S",
            "category": "tractors",
            "description": "Massey Ferguson 9S büyük traktör. 350+ HP, büyük tarlalar için tasarlandı.",
            "author": "Kerem",
            "images": ["images/massey_ferguson_9s.jpg"],
            "downloadUrl": "downloads/FS25_MF_9S_Editado.zip"
        },
        {
            "id": 1102,
            "name": "Mobil Atölye",
            "category": "objects",
            "description": "Mobileworkshop ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_mobileWorkshop.zip"
        },
        {
            "id": 1103,
            "name": "Modern Ev Seti",
            "category": "objects",
            "description": "Modernhouseset ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_modernHouseSet.zip"
        },
        {
            "id": 1104,
            "name": "Modüler Ambar",
            "category": "objects",
            "description": "Modularshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ModularShed.zip"
        },
        {
            "id": 1105,
            "name": "Daha Fazla Bal Paleti Seçeneği",
            "category": "gameplay",
            "description": "Daha Fazla Bal Paleti Seçeneği modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_moreHoneyPalletSpawnerOptions.zip"
        },
        {
            "id": 1106,
            "name": "Doğal Su Kaynakları Paketi",
            "category": "gameplay",
            "description": "Doğal Su Kaynakları Paketi - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_naturalWaterRiversAndPondsPack.zip"
        },
        {
            "id": 1107,
            "name": "New Holland T5 AC/DC",
            "category": "tractors",
            "description": "New Holland T5 elektrikli hibrit traktör. Çevre dostu, verimli güç.",
            "author": "Kerem",
            "images": ["images/new_holland_t5.png"],
            "downloadUrl": "downloads/FS25_NewHollandT5AC_DC.zip"
        },
        {
            "id": 1108,
            "name": "New Holland T5 Utility",
            "category": "tractors",
            "description": "New Holland T5 Utility traktör. 80-120 HP, çok amaçlı kullanım için ideal.",
            "author": "Kerem",
            "images": ["images/new_holland_t5.png"],
            "downloadUrl": "downloads/FS25_NewHollandT5_Utility.zip"
        },
        {
            "id": 1109,
            "name": "New Holland T7",
            "category": "tractors",
            "description": "New Holland T7 serisi traktör. 180-270 HP, Auto Command CVT şanzıman.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/FS25_NewhollandT7.zip"
        },
        {
            "id": 1110,
            "name": "New Holland T7 2011",
            "category": "tractors",
            "description": "New Holland T7 2011 model traktör. Klasik tasarım, güvenilir performans.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/FS25_newHollandT72011.zip"
        },
        {
            "id": 1111,
            "name": "New Holland T5 BLM Series",
            "category": "tractors",
            "description": "New Holland T5 BLM serisi. Kompakt güç, dar alanlar için mükemmel.",
            "author": "Kerem",
            "images": ["images/new_holland_t5.png"],
            "downloadUrl": "downloads/FS25_NewHolland_T5_Blm_Series.zip"
        },
        {
            "id": 1112,
            "name": "New Holland T6 MX GS",
            "category": "tractors",
            "description": "New Holland T6 traktör. 120-175 HP, modern teknoloji ve konfor.",
            "author": "Kerem",
            "images": ["images/new_holland_t6.png"],
            "downloadUrl": "downloads/FS25_NewHolland_T6_T4B_MxGs.zip"
        },
        {
            "id": 1113,
            "name": "New Holland T7070",
            "category": "tractors",
            "description": "New Holland T7070 premium traktör. 250 HP, lüks kabin donanımı.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/FS25_NewHolland_T7070.zip"
        },
        {
            "id": 1114,
            "name": "New Holland T7 Edit",
            "category": "tractors",
            "description": "Düzenlenmiş New Holland T7 traktör. Özel renk ve aksesuar seçenekleri.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/FS25_NewHolland_T7Edit.zip"
        },
        {
            "id": 1115,
            "name": "New Holland T7 HD Edition",
            "category": "tractors",
            "description": "New Holland T7 Heavy Duty versiyon. Güçlendirilmiş şasi ve aks sistemi.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/FS25_NewHolland_t7HD_edition.zip"
        },
        {
            "id": 1116,
            "name": "New Holland TR6S Series",
            "category": "tractors",
            "description": "New Holland TR6S serisi. 130-160 HP, meyve bahçeleri için uygun.",
            "author": "Kerem",
            "images": ["images/new_holland_t6.png"],
            "downloadUrl": "downloads/FS25_NewHolland_TR6S_Series.zip"
        },
        {
            "id": 1117,
            "name": "New Holland T7 Standard",
            "category": "tractors",
            "description": "New Holland T7 standart versiyon. Güvenilir güç, kolay kullanım.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/FS25_New_Holland_T7.zip"
        },
        {
            "id": 1118,
            "name": "New Holland T7 Agribumper",
            "category": "tractors",
            "description": "New Holland T7 Agribumper ön koruma sistemi ile. Ekstra güvenlik.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/FS25_New_Holland_T7_Agribumper.zip"
        },
        {
            "id": 1119,
            "name": "New Holland T8",
            "category": "tractors",
            "description": "New Holland T8 büyük traktör. 270-435 HP, büyük çiftlikler için.",
            "author": "Kerem",
            "images": ["images/new_holland_t8.png"],
            "downloadUrl": "downloads/FS25_New_Holland_T8_ByZladdi76.zip"
        },
        {
            "id": 1120,
            "name": "New Holland TDD Bluemaster",
            "category": "tractors",
            "description": "New Holland TDD Bluemaster özel seri. Mavi renk, premium donanım.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/FS25_New_Holland_TDD_Bluemaster.zip"
        },
        {
            "id": 1121,
            "name": "New Holland TT Series",
            "category": "tractors",
            "description": "New Holland TT ekonomik seri. Giriş seviyesi, uygun fiyat.",
            "author": "Kerem",
            "images": ["images/new_holland_t5.png"],
            "downloadUrl": "downloads/FS25_New_Holland_TT_Series.zip"
        },
        {
            "id": 1122,
            "name": "New Holland T8 Pro",
            "category": "tractors",
            "description": "New Holland T8 profesyonel seri. IntelliView ekran, GPS hazır.",
            "author": "Kerem",
            "images": ["images/new_holland_t8.png"],
            "downloadUrl": "downloads/FS25_NH_T8.zip"
        },
        {
            "id": 1123,
            "name": "Eski Tuğla Çiftlik Evi",
            "category": "objects",
            "description": "Oldbrickfarmhouse ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OldBrickFarmHouse.zip"
        },
        {
            "id": 1124,
            "name": "Eski Beton Çit",
            "category": "objects",
            "description": "Oldconcretefence ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OldConcreteFence.zip"
        },
        {
            "id": 1125,
            "name": "Eski Çiftlik Bina Seti",
            "category": "objects",
            "description": "Oldfarmbuildingset ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OldFarmBuildingSet.zip"
        },
        {
            "id": 1126,
            "name": "Eski Garaj",
            "category": "objects",
            "description": "Oldgarage ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OldGarage.zip"
        },
        {
            "id": 1127,
            "name": "Eski Polonya Çitleri Paketi",
            "category": "objects",
            "description": "Oldpolishfencespack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_oldPolishFencesPack.zip"
        },
        {
            "id": 1128,
            "name": "Eski Polonya Garajı",
            "category": "objects",
            "description": "Oldpolishgarage ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OldPolishGarage.zip"
        },
        {
            "id": 1129,
            "name": "Eski Paslı Ambar",
            "category": "objects",
            "description": "Oldrustyshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OldRustyShed.zip"
        },
        {
            "id": 1130,
            "name": "Eski Ambar Paketi",
            "category": "objects",
            "description": "Oldshedpack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OldShedPack.zip"
        },
        {
            "id": 1131,
            "name": "Eski Gübre Yığını",
            "category": "gameplay",
            "description": "Eski Gübre Yığını - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Old_Manure_Heap.zip"
        },
        {
            "id": 1132,
            "name": "Eski Ahşap Ambar",
            "category": "objects",
            "description": "Old Woodenshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Old_WoodenShed.zip"
        },
        {
            "id": 1133,
            "name": "Açık Tavuk Kümesi",
            "category": "objects",
            "description": "Open Chicken Coop ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Open_Chicken_Coop.zip"
        },
        {
            "id": 1134,
            "name": "Özdöken Evodisc K Paketi",
            "category": "equipment",
            "description": "Türk markası Özdöken Evodisc K disk tırmık. Yerli üretim kalitesi.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OzdokenEvodiscKPack.zip"
        },
        {
            "id": 1135,
            "name": "Özdöken RC Paketi",
            "category": "equipment",
            "description": "Özdöken RC serisi tarım aletleri paketi. Çok yönlü kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OzdokenRCPack.zip"
        },
        {
            "id": 1136,
            "name": "Özdöken Rotokul Paketi",
            "category": "equipment",
            "description": "Özdöken Rotokul rotary tiller paketi. Toprak hazırlama için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OzdokenRotokulPack.zip"
        },
        {
            "id": 1137,
            "name": "Özduman 18 Tonluk",
            "category": "equipment",
            "description": "Özduman 18 tonluk damperli römork. Büyük kapasite taşıma.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Ozduman18.zip"
        },
        {
            "id": 1138,
            "name": "Özeniş Taş Toplama Makinesi",
            "category": "equipment",
            "description": "Özeniş taş toplama makinesi. Tarlalarınızı taşlardan temizleyin.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_OzenisStonePicker.zip"
        },
        {
            "id": 1139,
            "name": "Büyük İnek Barınakları Paketi",
            "category": "objects",
            "description": "Packlargecowsheds ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PackLargeCowsheds.zip"
        },
        {
            "id": 1140,
            "name": "Gri Binalar Paketi",
            "category": "objects",
            "description": "Packofgraybuildings ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PackOfGrayBuildings.zip"
        },
        {
            "id": 1141,
            "name": "Seralar Paketi",
            "category": "objects",
            "description": "Packofgreenhouses ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PackOfGreenhouses.zip"
        },
        {
            "id": 1142,
            "name": "Dekoratif Karo Paketi",
            "category": "objects",
            "description": "Pack Of Decorative Tiles ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Pack_Of_Decorative_Tiles.zip"
        },
        {
            "id": 1143,
            "name": "BR Ambar Paketi",
            "category": "objects",
            "description": "Pack Sheds Br ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Pack_Sheds_Br.zip"
        },
        {
            "id": 1144,
            "name": "Her Yerde Boyama ve Düzenleme",
            "category": "gameplay",
            "description": "Her Yerde Boyama ve Düzenleme ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_paintAndTerraformAnywhere.zip"
        },
        {
            "id": 1145,
            "name": "Paksan Çekiç Kırıcı",
            "category": "equipment",
            "description": "Paksan çekiç kırıcı. Taş kırma ve arazi temizleme için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Paksan_Hammer.zip"
        },
        {
            "id": 1146,
            "name": "Pallegney Binalar Paketi",
            "category": "objects",
            "description": "Pallegney Buildings Pack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Pallegney_Buildings_Pack.zip"
        },
        {
            "id": 1147,
            "name": "Mükemmel Kenar",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Mükemmel Kenar. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PerfectEdge.zip"
        },
        {
            "id": 1148,
            "name": "PGR M Paketi",
            "category": "gameplay",
            "description": "PGR M Paketi modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PGR_MPack.zip"
        },
        {
            "id": 1149,
            "name": "PGR Ofis",
            "category": "objects",
            "description": "PGR Office ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PGR_Office.zip"
        },
        {
            "id": 1150,
            "name": "Ahırlı Domuz Ağılı",
            "category": "objects",
            "description": "Pigstywithbarn ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PigstyWithBarn.zip"
        },
        {
            "id": 1151,
            "name": "Çukur/Silaj Çukuru",
            "category": "objects",
            "description": "Pit ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Pit.zip"
        },
        {
            "id": 1152,
            "name": "Yerleştirilebilir Dolum İstasyonları",
            "category": "objects",
            "description": "Placeable Filling Stations ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Placeable_Filling_Stations.zip"
        },
        {
            "id": 1153,
            "name": "Her Yere Çit Koy",
            "category": "objects",
            "description": "Placefencesanywhere ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PlaceFencesAnywhere.zip"
        },
        {
            "id": 1154,
            "name": "Her Yerde Düzenleme",
            "category": "gameplay",
            "description": "Her Yerde Düzenleme ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PlaceTerraformPaintAnywhere_KingMods.zip"
        },
        {
            "id": 1155,
            "name": "Sınırsız Ağaç Dik",
            "category": "objects",
            "description": "Placetreesındefinitely ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PlaceTreesIndefinitely.zip"
        },
        {
            "id": 1156,
            "name": "Bitki Dekorasyon Paketi",
            "category": "objects",
            "description": "Plant Decoration Pack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Plant_Decoration_Pack.zip"
        },
        {
            "id": 1157,
            "name": "Oyuncu Hareketi",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Oyuncu Hareketi. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PlayerMovement.zip"
        },
        {
            "id": 1158,
            "name": "Pnömatik Tahıl Konveyörü",
            "category": "equipment",
            "description": "Pnömatik tahıl taşıma sistemi. Hızlı ve verimli aktarım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PneumaticConveyorForGrain.zip"
        },
        {
            "id": 1159,
            "name": "Polanki Çiftlik Binaları",
            "category": "objects",
            "description": "Polankifarmbuildings ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PolankiFarmBuildings.zip"
        },
        {
            "id": 1160,
            "name": "Polonya Çiftlik Evi",
            "category": "objects",
            "description": "Polishfarmhouse ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PolishFarmhouse.zip"
        },
        {
            "id": 1161,
            "name": "Polonya Çiti",
            "category": "objects",
            "description": "Polishfence ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_polishFence.zip"
        },
        {
            "id": 1162,
            "name": "Polonya Ahşap Ambarı",
            "category": "objects",
            "description": "Polishwoodenshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PolishWoodenShed.zip"
        },
        {
            "id": 1163,
            "name": "Ponge SPX",
            "category": "gameplay",
            "description": "Ponge SPX modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PongeSPX.zip"
        },
        {
            "id": 1164,
            "name": "Elektrikli El Aletleri",
            "category": "tools",
            "description": "Elektrikli alet seti. Tamir ve bakım işleri için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_PowerTools.zip"
        },
        {
            "id": 1165,
            "name": "Üretim Dekorasyon Paketi",
            "category": "objects",
            "description": "Productiondecorationpack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_productionDecorationPack.zip"
        },
        {
            "id": 1166,
            "name": "Hızlı Ekran Görüntüsü",
            "category": "gameplay",
            "description": "Hızlı Ekran Görüntüsü - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_QuickScreenshotMode.zip"
        },
        {
            "id": 1167,
            "name": "Rampa",
            "category": "equipment",
            "description": "Yükleme rampası. Araç ve ekipman yüklemesi için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Ramp.zip"
        },
        {
            "id": 1168,
            "name": "Gerçekçi Hava Durumu",
            "category": "gameplay",
            "description": "Gerçekçi Hava Durumu modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_RealisticWeather.zip"
        },
        {
            "id": 1169,
            "name": "Gerçek Hız Limiti",
            "category": "gameplay",
            "description": "Gerçek Hız Limiti ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_realSpeedLimit.zip"
        },
        {
            "id": 1170,
            "name": "İp ve Zincir",
            "category": "gameplay",
            "description": "İp ve Zincir modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_RopeAndChain.zip"
        },
        {
            "id": 1171,
            "name": "Rudolph DK 280RA",
            "category": "gameplay",
            "description": "Rudolph DK 280RA - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_RudolphDK_280RA.zip"
        },
        {
            "id": 1172,
            "name": "Vidalı Konveyör",
            "category": "equipment",
            "description": "Vidalı konveyör sistemi. Tahıl ve yem taşıma için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ScrewConveyor.zip"
        },
        {
            "id": 1173,
            "name": "Tırpan",
            "category": "tools",
            "description": "Geleneksel tırpan. Elle ot biçme, küçük alanlar için.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Scythe.zip"
        },
        {
            "id": 1174,
            "name": "SDF 6C Modifiyeli",
            "category": "tractors",
            "description": "Modifiye edilmiş SDF 6C traktör. Özel görünüm ve geliştirilmiş özellikler.",
            "author": "Kerem",
            "images": ["images/sdf.png"],
            "downloadUrl": "downloads/FS25_SDF_6C_Modifiyeli.zip"
        },
        {
            "id": 1175,
            "name": "Her Şeyi Sat",
            "category": "gameplay",
            "description": "Her Şeyi Sat modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_sellEverything.zip"
        },
        {
            "id": 1176,
            "name": "Ambarlı İnek Ahırı",
            "category": "objects",
            "description": "Shedcowbarn ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ShedCowBarn.zip"
        },
        {
            "id": 1177,
            "name": "Ambar Garaj",
            "category": "objects",
            "description": "Shedgarage ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ShedGarage.zip"
        },
        {
            "id": 1178,
            "name": "PGR Ambar Paketi",
            "category": "objects",
            "description": "ShedspackPGR ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ShedsPackPGR.zip"
        },
        {
            "id": 1179,
            "name": "Mağaza Arama",
            "category": "gameplay",
            "description": "Mağaza Arama ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ShopSearch.zip"
        },
        {
            "id": 1180,
            "name": "El Küreği",
            "category": "tools",
            "description": "El küreği. Manuel yükleme ve boşaltma işleri.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Shovelhand.zip"
        },
        {
            "id": 1181,
            "name": "Sigma 4 Paketi",
            "category": "equipment",
            "description": "Sigma 4 tarım ekipmanları paketi. Kaliteli Türk markası.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Sigma4_Pack.zip"
        },
        {
            "id": 1182,
            "name": "Silaj Silosu",
            "category": "objects",
            "description": "SilageSilo ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SilageSilo.zip"
        },
        {
            "id": 1183,
            "name": "Silo Paketi",
            "category": "objects",
            "description": "Silopack ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SiloPack.zip"
        },
        {
            "id": 1184,
            "name": "Küçük Arı Kovanları",
            "category": "objects",
            "description": "Smallbeehives ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SmallBeehives.zip"
        },
        {
            "id": 1185,
            "name": "Küçük Beton Bunker Silo",
            "category": "objects",
            "description": "SmallconcretebunkerSilo ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SmallConcreteBunkerSilo.zip"
        },
        {
            "id": 1186,
            "name": "Küçük İnek Barınağı",
            "category": "objects",
            "description": "Smallcowshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SmallCowShed.zip"
        },
        {
            "id": 1187,
            "name": "Küçük Ahşap Ambar",
            "category": "objects",
            "description": "Smallwoodenshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SmallWoodenShed.zip"
        },
        {
            "id": 1188,
            "name": "Küçük Atölye",
            "category": "objects",
            "description": "Smallworkshop ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SmallWorkshop.zip"
        },
        {
            "id": 1189,
            "name": "Küçük Tavuk Kümesi",
            "category": "objects",
            "description": "Small Chicken Coop ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Small_Chicken_Coop.zip"
        },
        {
            "id": 1190,
            "name": "Ayrı Frenler",
            "category": "gameplay",
            "description": "Ayrı Frenler modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SplitBrakes.zip"
        },
        {
            "id": 1191,
            "name": "Mağaza Teslimatları",
            "category": "gameplay",
            "description": "Mağaza Teslimatları - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_storeDeliveries.zip"
        },
        {
            "id": 1192,
            "name": "Eski Saman Ambarı",
            "category": "objects",
            "description": "Straw Shed Old ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Straw_Shed_Old.zip"
        },
        {
            "id": 1193,
            "name": "Saman Deposu",
            "category": "objects",
            "description": "Straw Storage ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Straw_Storage.zip"
        },
        {
            "id": 1194,
            "name": "Değiştirilebilir Balya Sarıcılar",
            "category": "gameplay",
            "description": "Değiştirilebilir Balya Sarıcılar ile oyununuzu bir üst seviyeye taşıyın. Kapsamlı değişiklikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_SwitchableBaleWrappersforBalers.zip"
        },
        {
            "id": 1195,
            "name": "New Holland T6 Edit",
            "category": "tractors",
            "description": "Özelleştirilmiş New Holland T6 traktör. Modifiye görünüm.",
            "author": "Kerem",
            "images": ["images/new_holland_t6.png"],
            "downloadUrl": "downloads/FS25_t6_edit.zip"
        },
        {
            "id": 1196,
            "name": "Branda",
            "category": "gameplay",
            "description": "Branda - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Tarpaulin.zip"
        },
        {
            "id": 1197,
            "name": "Test Sürüşü",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Test Sürüşü. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_TestDrive.zip"
        },
        {
            "id": 1198,
            "name": "Her Yere Boşalt",
            "category": "gameplay",
            "description": "Her Yere Boşalt modu, oynanışı zenginleştirir. Daha gerçekçi, daha eğlenceli.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_TipAnywhere.zip"
        },
        {
            "id": 1199,
            "name": "Alet Deposu",
            "category": "objects",
            "description": "Toolshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_toolShed.zip"
        },
        {
            "id": 1200,
            "name": "Çekme Zinciri",
            "category": "gameplay",
            "description": "Çekme Zinciri modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_TowingChain.zip"
        },
        {
            "id": 1201,
            "name": "Römork Bağlantı Bloğu",
            "category": "equipment",
            "description": "Römork bağlantı aparatı. Birden fazla römork çekme.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_TrailerJointBlock.zip"
        },
        {
            "id": 1202,
            "name": "Sahiplik Transferi",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Sahiplik Transferi. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_TransferOwnership.zip"
        },
        {
            "id": 1203,
            "name": "Tümosan 9115",
            "category": "tractors",
            "description": "Türk markası Tümosan 9115 traktör. 110 HP, yerli ve milli güç.",
            "author": "Kerem",
            "images": ["images/tumosan.png"],
            "downloadUrl": "downloads/FS25_Tumosan9115_v5_REPACK_FIXED.zip"
        },
        {
            "id": 1204,
            "name": "Tümosan 8075",
            "category": "tractors",
            "description": "Tümosan 8075 orta sınıf traktör. 75 HP, ekonomik ve dayanıklı.",
            "author": "Kerem",
            "images": ["images/tumosan.png"],
            "downloadUrl": "downloads/FS25_Tumosan_8075.zip"
        },
        {
            "id": 1205,
            "name": "Ünihid Hidrolik Ekipman",
            "category": "equipment",
            "description": "Ünihid hidrolik tarım ekipmanları. Türk kalitesi.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Unihyd.zip"
        },
        {
            "id": 1206,
            "name": "Evrensel Otomatik Yükleme",
            "category": "gameplay",
            "description": "Evrensel Otomatik Yükleme - oyununuzu özelleştirin. Gelişmiş ayarlar, kolay kullanım.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_UniversalAutoload.zip"
        },
        {
            "id": 1207,
            "name": "Sınırsız Renk Ayarları",
            "category": "gameplay",
            "description": "Oyun kalitesini artıran Sınırsız Renk Ayarları. Performans iyileştirmeleri, ekstra özellikler.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_unlimitedColorConfigurations.zip"
        },
        {
            "id": 1208,
            "name": "Ünlü 5 Saban",
            "category": "equipment",
            "description": "Türk markası Ünlü 5 diskli saban. Kaliteli toprak işleme.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Unlu5.zip"
        },
        {
            "id": 1209,
            "name": "Ünlü Otomatik Saban",
            "category": "equipment",
            "description": "Ünlü otomatik dönüşlü saban. Kolay kullanım, verimli çalışma.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Unlu_Automatic_Plow.zip"
        },
        {
            "id": 1210,
            "name": "Sınırsız Yerleştirme",
            "category": "gameplay",
            "description": "Sınırsız Yerleştirme modu ile oyun deneyiminizi geliştirin. Yeni özellikler, daha fazla kontrol.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_UnrestrictedPlacement.zip"
        },
        {
            "id": 1211,
            "name": "Valentini Mammut Series",
            "category": "equipment",
            "description": "Valentini Mammut ağır hizmet frezesi. Orman ve tarla temizliği.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_ValentiniMammut_Series.zip"
        },
        {
            "id": 1212,
            "name": "Westerrade Haritası",
            "category": "maps",
            "description": "Alman köy haritası. Detaylı köy merkezi, geleneksel çiftçilik.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Westerrade.zip"
        },
        {
            "id": 1213,
            "name": "Beyaz İnek Ahırı",
            "category": "objects",
            "description": "Whitecowbarn ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_WhiteCowBarn.zip"
        },
        {
            "id": 1214,
            "name": "Ahşap Kaplı Makine Ambarı",
            "category": "objects",
            "description": "Woodcladmachineshed ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_woodCladMachineShed.zip"
        },
        {
            "id": 1215,
            "name": "PD Ahşap Ahır",
            "category": "objects",
            "description": "Woodenbarnpd ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_woodenBarnPD.zip"
        },
        {
            "id": 1216,
            "name": "Atölye Masası",
            "category": "objects",
            "description": "Workshoptable ile çiftliğinizi güzelleştirin ve genişletin. Gerçekçi detaylar.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_WorkshopTable.zip"
        },
        {
            "id": 1217,
            "name": "Yiğitpınarı Köyü",
            "category": "maps",
            "description": "Türk köyü haritası. Anadolu köy yaşamı, özgün Türk çiftliği.",
            "author": "Kerem",
            "images": [

            ],
            "downloadUrl": "downloads/FS25_Yigitpinari_Village.zip"
        },
        {
            "id": 1218,
            "name": "Massey Ferguson 7S",
            "category": "tractors",
            "description": "Massey Ferguson 7S serisi. Modern tasarım, 150-230 HP güç aralığı.",
            "author": "Kerem",
            "images": ["images/massey_ferguson_7s.jpg"],
            "downloadUrl": "downloads/MF_7S.zip"
        },
        {
            "id": 1219,
            "name": "New Holland T7 Modifiye",
            "category": "tractors",
            "description": "Modifiye edilmiş New Holland T7. Türk modifiye stili, özel dokunuşlar.",
            "author": "Kerem",
            "images": ["images/new_holland_t7.png"],
            "downloadUrl": "downloads/New_Holland_T7_Modifie.zip"
        }
    ]
};

function renderMods(nameQuery = '', idQuery = '') {
    const modsGrid = document.getElementById('mods-grid');
    if (!modsGrid) return;

    const mods = allMods[currentGame] || [];

    let filteredMods = mods.filter(mod => {
        const matchesCategory = currentCategory === 'all' || mod.category === currentCategory;
        const matchesNameSearch = !nameQuery ||
            mod.name.toLowerCase().includes(nameQuery.toLowerCase()) ||
            mod.description.toLowerCase().includes(nameQuery.toLowerCase());
        const matchesIdSearch = !idQuery || mod.id.toString().includes(idQuery);
        return matchesCategory && matchesNameSearch && matchesIdSearch;
    });

    modsGrid.innerHTML = '';

    if (filteredMods.length === 0) {
        modsGrid.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1;">
        <div class="no-results-icon">🔍</div>
        <h3>Mod bulunamadı</h3>
        <p>Farklı bir arama terimi veya kategori deneyin.</p>
      </div>
    `;
        // Clear pagination if no results
        const paginationContainer = document.getElementById('pagination-container');
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    // Calculate Pagination
    const totalPages = Math.ceil(filteredMods.length / itemsPerPage);

    // Reset current page if out of bounds (e.g. after filtering)
    if (currentPage > totalPages) currentPage = 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedMods = filteredMods.slice(startIndex, endIndex);

    // Render Mods
    paginatedMods.forEach((mod, index) => {
        const card = createModCard(mod);
        card.style.animationDelay = `${index * 0.05}s`;
        modsGrid.appendChild(card);
    });

    // Render Pagination Controls
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    let paginationContainer = document.getElementById('pagination-container');

    // Create container if it doesn't exist (append after mods-grid)
    if (!paginationContainer) {
        const modsSection = document.querySelector('.mods-section .container'); // Get the container
        if (modsSection) {
            paginationContainer = document.createElement('div');
            paginationContainer.id = 'pagination-container';
            paginationContainer.className = 'pagination-container';
            modsSection.appendChild(paginationContainer);
        } else {
            return; // Safety check
        }
    }

    paginationContainer.innerHTML = '';

    if (totalPages <= 1) return; // Don't show if only 1 page

    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.innerHTML = '❮';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            const searchInput = document.getElementById('search-input');
            renderMods(searchInput ? searchInput.value : '');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    paginationContainer.appendChild(prevBtn);

    // Page Numbers
    // Simplified logic: Show all if <=7, otherwise show range
    // For simplicity in this iteration: Show all or condensed
    // Let's do simple implementation first: Show distinct pages with basic ellipsis logic if needed, 
    // but for <500 items (50 pages) scrolling might be okay or just simple range

    // Show max 5 page buttons around current
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // Adjust if near start
    if (startPage === 1) {
        endPage = Math.min(totalPages, 5);
    }
    // Adjust if near end
    if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - 4);
    }

    // First page
    if (startPage > 1) {
        const btn = createPageButton(1);
        paginationContainer.appendChild(btn);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.style.color = 'var(--text-secondary)';
            ellipsis.innerText = '...';
            paginationContainer.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = createPageButton(i);
        paginationContainer.appendChild(btn);
    }

    // Last page
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.style.color = 'var(--text-secondary)';
            ellipsis.innerText = '...';
            paginationContainer.appendChild(ellipsis);
        }
        const btn = createPageButton(totalPages);
        paginationContainer.appendChild(btn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.innerHTML = '❯';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            const searchInput = document.getElementById('search-input');
            renderMods(searchInput ? searchInput.value : '');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    paginationContainer.appendChild(nextBtn);
}

function createPageButton(pageNum) {
    const btn = document.createElement('button');
    btn.className = `pagination-btn ${pageNum === currentPage ? 'active' : ''}`;
    btn.innerText = pageNum;
    btn.onclick = () => {
        currentPage = pageNum;
        const searchInput = document.getElementById('search-input');
        renderMods(searchInput ? searchInput.value : '');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return btn;
}

function createModCard(mod) {
    const card = document.createElement('div');
    card.className = 'mod-card';
    card.dataset.category = mod.category;

    // Make card clickable (links to detail page)
    card.style.cursor = 'pointer';
    card.onclick = (e) => {
        // Don't trigger if clicked on download button
        if (!e.target.closest('.download-btn')) {
            window.location.href = `mod-detay.html?game=${currentGame}&id=${mod.id}`;
        }
    };

    // Create Gallery HTML
    let imagesHtml = '';
    if (mod.images && mod.images.length > 0) {
        imagesHtml = `<div class="mod-card-gallery">`;
        mod.images.forEach(img => {
            imagesHtml += `<img src="${img}" alt="${mod.name}" class="mod-card-image" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200/1a1a25/4ade80?text=${encodeURIComponent(mod.name)}'">`;
        });
        imagesHtml += `</div>`;
    } else {
        // Fallback single image container
        const fallbackSrc = mod.image || 'https://via.placeholder.com/400x200/1a1a25/4ade80?text=No+Image';
        imagesHtml = `<div class="mod-card-gallery">
        <img src="${fallbackSrc}" alt="${mod.name}" class="mod-card-image" onerror="this.src='https://via.placeholder.com/400x200/1a1a25/4ade80?text=${encodeURIComponent(mod.name)}'">
      </div>`;
    }

    // New List Layout Structure with Gallery
    card.innerHTML = `
    ${imagesHtml}
    <div class="mod-card-content">
      <div>
        <div class="mod-card-header">
             <span class="mod-card-category">${categoryLabels[mod.category] || mod.category}</span>
        </div>
        <h3>${mod.name}</h3>
        <p>${mod.description}</p>
      </div>
      
      <div class="mod-card-footer">
        <span class="mod-author">👤 ${mod.author}</span>
        <a href="${mod.downloadUrl}" class="download-btn" download>
          <span>⬇️</span> İndir
        </a>
      </div>
    </div>
  `;

    return card;
}

function renderModDetail() {
    const params = new URLSearchParams(window.location.search);
    const game = params.get('game');
    const id = parseInt(params.get('id'));

    const container = document.getElementById('mod-detail-container');
    if (!container) return;

    if (!game || !id || !allMods[game]) {
        container.innerHTML = '<h2>Mod bulunamadı!</h2><a href="index.html" style="color:var(--accent-green)">Anasayfaya Dön</a>';
        return;
    }

    const mod = allMods[game].find(m => m.id === id);
    if (!mod) {
        container.innerHTML = '<h2>Mod bulunamadı!</h2><a href="index.html" style="color:var(--accent-green)">Anasayfaya Dön</a>';
        return;
    }

    // Set page title
    document.title = `${mod.name} - FS Mod Hub`;

    // Handle images: Support both 'images' array (new) and 'image' string (legacy or comma-separated)
    let images = [];
    if (mod.images && Array.isArray(mod.images) && mod.images.length > 0) {
        images = mod.images;
    } else if (mod.image) {
        // If user put comma separated strings in "image" field manually
        if (mod.image.includes(',')) {
            images = mod.image.split(',').map(s => s.trim());
        } else {
            images = [mod.image];
        }
    } else {
        images = [`https://via.placeholder.com/800x450/1a1a25/4ade80?text=${encodeURIComponent(mod.name)}`];
    }

    // Generate thumbnails HTML if more than 1 image
    let thumbnailsHtml = '';
    if (images.length > 1) {
        thumbnailsHtml = `<div class="mod-thumbnails" style="display: flex; gap: 10px; margin-top: 10px; overflow-x: auto; padding-bottom: 5px;">
          ${images.map((img, idx) => `
              <img src="${img}" 
                   onclick="changeMainImage('${img}')" 
                   class="thumbnail ${idx === 0 ? 'active' : ''}"
                   style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer; border: 2px solid ${idx === 0 ? 'var(--accent-green)' : 'transparent'}; opacity: ${idx === 0 ? '1' : '0.6'}; transition: all 0.2s;"
                   onmouseover="this.style.opacity='1'"
                   onmouseout="if(!this.classList.contains('active')) this.style.opacity='0.6'"
              >
          `).join('')}
      </div>`;
    }

    window.changeMainImage = function (src) {
        document.getElementById('main-detail-image').src = src;
        // Update active state
        document.querySelectorAll('.thumbnail').forEach(t => {
            t.style.borderColor = 'transparent';
            t.classList.remove('active');
            t.style.opacity = '0.6';
            if (t.src === src) {
                t.style.borderColor = 'var(--accent-green)';
                t.classList.add('active');
                t.style.opacity = '1';
            }
        });
    };

    container.innerHTML = `
        <div class="mod-detail-wrapper" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; align-items: start;">
            <div class="mod-detail-image-container">
                <img 
                    id="main-detail-image"
                    src="${images[0]}" 
                    alt="${mod.name}" 
                    style="width: 100%; border-radius: var(--radius-lg); border: 1px solid var(--border-color); aspect-ratio: 16/9; object-fit: cover; box-shadow: 0 4px 20px rgba(0,0,0,0.3);"
                    onerror="this.src='https://via.placeholder.com/800x450/1a1a25/4ade80?text=${encodeURIComponent(mod.name)}'"
                >
                ${thumbnailsHtml}
            </div>
            <div class="mod-detail-info">
                <span class="mod-card-category" style="font-size: 1rem; padding: 8px 16px;">${categoryLabels[mod.category] || mod.category}</span>
                <h1 style="font-size: 2.5rem; margin: 16px 0;">${mod.name}</h1>
                <p style="color: var(--text-secondary); margin-bottom: 24px; font-size: 1.1rem; line-height: 1.8;">
                    ${mod.description}
                </p>
                
                <div class="mod-meta" style="background: var(--bg-card); padding: 24px; border-radius: var(--radius); border: 1px solid var(--border-color); margin-bottom: 32px;">
                    <div style="margin-bottom: 12px;"><strong>👤 Yapımcı:</strong> ${mod.author}</div>
                    <div style="margin-bottom: 12px;"><strong>🎮 Oyun:</strong> ${game.toUpperCase()}</div>
                    <div><strong>🆔 ID:</strong> ${mod.id}</div>
                </div>

                <a href="${mod.downloadUrl}" class="download-btn" download style="width: 100%; justify-content: center; padding: 20px; font-size: 1.2rem;">
                    <span>⬇️</span> Modu İndir
                </a>
            </div>
        </div>
        
        <div style="margin-top: 60px;">
           <a href="${game}.html" style="color: var(--text-secondary); display: inline-flex; align-items: center; gap: 8px; transition: color 0.2s;" onmouseover="this.style.color='var(--accent-green)'" onmouseout="this.style.color='var(--text-secondary)'">
             ⬅️ Listeye Geri Dön
           </a>
        </div>
    `;

    // Add CSS for responsive detail view
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 900px) {
            .mod-detail-wrapper {
                grid-template-columns: 1fr !important;
            }
        }
    `;
    document.head.appendChild(style);
}

function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat) {
        // Simple validation or just accept it
        currentCategory = cat;
    }
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Set initial active state based on currentCategory
    filterBtns.forEach(btn => {
        if (btn.dataset.category === currentCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            const searchInput = document.getElementById('search-input');
            renderMods(searchInput ? searchInput.value : '');
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            renderMods(e.target.value);
        }, 300);
    });
}



function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
}

function updateModCount() {
    const countElement = document.getElementById('mod-count');
    if (countElement) {
        const mods = allMods[currentGame] || [];
        countElement.textContent = `${mods.length} mod mevcut`;
    }
}

function updateHomeModCounts() {
    const fs25Count = document.getElementById('fs25-count');
    const fs22Count = document.getElementById('fs22-count');
    if (fs25Count) {
        fs25Count.textContent = `${allMods.fs25.length}`;
    }
    if (fs22Count) {
        fs22Count.textContent = `${allMods.fs22.length}`;
    }

    // Update total mod count in hero
    const totalModCount = document.getElementById('total-mod-count');
    if (totalModCount) {
        totalModCount.textContent = allMods.fs25.length + allMods.fs22.length;
    }

    // Update category counts
    const fs25Mods = allMods.fs25 || [];
    const categories = ['tractors', 'maps', 'equipment', 'harvesters', 'trucks', 'objects', 'tools', 'gameplay'];

    categories.forEach(cat => {
        const catCount = fs25Mods.filter(m => m.category === cat).length;
        const countEl = document.getElementById(`cat-${cat}-count`);
        if (countEl) {
            countEl.textContent = catCount;
        }
    });

    // Update tractor and map counts in hero stats
    const tractorCount = document.getElementById('tractor-count');
    const mapCount = document.getElementById('map-count');
    if (tractorCount) {
        tractorCount.textContent = fs25Mods.filter(m => m.category === 'tractors').length;
    }
    if (mapCount) {
        mapCount.textContent = fs25Mods.filter(m => m.category === 'maps').length;
    }

    // Render new arrivals
    renderNewArrivals();
}

function getModImage(mod) {
    // 1. Check if mod has explicitly defined images
    if (mod.images && mod.images.length > 0) return mod.images[0];
    if (mod.image) {
        if (mod.image.includes(',')) return mod.image.split(',')[0].trim();
        return mod.image;
    }

    // 2. Check mod name for known brands
    const name = mod.name.toLowerCase();

    if (name.includes('deutz') || name.includes('fahr')) return 'images/deutz_fahr_6c.png';
    if (name.includes('erkunt')) return 'images/erkunt.png';
    if (name.includes('jcb')) return 'images/jcb.png';
    if (name.includes('john') || name.includes('deere')) return 'images/john_deere.png';
    if (name.includes('landini')) return 'images/landini.png';
    // if (name.includes('massey') || name.includes('ferguson')) return 'images/massey_ferguson.png';
    if (name.includes('new') && name.includes('holland')) {
        if (name.includes('t5') || name.includes('tt')) return 'images/new_holland_t5.png';
        if (name.includes('t6')) return 'images/new_holland_t6.png';
        if (name.includes('t8')) return 'images/new_holland_t7.png'; // Fallback to T7-like or T8 if available, using T7 as generic big tractor
        return 'images/new_holland_t7.png';
    }
    if (name.includes('tümosan') || name.includes('tumosan')) return 'images/tumosan.png';
    if (name.includes('fiat')) return 'images/fiat.png'; // If exists, otherwise placeholder will catch it

    // 3. Category based fallback (optional, kept placeholder for now)
    return 'https://via.placeholder.com/280x150/1a1a25/4ade80?text=' + encodeURIComponent(mod.name);
}

function renderNewArrivals() {
    const container = document.getElementById('new-arrivals-container');
    if (!container) return;

    // Get last 10 mods (simulating newest additions)
    const newMods = allMods.fs25.slice(-10).reverse();

    container.innerHTML = '';

    newMods.forEach(mod => {
        const imageSrc = getModImage(mod);

        const card = document.createElement('a');
        card.href = `mod-detay.html?game=fs25&id=${mod.id}`;
        card.className = 'new-arrival-card';
        card.innerHTML = `
            <img src="${imageSrc}" alt="${mod.name}" class="new-arrival-img" onerror="this.src='https://via.placeholder.com/280x150/1a1a25/4ade80?text=${encodeURIComponent(mod.name)}'">
            <div class="new-arrival-content">
                <h4>${mod.name}</h4>
                <span class="new-arrival-category">${categoryLabels[mod.category] || mod.category}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderFeaturedMods() {
    const container = document.getElementById('featured-mods-grid');
    if (!container) return;

    // Combine mods from both games and shuffle/pick 4
    const combined = [...allMods.fs25.map(m => ({ ...m, game: 'fs25' })), ...allMods.fs22.map(m => ({ ...m, game: 'fs22' }))];

    // Simple shuffle
    const shuffled = combined.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    container.innerHTML = '';

    selected.forEach((mod, index) => {
        const imageSrc = getModImage(mod);

        const card = document.createElement('div');
        card.className = 'mod-card';
        card.innerHTML = `
            <img 
              src="${imageSrc}" 
              alt="${mod.name}" 
              class="mod-card-image"
              onerror="this.src='https://via.placeholder.com/400x200/1a1a25/4ade80?text=${encodeURIComponent(mod.name)}'"
            >
            <div class="mod-card-content">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span class="mod-card-category">${categoryLabels[mod.category] || mod.category}</span>
                <span style="font-size:0.75rem; color:var(--accent-orange); border:1px solid var(--accent-orange); padding:2px 6px; border-radius:4px;">${mod.game.toUpperCase()}</span>
              </div>
              <h3>${mod.name}</h3>
              <p>${mod.description}</p>
              <div class="mod-card-footer">
                <span class="mod-author">👤 ${mod.author}</span>
                <a href="mod-detay.html?game=${mod.game}&id=${mod.id}" class="download-btn" style="padding:8px 16px; font-size:0.9rem;">
                  İncele
                </a>
              </div>
            </div>
        `;
        container.appendChild(card);
    });
}




// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Shared Logic
    setupMobileMenu();

    // Page Specific Logic
    const isFS25 = window.location.pathname.includes('fs25');
    const isFS22 = window.location.pathname.includes('fs22');
    const isHome = !isFS25 && !isFS22 && !window.location.pathname.includes('mod-detay');

    // 1. Detail Page
    if (document.getElementById('mod-detail-container')) {
        renderModDetail();
        return;
    }

    // 2. Home Page
    if (isHome) {
        updateHomeModCounts();
        if (typeof renderFeaturedMods === 'function') renderFeaturedMods();
        // Check for basic search input on home
        const heroSearch = document.getElementById('hero-search-input');
        if (heroSearch) {
            heroSearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') searchFromHome();
            });
        }
        return;
    }

    // 3. Listing Pages (FS25/FS22)
    if (document.getElementById('mods-grid')) {
        setupFilters();

        // Setup Search Listeners
        const searchInputEl = document.getElementById('search-input');
        if (searchInputEl) {
            searchInputEl.addEventListener('input', (e) => {
                currentPage = 1;
                renderMods(e.target.value);
            });
        }
        const searchIdInput = document.getElementById('search-id-input');
        if (searchIdInput) {
            searchIdInput.addEventListener('input', (e) => {
                currentPage = 1;
                renderMods(document.getElementById('search-input').value, e.target.value);
            });
        }

        // Handle URL Parameters
        const urlParams = new URLSearchParams(window.location.search);
        const urlSearch = urlParams.get('search') || '';
        const urlCat = urlParams.get('cat') || '';

        if (urlSearch) {
            // mode: Search/Brand
            if (searchInputEl) searchInputEl.value = urlSearch;
            renderMods(urlSearch);

            // Dynamic Header Update for Brand Experience
            const headerTitle = document.querySelector('.page-header h1');
            const headerBadge = document.querySelector('.page-header-badge');

            if (headerTitle) {
                // Formatting: "Massey Ferguson Modları"
                headerTitle.innerHTML = `<span class="highlight">${urlSearch}</span> Modları`;
                document.title = `${urlSearch} Modları - FS Mod Hub`;
            }
            if (headerBadge) {
                headerBadge.textContent = '🔍 Sonuçlar';
            }

        } else if (urlCat) {
            // mode: Category
            currentCategory = urlCat;
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === urlCat) {
                    btn.classList.add('active');
                }
            });
            renderMods();
        } else {
            // mode: Default
            renderMods();
        }

        updateModCount();
    }
});

/* ===========================
   Bulk Download / Mod Pack Logic
   =========================== */

// Define Mod Packs (Codes and corresponding Mod IDs)
const modPacks = {
    "hileyim": [1001, 1002, 1003, 1004, 1005], // Example IDs
    "traktorler": [1003, 1042, 1049, 1056],
    "baslangic": [1001, 1014, 1027]
};

document.addEventListener('DOMContentLoaded', () => {
    const bulkBtn = document.getElementById('bulk-download-btn');
    const modal = document.getElementById('bulk-modal');
    const closeBtn = document.querySelector('.close-modal');
    const downloadBtn = document.getElementById('download-pack-btn');
    const stopBtn = document.getElementById('stop-pack-btn');
    const codeInput = document.getElementById('pack-code-input');
    const statusDiv = document.getElementById('pack-status');

    let downloadTimeouts = [];

    if (bulkBtn && modal) {
        // Open Modal
        bulkBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            codeInput.value = '';
            statusDiv.innerHTML = '';
            codeInput.focus();
            resetButtons();
        });

        // Close Modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            stopDownloads();
        });

        // Close on outside click
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
                stopDownloads();
            }
        });

        // Download Action
        downloadBtn.addEventListener('click', handleDownload);

        // Stop Action
        if (stopBtn) {
            stopBtn.addEventListener('click', stopDownloads);
        }

        // Enter key in input
        codeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleDownload();
        });
    }

    function resetButtons() {
        if (downloadBtn) downloadBtn.style.display = 'inline-block';
        if (stopBtn) stopBtn.style.display = 'none';
        if (codeInput) codeInput.disabled = false;
    }

    function stopDownloads() {
        downloadTimeouts.forEach(id => clearTimeout(id));
        downloadTimeouts = [];

        if (statusDiv && statusDiv.textContent.includes('İndirme başlıyor')) {
            showStatus('İndirme işlemi durduruldu 🛑', 'error');
        }

        resetButtons();
    }

    function handleDownload() {
        // Clear previous runs
        stopDownloads();

        const code = codeInput.value.trim().toLowerCase();

        if (!code) {
            showStatus('Lütfen bir kod girin.', 'error');
            return;
        }

        if (modPacks.hasOwnProperty(code)) {
            const modIds = modPacks[code];
            const modsToDownload = [];

            const fs25Mods = allMods.fs25 || [];
            const fs22Mods = allMods.fs22 || [];
            const allAvailableMods = [...fs25Mods, ...fs22Mods];

            modIds.forEach(id => {
                const mod = allAvailableMods.find(m => m.id === id);
                if (mod) {
                    modsToDownload.push(mod);
                }
            });

            if (modsToDownload.length > 0) {
                showStatus(`${modsToDownload.length} mod bulundu. İndirme başlıyor...`, 'success');

                // UI updates
                downloadBtn.style.display = 'none';
                if (stopBtn) stopBtn.style.display = 'inline-block';
                codeInput.disabled = true;

                // Start downloads
                modsToDownload.forEach((mod, index) => {
                    const timeoutId = setTimeout(() => {
                        triggerDownload(mod.downloadUrl);
                        // Update status
                        if (index === modsToDownload.length - 1) {
                            showStatus('Tüm indirmeler tamamlandı! 🎉', 'success');
                            resetButtons();
                        }
                    }, index * 1000); // 1 second delay
                    downloadTimeouts.push(timeoutId);
                });

            } else {
                showStatus('Paket içeriği bulunamadı veya modlar eksik.', 'error');
            }
        } else {
            showStatus('Geçersiz kod!', 'error');
        }
    }

    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = 'pack-status ' + (type === 'success' ? 'status-success' : 'status-error');
    }

    function triggerDownload(url) {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});

















