<?php
	include("include.php");
	
	if(isset($_POST['tid'])){
		$tid = $_POST['tid'];
		$date = $_POST['date'];
		$model = $_POST['model'];
		$engine = $_POST['engine'];
		$unit = $_POST['unit'];
		$complaint = $_POST['complaint'];
		$comment = $_POST['comment'];
		$photo = $_POST['photo'];
	
		$sql = mysql_query("UPDATE complaint SET Date='$date', Model='$model', Engine='$engine', UnitDescription='$unit', Complaint='$complaint', Comments='$comment', Photo='$photo' where idtransaction='$tid'");
		
		mysql_close($dbconnect);
		
	}
?>