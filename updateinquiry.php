<?php
	include("include.php");
	
	if(isset($_POST['tid'])){
		$tid = $_POST['tid'];
		$date = $_POST['date'];
		$type = $_POST['type'];
		$product = $_POST['product'];
		$price = $_POST['price'];
		$misc = $_POST['misc'];
		
		$price=str_replace(",", "", $price);
	
		$sql = mysql_query("UPDATE inquiry SET Date='$date', TypeofInquiry='$type', Product='$product', Price='$price', Miscellaneous='$misc' where idtransaction='$tid'");
		
		mysql_close($dbconnect);
		
	}
?>