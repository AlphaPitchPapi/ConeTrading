<html>
	<head>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<link rel="stylesheet" href="viewcustomer.css"/>
		<script type="text/javascript" src="viewtransaction.js"></script>
		<link rel="stylesheet" href="viewtransaction.css"/>
	</head>
	<body>
		<div id="inquiry" class="inquiry">
		<a href="#close" title="Close" class="close">X</a>	
		<form id="inquiry" method="POST">
			<?php

				if (isset($_GET["tid"])){
					$tid = $_GET["tid"]; 

					include("include.php");
							
					$sql = "SELECT * FROM inquiry where idtransaction='$tid'";
					$result = mysql_query($sql);
					while(($row = mysql_fetch_array($result))) {
						$tid = $row['idtransaction'];
						$date = $row['Date'];
						$typeofinquiry = $row['TypeofInquiry'];
						$product = $row['Product'];
						$price = $row['Price'];
						$misc = $row['Miscellaneous'];
						
						$price = number_format($price);
							
						echo "
							<center> Inquiry Information </center>
							Transaction Number: <input type='text' id='tid' readonly name='tid' value='$tid'/>
							Date: <input type='date' id='date' name='date' disabled  value='$date'/>
							Type of Inquiry: <input type='text' id='type' disabled name='type' value='$typeofinquiry'/>
							Product: <input type='text' id='product' disabled name='product'  value='$product'/>
							Price: <input type='text' id='price' disabled name='price'  value='$price'/>
							Miscellaneous: <textarea id='misc' disabled name='misc'>{$misc}</textarea>
						";
						echo "<br><br>
								<input type='button' id='editinq' name='editinq' value='Edit Transaction'/>
								<input type='button' id='saveinq' name='saveinq' disabled value='Save Transaction'/>
								<input type='button' id='delinq' name='delinq' value='Delete Transaction'/>
							";
					
					}
					
				}
				
			?>
		</form>
			
		</div>

	</body>	
</html>		