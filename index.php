<!DOCTYPE html>
<html>
	<head>
		<header> <img src=""> </header>
		<title> C-One Trading Corporation</title>
		<link rel="stylesheet" href="index.css"/>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script type="text/javascript" src="searchcustomer.js"></script>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
  		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.form.js"></script>
		<script type="text/javascript" src="newcustomer.js"></script>
		<script src="js/reset_form.js"></script>
		<link rel="stylesheet" href="newcustomer.css"/>
	</head>
	<body>
	
		<div id="wrapperHeader">
	 		<div id="header">
	  			
	 		</div> 
		</div>
		
		<div id="cssmenu">	
	   		<ul>
				<form> 
					<input type="text" id="idsearch" name="idsearch" class="textfield_search" placeholder="Enter Family Name, Given Name, Company Name" onkeyup="showHint(this.value)"/>
				</form> 
				<button id="addcustomer" name="addcustomer" > Add Customer</button>
	   		</ul>
	   		
	   	</div>
	   	
	   	<!--NEW CUSTOMER-->
		<div id="newcustomer" class="newcustomer">
			<h3> <center> Fill Customer Information</center></h3>
					
			<form id="customer" name="customer" method="post">
				Customer Number: <input type="text" id="cid" name="cid" readonly/>
				Type of Customer*: <select id="typeofcustomer" name="typeofcustomer">
					<option> *Select Type of Customer* </option>
					<option> Individual </option>
					<option> Corporate </option>
					</select><br>
				<fieldset class="personal">
					<legend> Personal Information</legend>
					<p>Family Name: * <input type="text" id="fname" name="fname"/>
					<p>Given Name: * <input  type="text" id="gname" name="gname"/>
					<p>Middle Name: <input type="text" id="mname" name="mname"/>
				</fieldset><br>
				<fieldset class="company">
					<legend> Company Information</legend>
					<p>Company Name*: <input type="text" id="cname" name="cname"/>
					<p>TIN: * <input type="text" id="tin" name="tin"/>
					<p>Type of Company: <select id="typeofcompany" name="typeofcompany">
						<option> Select Type of Company </option>
						<option> VAT </option>
						<option> Non-VAT </option>
					</select>
				</fieldset><br>
				<fieldset class="mailing">
					<legend> Mailing Address </legend>
					<p>Address Line 1: * <input type="text" id="mail1" name="mail1"/>
					<p>Province: * <select id="mailpro" name="mailpro">
								<option></option>
								<option>Abra </option>
								<option>Agusan del Norte</option>
								<option>Agusan del Sur</option>
								<option>Aklan</option>
								<option>Albay</option>
								<option>Antique</option>
								<option>Apayao</option>
								<option>Aurora</option>
								<option>Basilan</option>
								<option>Bataan</option>
								<option>Batanes</option>
								<option>Batangas</option>
								<option>Biliran</option>
								<option>Benguet</option>
								<option>Bohol</option>
								<option>Bukidnon</option>
								<option>Bulacan</option>
								<option>Cagayan</option>
								<option>Camarines Norte</option>
								<option>Camarines Sur</option>
								<option>Camiguin	</option>
								<option>Capiz</option>
								<option>Catanduanes</option>
								<option>Cavite</option>
								<option>Cebu</option>
								<option>Compostela Valley</option>
								<option>Cotabato</option>
								<option>Davao del Norte</option>
								<option>Davao del Sur</option>
								<option>Davao Oriental</option>
								<option>Dinagat Islands</option>
								<option>Eastern Samar</option>
								<option>Guimaras</option>
								<option>Ifugao</option>
								<option>Ilocos Norte</option>
								<option>Ilocos Sur</option>
								<option>Iloilo</option>
								<option>Isabela</option>
								<option>Kalinga</option>
								<option>La Union</option>
								<option>Laguna</option>
								<option>Lanao del Norte</option>
								<option>Lanao del Sur</option>
								<option>Leyte</option>
								<option>Maguindanao</option>
								<option>Marinduque</option>
								<option>Masbate</option>
								<option>Metro Manila</option>
								<option>Misamis Occidental</option>
								<option>Misamis Oriental</option>
								<option>Mountain Province</option>
								<option>Negros Occidental</option>
								<option>Negros Oriental</option>
								<option>Northern Samar</option>
								<option>Nueva Ecija</option>
								<option>Nueva Vizcaya</option>
								<option>Occidental Mindoro</option>
								<option>Oriental Mindoro</option>
								<option>Palawan</option>
								<option>Pampanga</option>
								<option>Pangasinan</option>
								<option>Quezon</option>
								<option>Quirino</option>
								<option>Rizal</option>
								<option>Romblon</option>
								<option>Samar</option>
								<option>Sarangani</option>
								<option>Shariff Kabunsuan</option>
								<option>Siquijor</option>
								<option>Sorsogon</option>
								<option>South Cotabato</option>
								<option>Southern Leyte</option>
								<option>Sultan Kudarat</option>
								<option>Sulu</option>
								<option>Surigao del Norte</option>
								<option>Surigao del Sur</option>
								<option>Tarlac</option>
								<option>Tawi-Tawi</option>
								<option>Zambales</option>
								<option>Zamboanga del Norte</option>
								<option>Zamboanga del Sur</option>
								<option>Zamboanga Sibugay</option>
							  </select>
					<p>Municipality: <select id="mailmun" name="mailmun">
								
							  </select>
					<p>City: <select id="mailcity" name="mailcity">
						
							  </select>
					<p>Zip Code: <input type="text" id="mailzip" name="mailzip">
				</fieldset><br>
				<fieldset class="residential"><br>
					<legend> Residential Address </legend>
					<p>Address Line 1: * <input type="text" id="res1" name="res1"/>
					<p>Province: * <select id="respro" name="respro">
								<option></option>
								<option>Abra </option>
								<option>Agusan del Norte</option>
								<option>Agusan del Sur</option>
								<option>Aklan</option>
								<option>Albay</option>
								<option>Antique</option>
								<option>Apayao</option>
								<option>Aurora</option>
								<option>Basilan</option>
								<option>Bataan</option>
								<option>Batanes</option>
								<option>Batangas</option>
								<option>Benguet</option>
								<option>Biliran</option>
								<option>Bohol</option>
								<option>Bukidnon</option>
								<option>Bulacan</option>
								<option>Cagayan</option>
								<option>Camarines Norte</option>
								<option>Camarines Sur</option>
								<option>Camiguin	</option>
								<option>Capiz</option>
								<option>Catanduanes</option>
								<option>Cavite</option>
								<option>Cebu</option>
								<option>Compostela Valley</option>
								<option>Cotabato</option>
								<option>Davao del Norte</option>
								<option>Davao del Sur</option>
								<option>Davao Oriental</option>
								<option>Dinagat Islands</option>
								<option>Eastern Samar</option>
								<option>Guimaras</option>
								<option>Ifugao</option>
								<option>Ilocos Norte</option>
								<option>Ilocos Sur</option>
								<option>Iloilo</option>
								<option>Isabela</option>
								<option>Kalinga</option>
								<option>La Union</option>
								<option>Laguna</option>
								<option>Lanao del Norte</option>
								<option>Lanao del Sur</option>
								<option>Leyte</option>
								<option>Maguindanao</option>
								<option>Marinduque</option>
								<option>Masbate</option>
								<option>Metro Manila</option>
								<option>Misamis Occidental</option>
								<option>Misamis Oriental</option>
								<option>Mountain Province</option>
								<option>Negros Occidental</option>
								<option>Negros Oriental</option>
								<option>Northern Samar</option>
								<option>Nueva Ecija</option>
								<option>Nueva Vizcaya</option>
								<option>Occidental Mindoro</option>
								<option>Oriental Mindoro</option>
								<option>Palawan</option>
								<option>Pampanga</option>
								<option>Pangasinan</option>
								<option>Quezon</option>
								<option>Quirino</option>
								<option>Rizal</option>
								<option>Romblon</option>
								<option>Samar</option>
								<option>Sarangani</option>
								<option>Shariff Kabunsuan</option>
								<option>Siquijor</option>
								<option>Sorsogon</option>
								<option>South Cotabato</option>
								<option>Southern Leyte</option>
								<option>Sultan Kudarat</option>
								<option>Sulu</option>
								<option>Surigao del Norte</option>
								<option>Surigao del Sur</option>
								<option>Tarlac</option>
								<option>Tawi-Tawi</option>
								<option>Zambales</option>
								<option>Zamboanga del Norte</option>
								<option>Zamboanga del Sur</option>
								<option>Zamboanga Sibugay</option>
							  </select>
					<p>Municipality: <select id="resmun" name="resmun">
								
							  </select>
					<p>City: <select id="rescity" name="rescity">
						
							  </select>
					<p>Zip Code: <input type="text" id="reszip" name="reszip">
				</fieldset><br>
				<fieldset class="companyadd">
					<legend> Company Address </legend>
					<p>Address Line 1: *<input type="text" id="com1" name="com1"/>
					<p>Province: *<select id="compro" name="compro">
								<option></option>
								<option>Abra </option>
								<option>Agusan del Norte</option>
								<option>Agusan del Sur</option>
								<option>Aklan</option>
								<option>Albay</option>
								<option>Antique</option>
								<option>Apayao</option>
								<option>Aurora</option>
								<option>Basilan</option>
								<option>Bataan</option>
								<option>Batanes</option>
								<option>Batangas</option>
								<option>Benguet</option>
								<option>Biliran</option>
								<option>Bohol</option>
								<option>Bukidnon</option>
								<option>Bulacan</option>
								<option>Cagayan</option>
								<option>Camarines Norte</option>
								<option>Camarines Sur</option>
								<option>Camiguin	</option>
								<option>Capiz</option>
								<option>Catanduanes</option>
								<option>Cavite</option>
								<option>Cebu</option>
								<option>Compostela Valley</option>
								<option>Cotabato</option>
								<option>Davao del Norte</option>
								<option>Davao del Sur</option>
								<option>Davao Occidental</option>
								<option>Davao Oriental</option>
								<option>Dinagat Islands</option>
								<option>Eastern Samar</option>
								<option>Guimaras</option>
								<option>Ifugao</option>
								<option>Ilocos Norte</option>
								<option>Ilocos Sur</option>
								<option>Iloilo</option>
								<option>Isabela</option>
								<option>Kalinga</option>
								<option>La Union</option>
								<option>Laguna</option>
								<option>Lanao del Norte</option>
								<option>Lanao del Sur</option>
								<option>Leyte</option>
								<option>Maguindanao</option>
								<option>Marinduque</option>
								<option>Masbate</option>
								<option>Metro Manila</option>
								<option>Misamis Occidental</option>
								<option>Misamis Oriental</option>
								<option>Mountain Province</option>
								<option>Negros Occidental</option>
								<option>Negros Oriental</option>
								<option>Northern Samar</option>
								<option>Nueva Ecija</option>
								<option>Nueva Vizcaya</option>
								<option>Occidental Mindoro</option>
								<option>Oriental Mindoro</option>
								<option>Palawan</option>
								<option>Pampanga</option>
								<option>Pangasinan</option>
								<option>Quezon</option>
								<option>Quirino</option>
								<option>Rizal</option>
								<option>Romblon</option>
								<option>Samar</option>
								<option>Sarangani</option>
								<option>Shariff Kabunsuan</option>
								<option>Siquijor</option>
								<option>Sorsogon</option>
								<option>South Cotabato</option>
								<option>Southern Leyte</option>
								<option>Sultan Kudarat</option>
								<option>Sulu</option>
								<option>Surigao del Norte</option>
								<option>Surigao del Sur</option>
								<option>Tarlac</option>
								<option>Tawi-Tawi</option>
								<option>Zambales</option>
								<option>Zamboanga del Norte</option>
								<option>Zamboanga del Sur</option>
								<option>Zamboanga Sibugay</option>
							  </select>
					<p>Municipality: <select id="commun" name="commun">
								
							  </select>
					<p>City: <select id="comcity" name="comcity">
						
							  </select>
					<p>Zip Code: <input type="text" id="comzip" name="comzip">
				</fieldset><br>
				<fieldset class="contact">
					<legend>Contact Information</legend>
					<p>Telephone Number: <input type="text" id="tel" name="tel"/>
					<p>Mobile Number: <input type="text" id="mobile" name="mobile"/>
					<p>Fax Number: <input type="text" id="fax" name="fax"/>
					<p>E-mail Address: <input type="text" id="email" name="email"/>
				</fieldset><br>
				<fieldset class="representative">
					<legend>Representative Information</legend>
					<p>Family Name 1: *<input type="text" id="fname1" name="fname1"/>
					<p>Given Name 1: *<input type="text" id="gname1" name="gname1"/>
					<p>Middle Name 1: <input type="text" id="mname1" name="mname1"/>
					<p>Contact Information 1: <input type="text" id="contact1" name="contact1"/>
					<p>Family Name 2: <input type="text" id="fname2" name="fname2"/>
					<p>Given Name 2: <input type="text" id="gname2" name="gname2"/>
					<p>Middle Name 2: <input type="text" id="mname2" name="mname2"/>
					<p>Contact Information 2: <input type="text" id="contact2" name="contact2"/>
					<p>Family Name 3: <input type="text" id="fname3" name="fname3"/>
					<p>Given Name 3: <input type="text" id="gname3" name="gname3"/>
					<p>Middle Name 3: <input type="text" id="mname3" name="mname3"/>
					<p>Contact Information 3: <input type="text" id="contact3" name="contact3"/>
				</fieldset>
				
				<br> 
				
			</form>
			<input type="button" id="submit" name="submit" class="submit" value="Submit Form"/>
		</div>

		<div id="container" class="container">
			<div id="searchcon" class="searchcon">
				<div id="results">
					<p><font face = "Arial" size="2"> <span id="txtHint"> </span> </font> </p> 
					
				</div>
			</div>
		</div>

		
		
	</body>
</html>