$(document).ready(function() {

	var AbraMun = ["Bangued", "Boliney", "Bucay", "Bucloc", "Daguioman", "Danglas",
               "Dolores", "La Paz", "Lacub", "Lagangilang", "Lagayan", "Langiden",
               "Licuan-Baay", "Luba", "Malibcong", "Manabo", "Penarrubia", "Pidigan",
               "Pilar", "Sallapadan", "San Isidro", "San Juan", "San Quintin", "Tayum",
               "Tineg", "Tubo", "Villaviciosa"]; 

	var AgusanNMun = ["Buenavista", "Carmen", "Jabonga", "Kitcharao", "Las Nieves", "Magallanes",
         "Nasipit", "Remedios T. Romualdez", "Santiago", "Tubay"];
	 
	var AgusanNCity = ["Butuan City", "Cabadbaran City"];
	
	var AgusanSMun = ["Bunawan", "Esperanza", "La Paz", "Loreto", "Prosperidad", "Rosario", "San Francisco",
         "San Luis", "Santa Josefa", "Sibagat", "Talacogon", "Trento", "Veruela"];
	 
	var AgusanSCity = ["Bayugan"];
	
	var AklanMun = ["Altavas", "Balete", "Banga", "Batan", "Buruanga", "Ibajay", "Kalibo", "Lezo", "Libacao",
         "Madalag", "Makato", "Malay", "Malinao", "Nabas", "New Washington"];
		 
	var AlbayCity = ["Ligao City", "Tabaco City"];
	
	var AlbayMun = ["Bacacay", "Camalig", "Daraga", "Guinobatan", "Jovellar", "Libon", "Malilipot", "Malinao",
         "Manito", "Oas", "Pio Duran", "Polangui", "Rapu-Rapu", "Santo Domingo", "Tiwi"];
		 
	var AntiqueMun = ["Anini-y", "Barbaza", "Belison", "Bugason", "Caluya", "Culasi", "Hamtic", "Laua-an", "Libertad",
         "Pandan", "Patnongon", "San Jose", "San Remigio", "Sebaste", "Sibalom"];
	
	var ApayaoMun = ["Calanasan", "Conner", "Flora", "Kabugao", "Luna", "Pudtol", "Santa Marcela"];
	
	var AuroraMun = ["Baler", "Casiguran", "Dilasag", "Dinangulan", "Dingalan", "Dipaculao", "Maria Aurora", "San Luis"];
	
	var BasilanCity = ["Isabela City", "Lamitan City"];
	
	var BasilanMun = ["Akbar", "Al-Barka", "Hadji Mohmmad Aju", "Lantawan", "Maluso", "Sumisip", "Tipo-Tipo", "Tuburan"];
	
	var BataanCity = ["Balanga City"];
	
	var BataanMun = ["Abucay", "Bagac", "Dinalupihan", "Hermosa", "Limay", "Mariveles", "Morong", "Orani", "Orion", "Pilar", "Samal"];
	
	var BatanesMun = ["Basco", "Itbayat", "Ivana", "Mahatao", "Sabtang", "Uyugan"];
	
	var BatangasCity = ["Batangas City", "Lipa City", "Tanauan City"];
	
	var BatangasMun = ["Agoncillo", "Alitagtag", "Balayan", "Balete", "Bauan", "Calaca", "Calatagan", "Cuenca", "Ibaan", "Laurel", "Lemery",
         "Lian", "Lobo", "Mabini", "Malvar", "Mataas na Kahoy", "Nasugbu", "Padre Garcia", "Rosario", "San Jose", "San Juan",
         "San Luis", "San Nicolas", "San Pascual", "Santa Teresita", "Santo Tomas", "Taal", "Talisay", "Taysan", "Tingloy", "Tuy"];
		 
	var BenguetCity = ["Baguio City"];
	
	var BenguetMun = ["Atok", "Bakun", "Bokod", "Buguias", "Itogon", "Kabayan", "Kapanga", "Kibungan", "La Trinidad", "Mankayan", "Sablan", "Tuba", "Tublay"];
	
	var BiliranMun = ["Almeria", "Biliran", "Cabucgayan", "Culaba", "Kawayan", "Mariripi", "Naval"];
	
	var BoholCity = ["Tagbilaran City"];
	
	var BoholMun = ["Albuquerque", "Alicia", "Anda", "Antequera", "Baclayon", "Balilihan", "Batuan", "Bien Unido", "Bilar", "Buenavista", "Calape", "Candijay",
         "Carmenn", "Catigbian", "Clarin", "Corella", "Cortes", "Dagohoy", "Danao", "Dauis", "Dimiao", "Duero", "Garcia Hernandez", "Guindulman", "Inabanga",
         "Jagna", "Jetafe", "Lila", "Loay", "Loboc", "Loon", "Mabini", "Maribojoc", "Panglao", "Pilar", "Pres. Carlos P. Garcia", "Sagbayan", "San Isidro", "San Miguel", "Sevilla",
         "Sierra Bullones", "Sikatuna", "Talibo", "Trinidad", "Tubigon", "Ubay", "Valencia"];
	
	var BukidnonCity = ["Malaybalay City", "Valencia City"];
	
	var BukidnonMun = ["Baungon", "Cabanglasan", "Damulog", "Dangcagan", "Don Carlos", "Impasug-ong", "Kadingilan", "Kalilangan", "Kibawe", "Kitaotao", "Lantapan", "Libona",
         "Malitbog", "Manolo Fortich", "Maramag", "Pangantucan", "Quezon", "San Fernando", "Sumilao", "Talakag"];
		 
	var BulacanCity = ["Malolos City", "Meycauayan City", "San Jose del Monte City"];
	
	var BulacanMun = ["Angat", "Balagtas", "Baliuag", "Bocaue", "Bulacan", "Bustos", "Calumpit", "Dona Remedios Trinidad", "Guiguinto", "Hagonoy", "Marilao", "Norzagaray",
         "Obando", "Pandi", "Paombong", "Plaridel", "Pulilan", "San Ildefonso", "San Miguel", "San Rafael", "Santa Maria"];
		 
	var CagayanCity = ["Tuguegarao City"];
	
	var CagayanMun = ["Abulug", "Alacala", "Allacapan", "Amulung", "Aparri", "Baggao", "Ballesteros", "Buguey", "Calayan", "Camalaniugan", "Claveria", "Enrile", "Gattaran",
         "Gonzaga", "Iguig", "Lal-Lo", "Lasam", "Pamplona", "Penablanca", "Piat", "Sanchez-Mira", "Santa Ana", "Santa Praxedes", "Santa Teresita", "Santo Nino",
         "Solana", "Tuao"];
	
	var CamNMun = ["Basud", "Capalonga", "Daet", "Jose Panganiban", "Labo", "Mercdes", "Paracale", "San Lorenzo Ruiz", "San Vicente", "Talisay", "Vinzons"];
	
	var CamSCity = ["Iriga City", "Naga City"];
	
	var CamSMun = ["Baao", "Balatan", "Bato", "Bombon", "Buhi", "Bula", "Cabusao", "Calabanga", "Camaligan", "Caramoan",
        "Del Gallego", "Gainza", "Garchitorena", "Goa", "Lagonoy", "Libmanan", "Magarao", "Milaor", "Minalabac",
        "Nabua", "Ocampo", "Pamplona", "Pasacao", "Pili", "Presentacion", "Ragay", "Sagnay", "San Fernando",
        "San Jose", "Sipocot", "Siruma", "Tigaon", "Tinambac"];
		
	var CamiguinMun = ["Catarman", "Guinsiliban", "Mahinog", "Mambajao", "Sagay"];
	
	var CapizCity = ["Roxas City"];
	
	var CapizMun = ["Cuartero", "Dao", "Dumalag", "Dumarao", "Ivisan", "Jaminda", "Maayon", "Mambusao", "Panay", "Panitan",
        "Pilar", "Pontevedra", "President Roxas", "Sapian", "Sigma", "Tapaz"];
	
	var CatanduanesMun = ["Bagamunuc", "Baras", "Bato", "Caramoran", "Gigmoto", "Pandan", "Panganiban", "San Andres",
        "San Miguel", "Viga", "Virac"];
		
	var CaviteCity = ["Bacoor City", "Cavite City", "Dasmarinas City", "Imus City",
        "Tagaytay City", "Trece Martires City"];
		
	var CaviteMun = ["Alfonso", "Amadeo", "Carmona", "General Mariano Alvarez", "General Emilio Aguinaldo", "General Trias",
        "Indang", "Kawit", "Magallanes", "Maragondon", "Mendez", "Naic", "Noveleta", "Rosario", "Silang",
        "Tanza", "Ternate"];
		
	var CebuCity = ["Bogo City", "Cebu City", "Carcar City", "Lapu-Lapu City",
            "Mandaue City", "Naga City", "Talisay City", "Toledo City"];
	
	var CebuMun =["Alcantara", "Alcoy", "Alegria", "Aloguinsan", "Argao", "Asturias", "Badian", "Bantayan", "Barili",
            "Boljoon", "Borbon", "Carmen", "Catmon", "Compostela", "Consolacion", "Cordoba", "Daanbantayan",
            "Dalaguete", "Dumanjug", "Ginatilan", "Liloan", "Madridejos", "Malabuyoc", "Medellin", "Minglanilla",
            "Moalboal", "Oslob", "Pilar", "Pinamungajan", "Poro", "Ronda", "Samboan", "San Fernando", "San Franciso",
            "San Remigio", "Santa Fe", "Santander", "Sibonga", "Sogod", "Tabogon", "Tabuelan", "Tuburan", "Tudela"];
			
	var CompMun = ["Compostela", "Laak", "Mabini", "Maco", "Marasugan", "Mawab", "Monkayo", "Montevista",
            "Nabunturan", "New Bataan", "Pantukan"];
			
	var CotabatoCity = ["Kidapawan City"];
	
	var CotabatoMun = ["Alamada", "Aleosan", "Antipas", "Arakan", "Banisilan", "Carmen", "Kabacan", "Libungan", "M'lang",
        "Magpet", "Makilala", "Matalam", "Midsayap", "Pigcawayan", "Pikit", "President Roxas", "Tulunan"];
		
	var DavNCity = ["Panabo City", "Samal City", "Tagum City"];
	
	var DavNMun = ["Asuncion", "Braulio E. Dujali", "Carmen", "Kapalong", "New Corella", "San Isidro", "Santo Tomas", "Talaingod"];
	
	var DavSCity = ["Davao City", "Digos City"];
	
	var DavSMun = ["Bansalan", "Hagonoy", "Kiblawan", "Magsaysay", "Malalag", "Mantanao", "Padada", "Santa Cruz", "Sulop"];
	
	var DavOccMun = ["Don Marcelino", "Jose Abad Santos", "Malita", "Santa Maria", "Sarangani"];
	
	var DavOrCity = ["Mati City"];
	
	var DavOrMun = ["Baganga", "Banaybanay", "Boston", "Caraga", "Cateel", "Governor Generoso", "Lupon", "Manay",
        "San Isidro", "Tarragona"];
		
	var DinagatMun = ["Basilisa", "Cagdianao", "Dinagat", "Libjo", "Loreto", "San Jose", "Tubajon"];
	
	var EastSamCity = ["Borongan City"];
	
	var EastSamMun = ["Arteche", "Balangiga", "Balangkayan", "Can-avid", "Dolores", "General MacArthur", "Giporlos", "Guiuan",
        "Hernani", "Jipapad", "Lawaan", "Llorente", "Maslog", "Maydolong", "Mercedes", "Oras", "Quinapondan",
        "Salcedo", "San Julian", "San Policarpo", "Sulat", "Taft"];
		
	var GuimarasMun = ["Buenavista", "Jordan", "Nueva Valencia", "San Lorenzo", "Sibunag"];
	
	var IfugaoMun = ["Aguinaldo", "Alfonso Lista", "Asipulo", "Banaue", "Hingyon", "Hungduan", "Kiangan", "Lagawe",
        "Lamut", "Mayoyao", "Tinoc"];
		
	var IloNorCity = ["Batac City", "Laoag City"];
	
	var IloNorMun = ["Adams", "Bacarra", "Badoc", "Bangui", "Banna", "Burgos", "Carasi", "Currimao", "Dingras", "Dumalneg",
        "Marcos", "Nueva Era", "Pagudpud", "Paoay", "Pauquin", "Piddig", "Pinili", "San Nicolas", "Sarrat",
        "Solsona", "Vintar"];
		
	var IloSurCity = ["Candon City", "Vigan City"];
	
	var IloSurMun = ["Alilem", "Banayoyo", "Bantay", "Burgos", "Cabugao", "Caoayan", "Cervantes", "Galimuyod", "Gregorio del Pilar",
        "Lidlidda", "Magsingal", "Nagbukel", "Narvacan", "Quirino", "Salcedo", "San Emilio", "San Esteban", "San Ildefonso",
        "San Juan", "San Vicente", "Santa", "Santa Catalina", "Santa Cruz", "Santa Lucia", "Santa Maria", "Santiago",
        "Santo Domingo", "Sigay", "Sinait", "Sugpon", "Suyo", "Tagudin"];
		
	var IloCity = ["Iloilo City", "Passi City"];
	
	var IloMun = ["Ajuy", "Alimodian", "Anilao", "Badiangan", "Balasan", "Banate", "Barotas Nuevo", "Batad", "Bingawan",
        "Cabatuan", "Calinog", "Carles", "Concepcion", "Dingle", "Duenas", "Dumangas", "Estancia", "Guimbal",
        "Igbaras", "Janiuay", "Lambunao", "Leganes", "Lemery", "Leon", "Maasin", "Milagao", "Mina", "New Lucena",
        "Oton", "Pavia", "Pototan", "San Dionisio", "San Enrique", "San Joaquin", "San Miguel", "San Rafael",
        "Santa Barbara", "Sara", "Tigbauan", "Tubungan", "Zarraga"];
		
	var IsaCity = ["Cauayan City", "Ilagan City", "Santiago City"];
	
	var IsaMun = ["Alicia", "Angadanan", "Aurora", "Benito Solven", "Burgos", "Cabagan", "Cordon", "Delfin Albano",
        "Dinapigue", "Divilacan", "Echague", "Gamu", "Jones", "Luna", "Maconacon", "Mallig", "Naguilian",
        "Palanan", "Quezon", "Quirino", "Ramon", "Reina Mercedes", "Roxas", "San Agustin", "San Guillermo",
        "San Isidro", "San Manuel", "San Mariano", "San Mateo", "San Pablo", "Santa Maria", "Santo Tomas", "Tumauini"];
		
	var KalingaCity = ["Tabuk City"];
	
	var KalingaMun = ["Balbalan", "Lubuagan", "Pasil", "Pinukpuk", "Rizal", "Tanudan", "Tinglayan"];
	
	var LaUnCity = ["San Fernando City"];
	
	var LaUnMun = ["Agoo", "Aringay", "Bacnotan", "Bagulin", "Balaoan", "Bangar", "Bauang", "Burgos", "Caba", "Luna", "Naguilian",
        "Pugo", "Rosario", "San Gabriel", "San Juan", "Santo Tomas", "Santol", "Sudipen", "Tubao"];
		
	var LagunaCity = ["Binan City", "Cabuyao City", "Calamba City", "San Pablo City",
        "San Pedro City", "Santa Rosa City"];
		
	var LagunaMun = ["Alaminos", "Bay", "Calauan", "Cavinti", "Famy", "Kalayaan", "Liliw", "Los Banos", "Luisiana", "Lumban",
        "Mabitac", "Magdalena", "Majayjay", "Nagcarlan", "Paete", "Pagsanjan", "Pakil", "Pangil", "Pila", "Rizal",
        "Santa Cruz", "Santa Maria", "Siniloan", "Victoria"];
		
	var LanDelNorCity = ["Iligan City"];
	
	var LanDelNorMun = ["Bacolod", "Baloi", "Baroy", "Kapatagan", "Kausawagan", "Kolambugan", "Lala", "Linamon", "Magsaysay",
        "Maigo", "Matungao", "Munai", "Nunungan", "Pantao Ragat", "Pantar", "Poona Piagapo", "Salvador", "Sapad",
        "Sultan Naga Dimaporo", "Tagoloan", "Tangcal", "Tubod"];
		
	var LanDelSurCity = ["Marawi City"];
	
	var LanDelSurMun = ["Bacolod-Kalawi", "Balabagan", "Balindong", "Bayang", "Binidayan", "Buadiposo-Buntong", "Bumbaran",
        "Butig", "Calanogas", "Ditsaan-Ramain", "Kapai", "Kapatagan", "Lumba-Bayabao", "Lumbaca-Unayan",
        "Lumbatan", "Lumbayanague", "Madalum", "Madamba", "Maguing", "Malabang", "Marantao", "Marogong",
        "Masiu", "Mulondo", "Pagayawan", "Piagapo", "Poona Bayabao", "Pualas", "Saguiaran", "Sultan Dumalondong",
        "Picong", "Tagoloan II", "Tamparan", "Taraka", "Tubaran", "Tugaya", "Wao"];
		
	var LeyteCity = ["Baybay City", "Ormoc City", "Tacloban City"];
	
	var LeyteMun = ["Abuyog", "Alangalang", "Albuera", "Babatngon", "Barugo", "Bato", "Barauen", "Calubian", "Capoocan",
        "Carigara", "Dagami", "Dulag", "Hilongos", "Hindang", "Inopacan", "Isabel", "Jaro", "Javier", "Julita",
        "Kananga", "La Paz", "Leyte", "MacArthur", "Mahaplag", "Matag-ob", "Matalom", "Mayorga", "Merida", "Palo",
        "Palompon", "Pastrana", "San Isidro", "San Miguel", "Santa Fe", "Tabango", "Tabontabon", "Tanauan", "Tolosa",
        "Tunga", "Villaba"];
		
	var MagCity = ["Cotabato City"];
	
	var MagMun = ["Ampatuan", "Barira", "Buldon", "Buluan", "Datu Abdullah Sangki", "Datu Anggal Midtimbang", "Datu Blah T. Sinsuat",
        "Datu Hoffer Ampatuan", "Datu Montawal", "Datu Odin Sinsuat", "Satud Paglas", "Datu Piang", "Datu Salibo",
        "Datu Saudi-Ampatuan", "Datu Unsay", "General Salipada K. Pendatun", "Guindulungan", "Kabuntalan", "Mamasapano",
        "Matanog", "Northern Kabuntalan", "Pagalungan", "Paglat", "Pandag", "Parang", "Rajah Buayan", "Shariff Aguak",
        "Shariff Saydona", "South Upi", "Sultan Kudarat", "Sultan Mastura", "Sultan sa Barongis", "Sultan Tumagka", "Tulayan", "Upi"];
	
	var MarinMun = ["Boac", "Buenavista", "Gasan", "Mogpog", "Santa Cruz", "Torrijos"];
	
	var MasCity = ["Masbate City"];
	
	var MasMun = ["Aroroy", "Baleno", "Balud", "Batuan", "Cataingan", "Cawayan", "Claveria", "Dimasalang", "Esperanza",
        "Mandaon", "Milagros", "Mobo", "Monreal", "Palanas", "Pio V. Corpuz", "Placer", "San Fernando", "San Jacinto",
        "San Pascual", "Uson"];
		
	var MetManCity = ["City of Manila", "Caloocan", "Las Pinas", "Makati",
        "Malabon", "Mandaluyong", "Marikina", "Muntinlupa",
        "Navotas", "Paranaque", "Pasay", "Pasig", "Quezon City",
        "San Juan", "Taguig", "Valenzuela"];
		
	var MetManMun = ["Pateros"];
	
	var MisOccCity = ["Oroquieta City", "Ozamiz City", "Tangub City"];
	
	var MisOccMun = ["Aloran", "Baliangao", "Bonifacio", "Calamba", "Clarin", "Concepcion", "Don Victoriano Chiongbian",
        "Jimenez", "Lopez Jaena", "Panaon", "Plaridel", "Sapang Dalaga", "Sinacaban", "Tudela"];
		
	var MisOrCity = ["Cagayan de Oro", "El Salvador City", "Gingoog City"];
	
	var MisOrMun = ["Alubijid", "Balingasag", "Balingoan", "Binuangan", "Claveria", "Gitagum", "Initao", "Kinoguitan",
        "Lagonglong", "Laguindingan", "Libertad", "Lugait", "Magsaysay", "Manticao", "Medina", "Naawan",
        "Opol", "Salay", "Sugbongcogon", "Tagoloan", "Talisayan", "Villanueva"];
		
	var MtProvMun = ["Barlig", "Bauko", "Besao", "Bontoc", "Natonin", "Paracelis", "Sabangan", "Sadanga", "Sagada", "Tadian"];
	
	var NegOccCity = ["Bacolod City", "Bago City", "Cadiz City", "Himamaylan City",
        "Kabankalan City", "La Carlota City", "Sagay City", "San Carlos City",
        "Silay City", "Sipalay City", "Talisay City", "Victorias City"];
		
	var NegOccMun = ["Binalbagan", "Calatrava", "Candoni", "Cauayan", "Enqrique B. Magalona", "Hinigaran", "Hinoba-an",
        "Ilog", "Isabela", "La Castellana", "Manapla", "Moises Padilla", "Murcia", "Pontevedra", "Pulupandan",
        "Salvador Benedicto", "San Enrique", "Toboso", "Valladolid"];
		
	var NegOrCity = ["Bais City", "Bayawan City", "Canlaon City", "Guihulngan City",
            "Dumaguete City", "Tanjay City"];
			
	var NegOrMun = ["Amlan", "Ayungon", "Bacong", "Basay", "Bindoy", "Dauin", "Jimalalud", "La Libertad", "Mabinay", "Manjuyod",
        "Pamplona", "San Jose", "Santa Catalina", "Siaton", "Sibulan", "Tayasan", "Valencia", "Vallehermoso", "Zamboanguita"];
		
	var NorSamMun = ["Allen", "Biri", "Bobon", "Capul", "Catarman", "Catubig", "Gamay", "Laoang", "Lapinig", "Las Navas",
        "Lavezares", "Lope de Vega", "Mapanas", "Mondragon", "Palapag", "Pambujan", "Rosario", "San Antonio",
        "San Isidro", "San Jose", "San Roque", "San Vicente", "Silvino Lobos", "Victoria"];
		
	var NuEcCity = ["Cabanatuan City", "Gapan City", "Palayan City", "San Jose City",
        "Science City of Munoz"];
		
	var NuEcMun = ["Aliaga", "Bongabon", "Cabiao", "Carranglan", "Cuyapu", "Gabaldon", "General Mamerto Natividiad",
        "General Tinio", "Guimba", "Jaen", "Laur", "Licab", "Llanera", "Lupao", "Nampicuan", "Pantabangan",
        "Penaranda", "Quezon", "Rizal", "San Antonio", "San Isidro", "San Leonardo", "Santa Rosa", "Santo Domingo",
        "Talavera", "Talugtug", "Zaragoza"];
		
	var NuViMun = ["Alfonso Castaneda", "Ambaguio", "Aritao", "Bagabag", "Bambang", "Bayombong", "Diadi", "Dupax del Norte",
        "Dupax del Sur", "Kasibu", "Kayapa", "Quezon", "Santa Fe", "Solano", "Villaverde"];
		
	var OccMinMun = ["Abra de Ilog", "Calintaan", "Looc", "Lubang", "Magsaysay", "Mamburao", "Paluan", "Rizal", "Sablayan",
        "San Jose", "Santa Cruz"];
		
	var OrMinCity = ["Calapan City"];
	
	var OrMinMun = ["Baco", "Bansud", "Bongabong", "Bulalacao", "Mansalay", "Naujan", "Pinamalayan", "Pola", "Puerto Galera", "Roxas",
        "San Teodoro", "Socorro", "Victoria"];
	
	var PalCity = ["Puerto Prinsesa City"];
	
	var PalMun = ["Aborlan", "Agutaya", "Araceli", "Balabac", "Bataraza", "Brooke's Point", "Busuanga", "Cagayancillo",
        "Coron", "Culion", "Cuyo", "Dumaran", "El Nido", "Kalayaan", "Linapacan", "Magsaysay", "Narra", "Quezon",
        "Rizal", "Roxas", "San Vicente", "Sofronio Espanola", "Taytay"];
		
	var PamCity = ["Angeles City", "San Fernando City", "Mabalacat City"];
	
	var PamMun = ["Apalit", "Arayat", "Bacolor", "Candaba", "Floridablanca", "Lubao", "Macabebe", "Magalang", "Masantol",
        "Mexico", "Minalin", "Porac", "San Luis", "San Simon", "Santa Ana", "Santa Rita", "Santo Tomas", "Sasmuan"];
		
	var PangCity = ["Alaminos City", "Dagupan City", "San Carlos City", "Urdaneta City"];
	
	var PangMun = ["Agno", "Aguilar", "Alcala", "Anda", "Asingan", "Balungao", "Bani", "Basista", "Batista", "Bayambang",
        "Binalonan", "Binmaley", "Bolinao", "Bugallon", "Burgos", "Calasiao", "Dasol", "Infanta", "Dasol", "Infanta",
        "Labrador", "Laoac", "Lingayen", "Mabini", "Malasiqui", "Manaoag", "Mangaldan", "Mangatarem", "Mapandan",
        "Natividad", "Pozzorubio", "Rosales", "San Fabian", "San Jacinto", "San Manuel", "San Nicolas", "San Quintin",
        "Santa Barbara", "Santa Maria", "Santo Tomas", "Sison", "Sual", "Tayug", "Umingan", "Urbiztondo", "Villasis"];
		
	var QueCity = ["Lucena City", "Tayabas City"];
	
	var QuenMun = ["Agdangan", "Alabat", "Atimonan", "Buenavista", "Burdeos", "Calauag", "Candelaria", "Catanauan",
        "Dolores", "General Luna", "General Nakar", "Guinayangan", "Gumaca", "Infanta", "Jomalig", "Lopez",
        "Lucban", "Macalelon", "Mauban", "Mulanay", "Padre Burgos", "Pagbilao", "Panukulan", "Patnanungan",
        "Perez", "Pitogo", "Plaridel", "Polillo", "Quezon", "Real", "Sampaloc", "San Andres", "San Antonio",
        "San Francisco", "San Narciso", "Sariaya", "Tagkawayan", "Tiaong", "Unisan"];
		
	var QuirinoMun = ["Aglipay", "Cabarroguis", "Diffun", "Maddela", "Nagtipunan", "Saguday"];
	
	var RizCity = ["Antipolo City"];
	
	var RizMun = ["Angono", "Baras", "Binangonan", "Cainta", "Cardona", "Jalajala", "Morong", "Pililla", "Rodriguez",
        "San Mateo", "Tanay", "Taytay", "Teresa"];
		
	var RomMun = ["Alcantara", "Banton", "Cajidiocan", "Calatrava", "Concepcion", "Corcuera", "Ferrol", "Looc", "Magdiwang",
        "Odiongan", "Romblon", "San Agustin", "San Andres", "San Fernando", "San Jose", "Santa Fe", "Santa Maria"];
		
	var SamCity = ["Calbayog City", "Catbalogan City"];
	
	var SamMun = ["Almagro", "Basey", "Calbiga", "Daram", "Gandara", "Hinabangan", "Jiabong", "Marabut", "Matuguinao",
        "Motiong", "Pagsanghan", "Paranas", "Pinabacdao", "San Jorge", "San Jose de Buan", "San Sebastian",
        "Santa Margarita", "Santa Rita", "Santo Nino", "Tagapul-an", "Talalora", "Tarangnan", "Villareal", "Zumarraga"];
		
	var SarMun = ["Alabel", "Glan", "Kiamba", "Maasim", "Maitum", "Malapatan", "Malungon"];
	
	var SiqMun = ["Enrique Villanueva", "Larena", "Lazi", "Maria", "San Juan", "Siquijor"];
	
	var SorCity = ["Sorsogon City"];
	
	var SorMun = ["Barcelona", "Bulan", "Bulusan", "Casiguran", "Castilla", "Donsol", "Gubat", "Irosin", "Juban",
        "Magallanes", "Matnog", "Pilar", "Prieto Diaz", "Santa Magdalena"];
		
	var SouCotCity = ["General Santos City", "Koronadal City"];
	
	var SouCotMun = ["Banga", "Lake Sebu", "Norala", "Polomolok", "Santo Nino", "Surallah", "T'boli", "Tampakan",
        "Tantangan", "Tupi"];
		
	var SouLeyCity = ["Maasin City"];
	
	var SouLeyMun = ["Anahawan", "Bontoc", "Hinunangan", "Hinundayan", "Libagon", "Limasawa", "Macrohon", "Malitbog", "Padre Burgos",
        "Pintuyan", "Saint Bernard", "San Francisco", "San Juan", "San Ricardo", "Silago", "Sogod", "Tomas Oppus"];
		
	var SulKudCity = ["Tacurong City"];
	
	var SulKudMun = ["Bagumbayan", "Columbio", "Esperanza", "Isulan", "Kalamansig", "Lambayong", "Lebak", "Lutayan",
        "Palimbang", "President Quirino", "Senator Ninoy Aquino"];
		
	var SuluMun = ["Banguingui", "Hadji Panglima Tahil", "Indanan", "Jolo", "Kalingalan Caluang", "Lugus", "Luuk",
        "Maimbung", "Old Panamao", "Omar", "Pandami", "Panglima Estino", "Pangutaran", "Parang", "Pata",
        "Patikul", "Siasi", "Talipao", "Tapul"];
		
	var SurDelNorCity = ["Surigao City"];
	
	var SurDelNorMun = ["Alegria", "Bacuag", "Burgos", "Claver", "Dapa", "Del Carmen", "General Luna", "Gigaquit", "Mainit",
        "Malimono", "Pilar", "Placer", "San Benito", "San Francisco", "San Isidro", "Santa Monica", "Sison",
        "Socorro", "Tagana-an", "Tubod"];
		
	var SurDelSurCity = ["Bislig City", "Tandang City"];
	
	var SurDelSurMun = ["Barobo", "Bayabas", "Cagwait", "Cantilan", "Carmen", "Carrascal", "Cortes", "Hinatuan", "Lanuza", "Lianga",
        "Lingig", "Madrid", "Marihatag", "San Agustin", "San Miguel", "Tagbina", "Tago"];
		
	var TarCity = ["Tarlac City"];
	
	var TarMun = ["Anao", "Bamban", "Camiling", "Capas", "Concepcion", "Gerona", "La Paz", "Mayantoc", "Moncada", "Paniqui",
        "Pura", "Ramos", "San Clemente", "San Jose", "San Manuel", "Santa Ignacia", "Victoria"];
		
	var TawiMun = ["Bongao", "Languyan", "Mapun", "Panglima Sugala", "Sapa-Sapa", "Sibutu", "Simunul", "Sitangkai",
        "South Ubian", "Tandubas", "Turtle Islands"];
		
	var ZamCity = ["Olongapo City"];
	
	var ZamMun = ["Botolan", "Cabangan", "Candelaria", "Castillejos", "Iba", "Masinloc", "Palauig", "San Antonio", "San Felipe",
        "San Marcelino", "San Narciso", "Santa Cruz", "Subic"];
		
	var ZamDelNorCity = ["Dapitan City", "Dipolog City"];
	
	var ZamDelNorMun = ["Baliguian", "Godod", "Gutalac", "Jose Dalman", "Kalawit", "Katipunan", "La Libertad", "Labason", "Leon B. Postigo",
        "Liloy", "Manukan", "Mutia", "Pinan", "Polanco", "President Manuel A. Roxas", "Rizal", "Salug", "Sergio Osmena Sr.",
        "Siayan", "Sibuco", "Sibutad", "Sindangan", "Siocon", "Sirawai", "Tampilisan"];
		
	var ZamDelSurCity = ["Pagadian City", "Zamboanga City"];
	
	var ZamDelSurMun = ["Aurora", "Bayog", "Dimataling", "Dinas", "Dumalinao", "Guipos", "Josefina", "Kumalarang", "Labangan", "Lakewood",
        "Lapuyan", "Mahayag", "Margosatubig", "Midsalip", "Molave", "Pitogo", "Ramon Magsaysay", "San Miguel", "San Pablo",
        "Sominot", "Tabina", "Tambulig", "Tigbao", "Tukuran", "Vincenzo A. Sagun"];
		
	var ZamSibMun = ["Alicia", "Buug", "Diplahan", "Imelda", "Ipil", "Kabasalan", "Mabuhay", "Malangas", "Naga", "Olutanga",
        "Payao", "Roseller Lim", "Siay", "Talusan", "Titay", "Tungawan"];
		
	var ShariffMun = ["Barira", "Buldon", "Datu T. Sinsuat", "Datu Odin Sinsuat", "Kabuntalan", "Matanog", "Northern Kabuntalan",
         "Parang", "Sultan Kudarat", "Sultan Mastura", "Upi"];
	
	$('fieldset.personal').hide();
	$('fieldset.company').hide();
	$('fieldset.mailing').hide();
	$('fieldset.residential').hide();
	$('fieldset.companyadd').hide();
	$('fieldset.contact').hide();
	$('fieldset.representative').hide();

//SHOW FIELDSETS! 	
 	$("#typeofcustomer").change(function() {
		var typecustomer = $("#typeofcustomer option:selected").val();
		switch (typecustomer) {
			case "Individual":
				$('fieldset.personal').show();
				$('fieldset.company').hide();
				$('fieldset.mailing').show();
				$('fieldset.residential').show();
				$('fieldset.companyadd').hide();
				$('fieldset.contact').show();
				$('fieldset.representative').hide();
				submitform();
				break;
			case "Corporate":
				$('fieldset.personal').hide();
				$('fieldset.company').show();
				$('fieldset.mailing').show();
				$('fieldset.residential').hide();
				$('fieldset.companyadd').show();
				$('fieldset.contact').show();
				$('fieldset.representative').show();
				submitform();
				break;
			default:
				$('fieldset.personal').hide();
				$('fieldset.company').hide();
				$('fieldset.mailing').hide();
				$('fieldset.residential').hide();
				$('fieldset.companyadd').hide();
				$('fieldset.contact').hide();
				$('fieldset.representative').hide();
			}
	});
	
	$("#mailpro").change(function() {
		var select = $("#mailpro option:selected").val();
		switch (select) {
			case "Abra":
				mail_mun(AbraMun);
				mail_city();
				break;
			case "Agusan del Norte":
				mail_mun(AgusanNMun);
				mail_city(AgusanNCity);
				break;
			case "Agusan del Sur":
				mail_mun(AgusanSMun);
				mail_city(AgusanSCity);
				break;
			case "Aklan":
				mail_mun(AklanMun);
				mail_city();
				break;
			case "Albay":
				mail_mun(AlbayMun);
				mail_city(AlbayCity);
				break;
			case "Antique":
				mail_mun(AntiqueMun);
				mail_city();
				break;
			case "Apayao":
				mail_mun(ApayaoMun);
				mail_city();
				break;
			case "Aurora":
				mail_mun(AuroraMun);
				mail_city();
				break;
			case "Basilan":
				mail_mun(BasilanMun);
				mail_city(BasilanCity);
				break;
			case "Bataan":
				mail_mun(BataanCity);
				mail_city(BataanMun);
				break;
			case "Batanes":
				mail_mun(BatanesMun);
				mail_city();
				break;
			case "Batangas":
				mail_mun(BatangasMun);
				mail_city(BatangasCity);
				break;
			case "Benguet":
				mail_mun(BenguetMun);
				mail_city(BenguetCity);
				break;
			case "Biliran":
				mail_mun(BiliranMun);
				mail_city();
				break;
			case "Bohol":
				mail_mun(BoholMun);
				mail_city(BoholCity);
				break;
			case "Bukidnon":
				mail_mun(BukidnonMun);
				mail_city(BukidnonCity);
				break;
			case "Bulacan":
				mail_mun(BulacanMun);
				mail_city(BulacanCity);
				break;
			case "Cagayan":
				mail_mun(CagayanMun);
				mail_city(CagayanCity);
				break;
			case "Camarines Norte":
				mail_mun(CamNMun);
				mail_city();
				break;
			case "Camarines Sur":
				mail_mun(CamSMun);
				mail_city(CamSCity);
				break;
			case "Camiguin":
				mail_mun(CamiguinMun);
				mail_city();
				break;
			case "Capiz":
				mail_mun(CapizMun);
				mail_city(CapizCity);
				break;
			case "Catanduanes":
				mail_mun(CatanduanesMun);
				mail_city();
				break;
			case "Cavite":
				mail_mun(CaviteMun);
				mail_city(CaviteCity);
				break;
			case "Cebu":
				mail_mun(CebuMun);
				mail_city(CebuCity);
				break;
			case "Compostela Valley":
				mail_mun(CompMun);
				mail_city();
				break;
			case "Cotabato":
				mail_mun(CotabatoMun);
				mail_city(CotabatoCity);
				break;
			case "Davao del Norte":
				mail_mun(DavNMun);
				mail_city(DavNCity);
				break;
			case "Davao Occidental":
				mail_mun(DavOccMun);
				mail_city();
				break;
			case "Davao del Sur":
				mail_mun(DavSMun);
				mail_city(DavSCity);
				break;
			case "Davao Oriental":
				mail_mun(DavOrMun);
				mail_city(DavOrCity);
				break;
			case "Dinagat Islands":
				mail_mun(DinagatMun);
				mail_city();
				break;
			case "Eastern Samar":
				mail_mun(EastSamMun);
				mail_city(EastSamCity);
				break;
			case "Guimaras":
				mail_mun(GuimarasMun);
				mail_city();
				break;
			case "Ifugao":
				mail_mun(IfugaoMun);
				mail_city();
				break;
			case "Ilocos Norte":
				mail_mun(IloNorMun);
				mail_city(IloNorCity);
				break;
			case "Ilocos Sur":
				mail_mun(IloSurMun);
				mail_city(IloSurCity);
				break;
			case "Iloilo":
				mail_mun(IloMun);
				mail_city(IloCity);
				break;
			case "Isabela":
				mail_mun(IsaMun);
				mail_city(IsaCity);
				break;
			case "Kalinga":
				mail_mun(KalingaMun);
				mail_city(KalingaCity);
				break;
			case "La Union":
				mail_mun(LaUnMun);
				mail_city(LaUnCity);
				break;
			case "Laguna":
				mail_mun(LagunaMun);
				mail_city(LagunaCity);
				break;
			case "Lanao del Norte":
				mail_mun(LanDelNorMun);
				mail_city(LanDelNorCity);
				break;
			case "Lanao del Sur":
				mail_mun(LanDelSurMun);
				mail_city(LanDelSurCity);
				break;
			case "Leyte":
				mail_mun(LeyteMun);
				mail_city(LeyteCity);
				break;
			case "Maguindanao":
				mail_mun(MagMun);
				mail_city(MagCity);
				break;
			case "Marinduque":
				mail_mun(MarinMun);
				mail_city();
				break;
			case "Masbate":
				mail_mun(MasMun);
				mail_city(MasCity);
				break;
			case "Metro Manila":
				mail_mun(MetManMun);
				mail_city(MetManCity);
				break;
			case "Misamis Occidental":
				mail_mun(MisOccMun);
				mail_city(MisOccCity);
				break;
			case "Misamis Oriental":
				mail_mun(MisOrMun);
				mail_city(MisOrCity);
				break;
			case "Mountain Province":
				mail_mun(MtProvMun);
				mail_city();
				break;
			case "Negros Occidental":
				mail_mun(NegOccMun);
				mail_city(NegOccCity);
				break;
			case "Negros Oriental":
				mail_mun(NegOrMun);
				mail_city(NegOrCity);
				break;
			case "Northern Samar":
				mail_mun(NorSamMun);
				mail_city();
				break;
			case "Nueva Ecija":
				mail_mun(NuEcMun);
				mail_city(NuEcCity);
				break;
			case "Nueva Vizcaya":
				mail_mun(NuViMun);
				mail_city();
				break;
			case "Occidental Mindoro":
				mail_mun(OccMinMun);
				mail_city();
				break;
			case "Oriental Mindoro":
				mail_mun(OrMinMun);
				mail_city(OrMinCity);
				break;
			case "Palawan":
				mail_mun(PalMun);
				mail_city(PalCity);
				break;
			case "Pampanga":
				mail_mun(PamMun);
				mail_city(PamCity);
				break;
			case "Pangasinan":
				mail_mun(PangMun);
				mail_city(PangCity);
				break;
			case "Quezon":
				mail_mun(QuenMun);
				mail_city(QueCity);
				break;
			case "Quirino":
				mail_mun(QuirinoMun);
				mail_city();
				break;
			case "Rizal":
				mail_mun(RizMun);
				mail_city(RizCity);
				break;
			case "Romblon":
				mail_mun(RomMun);
				mail_city();
				break;
			case "Samar":
				mail_mun(SamMun);
				mail_city(SamCity);
				break;
			case "Sarangani":
				mail_mun(SarMun);
				mail_city();
				break;
			case "Shariff Kabunsuan":
				mail_mun(ShariffMun);
				mail_city();
				break;
			case "Siquijor":
				mail_mun(SiqMun);
				mail_city();
				break;
			case "Sorsogon":
				mail_mun(SorMun);
				mail_city(SorCity);
				break;
			case "South Cotabato":
				mail_mun(SouCotMun);
				mail_city(SouCotCity);
				break;
			case "Southern Leyte":
				mail_mun(SouLeyMun);
				mail_city(SouLeyCity);
				break;
			case "Sultan Kudarat":
				mail_mun(SulKudMun);
				mail_city(SulKudCity);
				break;
			case "Sulu":
				mail_mun(SuluMun);
				mail_city();
				break;
			case "Surigao del Norte":
				mail_mun(SurDelNorMun);
				mail_city(SurDelNorCity);
				break;
			case "Surigao del Sur":
				mail_mun(SurDelSurMun);
				mail_city(SurDelSurCity);
				break;
			case "Tarlac":
				mail_mun(TarMun);
				mail_city(TarCity);
				break;
			case "Tawi-Tawi":
				mail_mun(TawiMun);
				mail_city();
				break;
			case "Zambales":
				mail_mun(ZamMun);
				mail_city(ZamCity);
				break;
			case "Zamboanga del Norte":
				mail_mun(ZamDelNorMun);
				mail_city(ZamDelNorCity);
				break;
			case "Zamboanga del Sur":
				mail_mun(ZamDelSurMun);
				mail_city(ZamDelSurCity);
				break;
			case "Zamboanga Sibugay":
				mail_mun(ZamSibMun);
				mail_city();
				break;
			default:
				$("#mailmun").empty();
				$("#mailmun").append("<option>Select Municipality</option>");
				break;
		}
	});
	
	$("#compro").change(function() {
		var select = $("#compro option:selected").val();
		switch (select) {
			case "Abra":
				com_mun(AbraMun);
				com_city();
				break;
			case "Agusan del Norte":
				com_mun(AgusanNMun);
				com_city(AgusanNCity);
				break;
			case "Agusan del Sur":
				com_mun(AgusanSMun);
				com_city(AgusanSCity);
				break;
			case "Aklan":
				com_mun(AklanMun);
				com_city();
				break;
			case "Albay":
				com_mun(AlbayMun);
				com_city(AlbayCity);
				break;
			case "Antique":
				com_mun(AntiqueMun);
				com_city();
				break;
			case "Apayao":
				com_mun(ApayaoMun);
				com_city();
				break;
			case "Aurora":
				com_mun(AuroraMun);
				com_city();
				break;
			case "Basilan":
				com_mun(BasilanMun);
				com_city(BasilanCity);
				break;
			case "Bataan":
				com_mun(BataanCity);
				com_city(BataanMun);
				break;
			case "Batanes":
				com_mun(BatanesMun);
				com_city();
				break;
			case "Batangas":
				com_mun(BatangasMun);
				com_city(BatangasCity);
				break;
			case "Benguet":
				com_mun(BenguetMun);
				com_city(BenguetCity);
				break;
			case "Biliran":
				com_mun(BiliranMun);
				com_city();
				break;
			case "Bohol":
				com_mun(BoholMun);
				com_city(BoholCity);
				break;
			case "Bukidnon":
				com_mun(BukidnonMun);
				com_city(BukidnonCity);
				break;
			case "Bulacan":
				com_mun(BulacanMun);
				com_city(BulacanCity);
				break;
			case "Cagayan":
				com_mun(CagayanMun);
				com_city(CagayanCity);
				break;
			case "Camarines Norte":
				com_mun(CamNMun);
				com_city();
				break;
			case "Camarines Sur":
				com_mun(CamSMun);
				com_city(CamSCity);
				break;
			case "Camiguin":
				com_mun(CamiguinMun);
				com_city();
				break;
			case "Capiz":
				com_mun(CapizMun);
				com_city(CapizCity);
				break;
			case "Catanduanes":
				com_mun(CatanduanesMun);
				com_city();
				break;
			case "Cavite":
				com_mun(CaviteMun);
				com_city(CaviteCity);
				break;
			case "Cebu":
				com_mun(CebuMun);
				com_city(CebuCity);
				break;
			case "Compostela Valley":
				com_mun(CompMun);
				com_city();
				break;
			case "Cotabato":
				com_mun(CotabatoMun);
				com_city(CotabatoCity);
				break;
			case "Davao del Norte":
				com_mun(DavNMun);
				com_city(DavNCity);
				break;
			case "Davao Occidental":
				com_mun(DavOccMun);
				com_city();
				break;
			case "Davao del Sur":
				com_mun(DavSMun);
				com_city(DavSCity);
				break;
			case "Davao Oriental":
				com_mun(DavOrMun);
				com_city(DavOrCity);
				break;
			case "Dinagat Islands":
				com_mun(DinagatMun);
				com_city();
				break;
			case "Eastern Samar":
				com_mun(EastSamMun);
				com_city(EastSamCity);
				break;
			case "Guimaras":
				com_mun(GuimarasMun);
				com_city();
				break;
			case "Ifugao":
				com_mun(IfugaoMun);
				com_city();
				break;
			case "Ilocos Norte":
				com_mun(IloNorMun);
				com_city(IloNorCity);
				break;
			case "Ilocos Sur":
				com_mun(IloSurMun);
				com_city(IloSurCity);
				break;
			case "Iloilo":
				com_mun(IloMun);
				com_city(IloCity);
				break;
			case "Isabela":
				com_mun(IsaMun);
				com_city(IsaCity);
				break;
			case "Kalinga":
				com_mun(KalingaMun);
				com_city(KalingaCity);
				break;
			case "La Union":
				com_mun(LaUnMun);
				com_city(LaUnCity);
				break;
			case "Laguna":
				com_mun(LagunaMun);
				com_city(LagunaCity);
				break;
			case "Lanao del Norte":
				com_mun(LanDelNorMun);
				com_city(LanDelNorCity);
				break;
			case "Lanao del Sur":
				com_mun(LanDelSurMun);
				com_city(LanDelSurCity);
				break;
			case "Leyte":
				com_mun(LeyteMun);
				com_city(LeyteCity);
				break;
			case "Maguindanao":
				com_mun(MagMun);
				com_city(MagCity);
				break;
			case "Marinduque":
				com_mun(MarinMun);
				com_city();
				break;
			case "Masbate":
				com_mun(MasMun);
				com_city(MasCity);
				break;
			case "Metro Manila":
				com_mun(MetManMun);
				com_city(MetManCity);
				break;
			case "Misamis Occidental":
				com_mun(MisOccMun);
				com_city(MisOccCity);
				break;
			case "Misamis Oriental":
				com_mun(MisOrMun);
				com_city(MisOrCity);
				break;
			case "Mountain Province":
				com_mun(MtProvMun);
				com_city();
				break;
			case "Negros Occidental":
				com_mun(NegOccMun);
				com_city(NegOccCity);
				break;
			case "Negros Oriental":
				com_mun(NegOrMun);
				com_city(NegOrCity);
				break;
			case "Northern Samar":
				com_mun(NorSamMun);
				com_city();
				break;
			case "Nueva Ecija":
				com_mun(NuEcMun);
				com_city(NuEcCity);
				break;
			case "Nueva Vizcaya":
				com_mun(NuViMun);
				com_city();
				break;
			case "Occidental Mindoro":
				com_mun(OccMinMun);
				com_city();
				break;
			case "Oriental Mindoro":
				com_mun(OrMinMun);
				com_city(OrMinCity);
				break;
			case "Palawan":
				com_mun(PalMun);
				com_city(PalCity);
				break;
			case "Pampanga":
				com_mun(PamMun);
				com_city(PamCity);
				break;
			case "Pangasinan":
				com_mun(PangMun);
				com_city(PangCity);
				break;
			case "Quezon":
				com_mun(QuenMun);
				com_city(QueCity);
				break;
			case "Quirino":
				com_mun(QuirinoMun);
				com_city();
				break;
			case "Rizal":
				com_mun(RizMun);
				com_city(RizCity);
				break;
			case "Romblon":
				com_mun(RomMun);
				com_city();
				break;
			case "Samar":
				com_mun(SamMun);
				com_city(SamCity);
				break;
			case "Sarangani":
				com_mun(SarMun);
				com_city();
				break;
			case "Shariff Kabunsuan":
				com_mun(ShariffMun);
				com_city();
				break;
			case "Siquijor":
				com_mun(SiqMun);
				com_city();
				break;
			case "Sorsogon":
				com_mun(SorMun);
				com_city(SorCity);
				break;
			case "South Cotabato":
				com_mun(SouCotMun);
				com_city(SouCotCity);
				break;
			case "Southern Leyte":
				com_mun(SouLeyMun);
				com_city(SouLeyCity);
				break;
			case "Sultan Kudarat":
				com_mun(SulKudMun);
				com_city(SulKudCity);
				break;
			case "Sulu":
				com_mun(SuluMun);
				com_city();
				break;
			case "Surigao del Norte":
				com_mun(SurDelNorMun);
				com_city(SurDelNorCity);
				break;
			case "Surigao del Sur":
				com_mun(SurDelSurMun);
				com_city(SurDelSurCity);
				break;
			case "Tarlac":
				com_mun(TarMun);
				com_city(TarCity);
				break;
			case "Tawi-Tawi":
				com_mun(TawiMun);
				com_city();
				break;
			case "Zambales":
				com_mun(ZamMun);
				com_city(ZamCity);
				break;
			case "Zamboanga del Norte":
				com_mun(ZamDelNorMun);
				com_city(ZamDelNorCity);
				break;
			case "Zamboanga del Sur":
				com_mun(ZamDelSurMun);
				com_city(ZamDelSurCity);
				break;
			case "Zamboanga Sibugay":
				com_mun(ZamSibMun);
				com_city();
				break;
			default:
				$("#commun").empty();
				$("#commun").append("<option>Select Municipality</option>");
				break;
		}
	});
	
	$("#respro").change(function() {
		var select = $("#respro option:selected").val();
		switch (select) {
			case "Abra":
				res_mun(AbraMun);
				res_city();
				break;
			case "Agusan del Norte":
				res_mun(AgusanNMun);
				res_city(AgusanNCity);
				break;
			case "Agusan del Sur":
				res_mun(AgusanSMun);
				res_city(AgusanSCity);
				break;
			case "Aklan":
				res_mun(AklanMun);
				res_city();
				break;
			case "Albay":
				res_mun(AlbayMun);
				res_city(AlbayCity);
				break;
			case "Antique":
				res_mun(AntiqueMun);
				res_city();
				break;
			case "Apayao":
				res_mun(ApayaoMun);
				res_city();
				break;
			case "Aurora":
				res_mun(AuroraMun);
				res_city();
				break;
			case "Basilan":
				res_mun(BasilanMun);
				res_city(BasilanCity);
				break;
			case "Bataan":
				res_mun(BataanCity);
				res_city(BataanMun);
				break;
			case "Batanes":
				res_mun(BatanesMun);
				res_city();
				break;
			case "Batangas":
				res_mun(BatangasMun);
				res_city(BatangasCity);
				break;
			case "Benguet":
				res_mun(BenguetMun);
				res_city(BenguetCity);
				break;
			case "Biliran":
				res_mun(BiliranMun);
				res_city();
				break;
			case "Bohol":
				res_mun(BoholMun);
				res_city(BoholCity);
				break;
			case "Bukidnon":
				res_mun(BukidnonMun);
				res_city(BukidnonCity);
				break;
			case "Bulacan":
				res_mun(BulacanMun);
				res_city(BulacanCity);
				break;
			case "Cagayan":
				res_mun(CagayanMun);
				res_city(CagayanCity);
				break;
			case "Camarines Norte":
				res_mun(CamNMun);
				res_city();
				break;
			case "Camarines Sur":
				res_mun(CamSMun);
				res_city(CamSCity);
				break;
			case "Camiguin":
				res_mun(CamiguinMun);
				res_city();
				break;
			case "Capiz":
				res_mun(CapizMun);
				res_city(CapizCity);
				break;
			case "Catanduanes":
				res_mun(CatanduanesMun);
				res_city();
				break;
			case "Cavite":
				res_mun(CaviteMun);
				res_city(CaviteCity);
				break;
			case "Cebu":
				res_mun(CebuMun);
				res_city(CebuCity);
				break;
			case "Compostela Valley":
				res_mun(CompMun);
				res_city();
				break;
			case "Cotabato":
				res_mun(CotabatoMun);
				res_city(CotabatoCity);
				break;
			case "Davao del Norte":
				res_mun(DavNMun);
				res_city(DavNCity);
				break;
			case "Davao Occidental":
				res_mun(DavOccMun);
				res_city();
				break;
			case "Davao del Sur":
				res_mun(DavSMun);
				res_city(DavSCity);
				break;
			case "Davao Oriental":
				res_mun(DavOrMun);
				res_city(DavOrCity);
				break;
			case "Dinagat Islands":
				res_mun(DinagatMun);
				res_city();
				break;
			case "Eastern Samar":
				res_mun(EastSamMun);
				res_city(EastSamCity);
				break;
			case "Guimaras":
				res_mun(GuimarasMun);
				res_city();
				break;
			case "Ifugao":
				res_mun(IfugaoMun);
				res_city();
				break;
			case "Ilocos Norte":
				res_mun(IloNorMun);
				res_city(IloNorCity);
				break;
			case "Ilocos Sur":
				res_mun(IloSurMun);
				res_city(IloSurCity);
				break;
			case "Iloilo":
				res_mun(IloMun);
				res_city(IloCity);
				break;
			case "Isabela":
				res_mun(IsaMun);
				res_city(IsaCity);
				break;
			case "Kalinga":
				res_mun(KalingaMun);
				res_city(KalingaCity);
				break;
			case "La Union":
				res_mun(LaUnMun);
				res_city(LaUnCity);
				break;
			case "Laguna":
				res_mun(LagunaMun);
				res_city(LagunaCity);
				break;
			case "Lanao del Norte":
				res_mun(LanDelNorMun);
				res_city(LanDelNorCity);
				break;
			case "Lanao del Sur":
				res_mun(LanDelSurMun);
				res_city(LanDelSurCity);
				break;
			case "Leyte":
				res_mun(LeyteMun);
				res_city(LeyteCity);
				break;
			case "Maguindanao":
				res_mun(MagMun);
				res_city(MagCity);
				break;
			case "Marinduque":
				res_mun(MarinMun);
				res_city();
				break;
			case "Masbate":
				res_mun(MasMun);
				res_city(MasCity);
				break;
			case "Metro Manila":
				res_mun(MetManMun);
				res_city(MetManCity);
				break;
			case "Misamis Occidental":
				res_mun(MisOccMun);
				res_city(MisOccCity);
				break;
			case "Misamis Oriental":
				res_mun(MisOrMun);
				res_city(MisOrCity);
				break;
			case "Mountain Province":
				res_mun(MtProvMun);
				res_city();
				break;
			case "Negros Occidental":
				res_mun(NegOccMun);
				res_city(NegOccCity);
				break;
			case "Negros Oriental":
				res_mun(NegOrMun);
				res_city(NegOrCity);
				break;
			case "Northern Samar":
				res_mun(NorSamMun);
				res_city();
				break;
			case "Nueva Ecija":
				res_mun(NuEcMun);
				res_city(NuEcCity);
				break;
			case "Nueva Vizcaya":
				res_mun(NuViMun);
				res_city();
				break;
			case "Occidental Mindoro":
				res_mun(OccMinMun);
				res_city();
				break;
			case "Oriental Mindoro":
				res_mun(OrMinMun);
				res_city(OrMinCity);
				break;
			case "Palawan":
				res_mun(PalMun);
				res_city(PalCity);
				break;
			case "Pampanga":
				res_mun(PamMun);
				res_city(PamCity);
				break;
			case "Pangasinan":
				res_mun(PangMun);
				res_city(PangCity);
				break;
			case "Quezon":
				res_mun(QuenMun);
				res_city(QueCity);
				break;
			case "Quirino":
				res_mun(QuirinoMun);
				res_city();
				break;
			case "Rizal":
				res_mun(RizMun);
				res_city(RizCity);
				break;
			case "Romblon":
				res_mun(RomMun);
				res_city();
				break;
			case "Samar":
				res_mun(SamMun);
				res_city(SamCity);
				break;
			case "Sarangani":
				res_mun(SarMun);
				res_city();
				break;
			case "Shariff Kabunsuan":
				res_mun(ShariffMun);
				res_city();
				break;
			case "Siquijor":
				res_mun(SiqMun);
				res_city();
				break;
			case "Sorsogon":
				res_mun(SorMun);
				res_city(SorCity);
				break;
			case "South Cotabato":
				res_mun(SouCotMun);
				res_city(SouCotCity);
				break;
			case "Southern Leyte":
				res_mun(SouLeyMun);
				res_city(SouLeyCity);
				break;
			case "Sultan Kudarat":
				res_mun(SulKudMun);
				res_city(SulKudCity);
				break;
			case "Sulu":
				res_mun(SuluMun);
				res_city();
				break;
			case "Surigao del Norte":
				res_mun(SurDelNorMun);
				res_city(SurDelNorCity);
				break;
			case "Surigao del Sur":
				res_mun(SurDelSurMun);
				res_city(SurDelSurCity);
				break;
			case "Tarlac":
				res_mun(TarMun);
				res_city(TarCity);
				break;
			case "Tawi-Tawi":
				res_mun(TawiMun);
				res_city();
				break;
			case "Zambales":
				res_mun(ZamMun);
				res_city(ZamCity);
				break;
			case "Zamboanga del Norte":
				res_mun(ZamDelNorMun);
				res_city(ZamDelNorCity);
				break;
			case "Zamboanga del Sur":
				res_mun(ZamDelSurMun);
				res_city(ZamDelSurCity);
				break;
			case "Zamboanga Sibugay":
				res_mun(ZamSibMun);
				res_city();
				break;
			default:
				$("#resmun").empty();
				$("#resmun").append("<option>Select Municipality</option>");
				break;
		}
	});
	
	function mail_city(arr){
		$("#mailcity").empty(); //To reset cities
		$("#mailcity").append("<option></option>");
		$(arr).each(function(i) { //to list cities
			$("#mailcity").append('<option value="' + arr[i] +'">' + arr[i] + '</option>')
		});
	}
	
	function mail_mun(arr) {
		$("#mailmun").empty(); //To reset cities
		$("#mailmun").append("<option></option>");
		$(arr).each(function(i) { //to list cities
			$("#mailmun").append('<option value="' + arr[i] +'">' + arr[i] + '</option>')
		});
	}
	
	function res_city(arr){
		$("#rescity").empty(); //To reset cities
		$("#rescity").append("<option></option>");
		$(arr).each(function(i) { //to list cities
			$("#rescity").append('<option value="' + arr[i] +'">' + arr[i] + '</option>')
		});
	}
	
	function res_mun(arr) {
		$("#resmun").empty(); //To reset cities
		$("#resmun").append("<option></option>");
		$(arr).each(function(i) { //to list cities
			$("#resmun").append('<option value="' + arr[i] +'">' + arr[i] + '</option>')
		});
	}
	
	function com_city(arr){
		$("#comcity").empty(); //To reset cities
		$("#comcity").append("<option></option>");
		$(arr).each(function(i) { //to list cities
			$("#comcity").append('<option value="' + arr[i] +'">' + arr[i] + '</option>')
		});
	}
	
	function com_mun(arr) {
		$("#commun").empty(); //To reset cities
		$("#commun").append("<option></option>");
		$(arr).each(function(i) { //to list cities
			$("#commun").append('<option value="' + arr[i] +'">' + arr[i] + '</option>')
		});
	}
	
	
	//SAVE CUSTOMER INFO!!!
	$("#customer").submit(function(e){
	       e.preventDefault();
	});
	
	$("#submit").click(function(e){
		savecustomer();
		
	});

});

