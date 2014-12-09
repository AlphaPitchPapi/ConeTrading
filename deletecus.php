<?php

	include("include.php");
	
	if(isset($_POST['cid'])){
		$cid = $_POST['cid'];		
		$sql = "DELETE FROM customer where idcustomer='$cid'";
		$result = mysql_query($sql);
		

				
		mysql_close($dbconnect);

	}
?>