<html>
	<head>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<script type="text/javascript" src="viewtransaction.js"></script>
		<link rel="stylesheet" href="viewtransaction.css"/>
	</head>
	<body>
		<div id="document" class="document">
		<a href="#close" title="Close" class="close">X</a>
		<form id="document" method="POST">
				<?php

					if (isset($_GET["tid"])){
						$tid = $_GET["tid"]; 

						include("include.php");
								
						$sql = "SELECT * FROM document where idtransaction='$tid'";
						$result = mysql_query($sql);
						while(($row = mysql_fetch_array($result))) {
							$tid = $row['idtransaction'];
							$date = $row['Date'];
							$type = $row['TypeofDocument'];
						
							echo "
								<center> Document Information </center>
								Transaction Number: <input type='text' readonly id='tid' name='tid' value='$tid'/>
								Date: <input type='date' id='date' disabled name='date' disabled value='$date'/>
								Type of Document: <input type='text' disabled id='type' disabled name='type' value='$type'/>	
							";
							echo "<br><br>
								<input type='button' id='editdoc' name='editdoc' value='Edit Transaction'/>
								<input type='button' id='savedoc' name='savedoc' disabled value='Save Transaction'/>
								<input type='button' id='deldoc' name='deldoc' value='Delete Transaction'/>
							";
						
						}
					
					}
					
				?>
				</form>
			
		</div>

	</body>	
</html>		