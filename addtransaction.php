<?php
	echo "<form id='transactiondetails' name='transactiondetails' method='post'>";
	if (isset($_GET["id"])) {
		$cid = $_GET["id"];
		
		echo "Transaction Number: <input type='text' id='tid' name='tid' disabled/>
		Customer ID: <input type='text' id='cid' value='$cid' name='cid' readonly>
		Type of Transaction: <select id='typeoftransaction' name='typeoftransaction'>
			<option> Select Type of Transaction </option>
			<option value='Inquiry'> Inquiry </option>
			<option> Purchase </option>
			<option> Payment </option>
			<option> Complaint </option>
			<option> Document Pick-up </option>
		</select>
		</form>";
	}
?>
	
