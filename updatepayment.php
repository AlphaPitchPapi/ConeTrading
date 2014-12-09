<?php
	include("include.php");
	
	if(isset($_POST['tid'])){
		$tid = $_POST['tid'];
		$date = $_POST['date'];
		$sales = $_POST['sales'];
		$mode = $_POST['mode'];
		$amount = $_POST['amount'];
		$pdc = $_POST['pdc'];
		$amount=str_replace(",", "", $amount);
	
		$sql = mysql_query("UPDATE payment SET Date='$date', SalesContractNumber='$sales', ModeofPayment='$mode', Amount='$amount', PDCDetails='$pdc' where idtransaction='$tid'");
		
		mysql_close($dbconnect);
		
	}
?>