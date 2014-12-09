<?php

	include("include.php");
	
	if(isset($_POST['cid'])){

		$cid = $_POST['cid'];
		$typeoftransaction = $_POST['typeoftransaction']; 
		mysql_query("INSERT INTO transaction
				values('$tid', '$cid', '$typeoftransaction')");
			
		mysql_close($dbconnect);
	
	}
?>