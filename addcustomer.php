<?php
	include("include.php");
	
	if(isset($_POST['cid'])){
		
			$cid = mysql_real_escape_string($_POST['cid']);
			$typeofcustomer = mysql_real_escape_string($_POST['typeofcustomer']);
			$fname = mysql_real_escape_string($_POST['fname']);
			$gname = mysql_real_escape_string($_POST['gname']);
			$mname = mysql_real_escape_string($_POST['mname']);
			$cname = mysql_real_escape_string($_POST['cname']);
			$tin = mysql_real_escape_string($_POST['tin']);
			$typeofcompany = mysql_real_escape_string($_POST['typeofcompany']);
			$mail1 = mysql_real_escape_string($_POST['mail1']);
			$mailpro = mysql_real_escape_string($_POST['mailpro']);
			$mailcity = mysql_real_escape_string($_POST['mailcity']);
			$mailmun = mysql_real_escape_string($_POST['mailmun']);
			$mailzip = mysql_real_escape_string($_POST['mailzip']);
			$res1 = mysql_real_escape_string($_POST['res1']);
			$respro = mysql_real_escape_string($_POST['respro']);
			$rescity = mysql_real_escape_string($_POST['rescity']);
			$resmun = mysql_real_escape_string($_POST['resmun']);
			$reszip = mysql_real_escape_string($_POST['reszip']);
			$com1 = mysql_real_escape_string($_POST['com1']);
			$compro = mysql_real_escape_string($_POST['compro']);
			$comcity = mysql_real_escape_string($_POST['comcity']);
			$commun = mysql_real_escape_string($_POST['commun']);
			$comzip = mysql_real_escape_string($_POST['comzip']);
			$tel = mysql_real_escape_string($_POST['tel']);
			$mobile = mysql_real_escape_string($_POST['mobile']);
			$fax = mysql_real_escape_string($_POST['fax']);
			$email = mysql_real_escape_string($_POST['email']);
			$fname1 = mysql_real_escape_string($_POST['fname1']);
			$gname1 = mysql_real_escape_string($_POST['gname1']);
			$mname1 = mysql_real_escape_string($_POST['mname1']);
			$contact1 = mysql_real_escape_string($_POST['contact1']);
			$fname2 = mysql_real_escape_string($_POST['fname2']);
			$gname2 = mysql_real_escape_string($_POST['gname2']);
			$mname2 = mysql_real_escape_string($_POST['mname2']);
			$contact2 = mysql_real_escape_string($_POST['contact2']);
			$fname3 = mysql_real_escape_string($_POST['fname3']);
			$gname3 = mysql_real_escape_string($_POST['gname3']);
			$mname3 = mysql_real_escape_string($_POST['mname3']);
			$contact3 = mysql_real_escape_string($_POST['contact3']);
			
			$sql = mysql_query("INSERT INTO customer VALUES('', '$typeofcustomer', '$fname', '$gname', '$mname', '$cname', '$tin', '$typeofcompany', '$mail1', '$mailpro', '$mailcity', '$mailmun', '$mailzip', '$res1', '$respro', '$rescity', '$resmun', '$reszip',  '$com1', '$compro', '$comcity', '$commun', '$comzip', '$tel', '$mobile', '$fax', '$email', '$fname1', '$gname1', '$mname1', '$contact1', '$fname2', '$gname2', '$mname2', '$contact2', '$fname3', '$gname3', '$mname3', '$contact3')");
		
			mysql_close($dbconnect);
		}
?>
