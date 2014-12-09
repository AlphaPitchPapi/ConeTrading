<?php
	include("include.php");
	
	if(isset($_POST['purid'])){
		
		$result = mysql_query("SELECT MAX(idtransaction) from transaction");
		$row = mysql_fetch_row($result);
		$purid = $row[0];
		$purdate = $_POST['purdate'];
		$purjp = $_POST['purjp'];
		$purph = $_POST['purph'];
		$purengine = $_POST['purengine'];
		$purmodel = $_POST['purmodel'];
		$purunit = $_POST['purunit'];
		$purprice = $_POST['purprice'];
		$puragentname = $_POST['puragentname'];
		$purcom = $_POST['purcom'];
		$purmode = $_POST['purmode'];
		$puramount = $_POST['puramount'];
		$purcomment = $_POST['purcomment'];
		
		$purprice=str_replace(",", "", $purprice);
		$purcom=str_replace(",", "", $purcom);
		$puramount=str_replace(",", "", $puramount);
		
		$sql = mysql_query("INSERT INTO purchase VALUES ('$purid', '$purdate', '$purjp', '$purph', '$purengine', '$purmodel', '$purunit', '$purprice', '$puragentname', '$purcom', '$purmode', '$puramount', '$purcomment')");
	
	}
?>