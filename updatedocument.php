<?php
	include("include.php");
	
	if(isset($_POST['tid'])){
		$tid = $_POST['tid'];
		$date = $_POST['date'];
		$type = $_POST['type'];
		
	
		$sql = mysql_query("UPDATE document SET Date='$date', TypeofDocument='$type' where idtransaction='$tid'");
		
		mysql_close($dbconnect);
		
	}
?>