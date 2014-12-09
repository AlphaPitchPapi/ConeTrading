<?php
	include("include.php");
	
	if(isset($_POST['docid'])){
		
		$result = mysql_query("SELECT MAX(idtransaction) from transaction");
		$row = mysql_fetch_row($result);
		$docid = $row[0];
		$docdate = $_POST['docdate'];
		$docdoc = $_POST['docdoc'];
				
		$sql = mysql_query("INSERT INTO document VALUES('$docid', '$docdate', '$docdoc')");
		
		if (!mysql_query($sql, $dbconnect)) {
		  die('Error: ' . mysql_error($dbconnect));
		}
		echo "<center>Added<center>";
		
		mysql_close($dbconnect);
	
	}
?>