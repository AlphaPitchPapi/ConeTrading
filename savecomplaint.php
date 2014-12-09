<?php
	include("include.php");
	
	if(isset($_POST['comid'])){
		
		$result = mysql_query("SELECT MAX(idtransaction) from transaction");
		$row = mysql_fetch_row($result);
		$comid = $row[0];
		$comdate = $_POST['comdate'];
		$commodel = $_POST['commodel'];
		$comengine = $_POST['comengine'];
		$comunit = $_POST['comunit'];
		$comcomplaint = $_POST['comcomplaint'];
		$comcomment = $_POST['comcomment'];
		$comphoto = $_POST['comphoto'];
		
		
		$sql = mysql_query("INSERT INTO complaint VALUES('$comid', '$comdate', '$commodel', '$comengine', '$comunit', '$comcomplaint', '$comcomment', '$comphoto')");
		
		if (!mysql_query($sql, $dbconnect)) {
		  die('Error: ' . mysql_error($dbconnect));
		}
		echo "<center>Added<center>";
		
		mysql_close($dbconnect);
	
	}
?>