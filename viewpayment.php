<html>
	<head>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<script type="text/javascript" src="viewtransaction.js"></script>	
		<link rel="stylesheet" href="viewtransaction.css"/>	
	</head>
	<body>
		<div id="payment" class="payment">
		<a href="#close" title="Close" class="close">X</a>
		<form id="payment" method="POST">
				<?php

					if (isset($_GET["tid"])){
						$tid = $_GET["tid"]; 

						include("include.php");
								
						$sql = "SELECT * FROM payment where idtransaction='$tid'";
						$result = mysql_query($sql);
						while(($row = mysql_fetch_array($result))) {
							$tid = $row['idtransaction'];
							$date = $row['Date'];
							$sales = $row['SalesContractNumber'];
							$mode = $row['ModeofPayment'];
							$amount = $row['Amount'];
							$pdc = $row['PDCDetails'];
							
							$amount = number_format($amount);
						
							echo "
								<center> Payment Information </center>
								Transaction Number: <input type='text' readonly id='tid' name='tid' value='$tid'/>
								Date: <input type='date' id='date' name='date' disabled value='$date'/>
								Sales Contract Number: <input type='text' name='sales' disabled id='sales' value='$sales'/>
								Mode of Payment: <input type='text' name='mode' id='mode' disabled value='$mode'/>
								Amount Paid: <input type='text' name='amount' id='amount' disabled value='$amount'/>
								PDC Details: <textarea id='pdc' name='pdc' disabled> {$pdc}</textarea>
							";
							echo "<br><br>
								<input type='button' id='editpay' name='editpay' value='Edit Transaction'/>
								<input type='button' id='savepay' name='savepay' disabled value='Save Transaction'/>
								<input type='button' id='delpay' name='delpay' value='Delete Transaction'/>
							";
						
						}
					
					}
					
				?>
			</form>
			
		</div>

	</body>	
</html>		