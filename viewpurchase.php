<html>
	<head>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<link rel="stylesheet" href="viewtransaction.css"/>
		<script type="text/javascript" src="viewtransaction.js"></script>
		<link rel="stylesheet" href="viewtransaction.css"/>
	</head>
	<body>
		<div id="purchase" class="purchase">
		<a href="#close" title="Close" class="close">X</a>
		<form id="purchase" method="POST">

				<?php

					if (isset($_GET["tid"])){
						$tid = $_GET["tid"]; 

						include("include.php");
								
						$sql = "SELECT * FROM purchase where idtransaction='$tid'";
						$result = mysql_query($sql);
						while(($row = mysql_fetch_array($result))) {
							$tid = $row['idtransaction'];
							$date = $row['Date'];
							$jp = $row['JPCode'];
							$ph = $row['PHCode'];
							$engine = $row['Engine'];
							$model = $row['Model'];
							$unit = $row['UnitDescription'];
							$price = $row['Price'];
							$aname = $row['AgentName'];
							$acom = $row['AgentCommission'];
							$mode = $row['ModeofPayment'];
							$amount = $row['AmountPaid'];
							$comments = $row['Comments'];
						
							$price = number_format($price);
							$acom = number_format($acom);
							$amount = number_format($amount);
						
							echo "
								<center> Purchase Information </center>
								Transaction Number: <input type='text' readonly id='tid' name='tid' value='$tid'/>
								Date: <input type='date' id='date' name='date' disabled value='$date'/>
								JP Code: <input type='text' id='jp' name='jp' disabled value='$jp'/>
								PH Code: <input type='text' id='ph' name='ph' disabled value='$ph'/>
								Engine: <input type='text' id='engine' name='engine' disabled value='$engine'/>
								Model: <input type='text' id='model' name='model' disabled value='$model'/>
								Unit Description: <textarea id='unit' disabled name='unit'>{$unit}</textarea>
								Price: <input type='text' id='price' name='price' disabled value='$price'/>
								Agent Name: <input type='text' id='aname' name='aname' disabled value='$aname'/>
								Agent Commission: <input type='text' id='acom' name='acom' disabled value='$acom'/>
								Mode of Payment: <input type='text' id='mode' name='mode' disabled value='$mode'/>
								Amount Paid: <input type='text' id='amount' name='amount' disabled value='$amount'/>
								Comments: <textarea id='comments' name='comments' disabled >{$comments}</textarea>
							
							";
							echo "<br><br>
								<input type='button' id='editpur' name='editpur' value='Edit Transaction'/>
								<input type='button' id='savepur' name='savepur' disabled value='Save Transaction'/>
								<input type='button' id='delpur' name='delpur' value='Delete Transaction'/>
							";
						
						}
						
					}
					
				?>
			</form>
			
		</div>

	</body>	
</html>		