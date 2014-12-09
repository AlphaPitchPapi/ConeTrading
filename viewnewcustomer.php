<?php
	include("include.php");
	
	$searchid = mysql_query("SELECT MAX(idcustomer) from customer");
	$rowid = mysql_fetch_row($searchid);
	$cid = $rowid[0];
	
	$result = mysql_query("SELECT * FROM customer where idcustomer=$cid");          //query
 	$array = mysql_fetch_row($result); 
 	echo json_encode($array);
?>