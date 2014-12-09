<?php
	include("include.php");
	
	if(isset($_POST['cid'])){
		$cid = $_POST['cid'];
		$typeofcustomer = $_POST['typeofcustomer'];
		$fname = $_POST['fname'];
		$gname = $_POST['gname'];
		$mname = $_POST['mname'];
		$cname = $_POST['cname'];
		$tin = $_POST['tin'];
		$typeofcompany = $_POST['typeofcompany'];
		$mail1 = $_POST['mail1'];
		$mailpro = $_POST['mailpro'];
		$mailcity = $_POST['mailcity'];
		$mailmun = $_POST['mailmun'];
		$mailzip = $_POST['mailzip'];
		$res1 = $_POST['res1'];
		$respro = $_POST['respro'];
		$rescity = $_POST['rescity'];
		$resmun = $_POST['resmun'];
		$reszip = $_POST['reszip'];
		$com1 = $_POST['com1'];
		$compro = $_POST['compro'];
		$comcity = $_POST['comcity'];
		$commun = $_POST['commun'];
		$comzip = $_POST['comzip'];
		$tel = $_POST['tel'];
		$mobile = $_POST['mobile'];
		$fax = $_POST['fax'];
		$email = $_POST['email'];
		$fname1 = $_POST['fname1'];
		$gname1 = $_POST['gname1'];
		$mname1 = $_POST['mname1'];
		$contact1 = $_POST['contact1'];
		$fname2 = $_POST['fname2'];
		$gname2 = $_POST['gname2'];
		$mname2 = $_POST['mname2'];
		$contact2 = $_POST['contact2'];
		$fname3 = $_POST['fname3'];
		$gname3 = $_POST['gname3'];
		$mname3 = $_POST['mname3'];
		$contact3 = $_POST['contact3'];
		$photo = $_POST['photo'];
	
		$sql = mysql_query("UPDATE customer SET Typeofcustomer='$typeofcustomer', FamilyName='$fname', GivenName='$gname', middlename='$mname', CompanyName='$cname', TIN='$tin', TypeofCompany='$typeofcompany', MailingAdd1='$mail1', MailingProvince='$mailpro', MailingCity='$mailcity', MailingMunicipality='$mailmun', MailingZipCode='$mailzip', ResidentialAdd1='$res1', ResidentialProvince='$respro', ResidentialCity='$rescity', ResidentialMunicipality='$resmun', ResidentialZipCode='$reszip', CompanyAdd1='$com1', CompanyProvince='$compro', CompanyCity='$comcity', CompanyMunicipality='$commun', CompanyZipCode='$comzip', TelephoneNumber='$tel', MobileNumber='$mobile', FaxNumber='$fax', EmailAddress='$email', FamilyName1='$fname1', GivenName1='$gname1', Middlename1='$mname1', Contact1='$contact1', FamilyName2='$fname2', GivenName2='$gname2', Middlename2='$mname2', Contact2='$contact2', FamilyName3='$fname3', GivenName3='$gname3', Middlename3='$mname3', Contact3='$contact3' WHERE idcustomer='$cid'");
		
		mysql_close($dbconnect);
		
	}
?>