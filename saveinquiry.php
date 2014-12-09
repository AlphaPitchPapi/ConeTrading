<?php
	include("include.php");
	
	if(isset($_POST['inqid'])){
		
		$result = mysql_query("SELECT MAX(idtransaction) from transaction");
		$row = mysql_fetch_row($result);
		$inqid = $row[0];
		$inqdate = $_POST['inqdate'];
		$inqtype = $_POST['inqtype'];
		$inqproduct = $_POST['inqproduct'];
		$inqprice = $_POST['inqprice'];
		$inqmisc = $_POST['inqmisc'];
		
		$inqprice=str_replace(",", "", $inqprice);
		
		$sql = mysql_query("INSERT INTO inquiry VALUES('$inqid', '$inqdate', '$inqtype', '$inqproduct', '$inqprice', '$inqmisc')");
		
		if (!mysql_query($sql, $dbconnect)) {
		  die('Error: ' . mysql_error($dbconnect));
		}
		echo "<center>Added<center>";
		
		mysql_close($dbconnect);
	
	}
?>