function savecustomer(){
	var fname = $('input[name=fname]').val();
	var cname = $('input[name=cname').val();
	var gname = $('input[name=gname').val();
	var fname1 = $('input[name=fname1]').val();
	var gname1 = $('input[name=gname1').val();
	var tin = $('input[name=tin').val();
	var mail1 = $('input[name=mail1').val();
	var res1 = $('input[name=res1').val();
	var com1 = $('input[name=com1').val();
	var mailpro = $('select[name=mailpro]').val();
	var mailmun = $('select[name=mailmun]').val();
	var respro = $('select[name=respro]').val();
	var compro = $('select[name=compro]').val();
	var typeofcustomer = $('select[name=typeofcustomer]').val();
	var datastring = $("#customer").serialize();
	/*alert(datastring);*/
	
	if( (typeofcustomer == "Individual" && (fname == '' || gname=='' || mail1=='' || mailpro=='' || res1=='' || respro=='')) || ( typeofcustomer == "Corporate" && (cname == '' || tin=='' || mail1=='' || mailpro=='' || com1=='' || compro=='' || fname1=='' || gname1==''))  || (typeofcustomer == "Select Type of Customer")){
		alert("Please fill fields marked with *");
	}

	else{
		
		$.ajax({
			type: "POST",
			async: true, 
			url: "addcustomer.php",
			cache: false, 
			data: datastring,
			datatype: "json",
			success: function(html){
				if(confirm("Customer added to database. View profile?")){
						
						$.ajax({
							url: "viewnewcustomer.php",
							data: "",
							dataType: "json",
							success: function(data){
								var value = data[0];
								window.location.href = "viewcustomer.php?id=" + value;
							}
							
						});
					}
					else{
						document.getElementById("customer").reset();	
					}
			},
			error: function(){
				alert("Error");
			}
		});	
	}

}