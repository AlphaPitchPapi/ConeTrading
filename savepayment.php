<?php
	include("include.php");
	
	if(isset($_POST['payid'])){
		
		$result = mysql_query("SELECT MAX(idtransaction) from transaction");
		$row = mysql_fetch_row($result);
		$payid = $row[0];
		$paydate = $_POST['paydate'];
		$paysales = $_POST['paysales'];
		$paymode = $_POST['paymode'];
		$payamount = $_POST['payamount'];
		$paypdc = $_POST['paypdc'];
		$payamount=str_replace(",", "", $payamount);
	 	

		$sql = mysql_query("INSERT INTO payment VALUES('$payid', '$paydate', '$paysales', '$paymode', '$payamount', '$paypdc')");
		
		if (!mysql_query($sql, $dbconnect)) {
		  die('Error: ' . mysql_error($dbconnect));
		}
		echo "<center>Added<center>";
		
		mysql_close($dbconnect);
	
	}
?>