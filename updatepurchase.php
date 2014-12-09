<?php
	include("include.php");
	
	if(isset($_POST['tid'])){
		$tid = $_POST['tid'];
		$date = $_POST['date'];
		$jp = $_POST['jp'];
		$ph = $_POST['ph'];
		$engine = $_POST['engine'];
		$model = $_POST['model'];
		$unit = $_POST['unit'];
		$price = $_POST['price'];
		$aname = $_POST['aname'];
		$acom = $_POST['acom'];
		$mode = $_POST['mode'];
		$amount = $_POST['amount'];
		$comment = $_POST['comment'];
		
		$price=str_replace(",", "", $price);
		$acom=str_replace(",", "", $acom);
		$amount=str_replace(",", "", $amount);
	
		$sql = mysql_query("UPDATE purchase SET Date='$date', JPCode='$jp', PHCode='$ph', Engine='$engine', Model='$model', UnitDescription='$unit', Price='$price', AgentName='$aname', AgentCommission='$acom', ModeofPayment='$mode', AmountPaid='$amount', Comments='$comment' where idtransaction='$tid'");
		
		mysql_close($dbconnect);
		
	}
?>