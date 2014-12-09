<?php
	include("include.php");
	
	if(isset($_POST['tid'])){
		$tid = $_POST['tid'];		
		$sql = "DELETE FROM transaction where idtransaction='$tid'";
		$result = mysql_query($sql);
		

				
		mysql_close($dbconnect);

	}
?>