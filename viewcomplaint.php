<html>
	<head>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
		<link rel="stylesheet" href="viewtransaction.css"/>
  		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<script type="text/javascript" src="viewtransaction.js"></script>		
	</head>
	<body>
		<div id="complaint" class="complaint">
		<a href="#close" title="Close" class="close">X</a>
		<form id="complaint" method="POST">
				<?php

					if (isset($_GET["tid"])){
						$tid = $_GET["tid"]; 

						include("include.php");
								
						$sql = "SELECT * FROM complaint where idtransaction='$tid'";
						$result = mysql_query($sql);
						while(($row = mysql_fetch_array($result))) {
							$tid = $row['idtransaction'];
							$date = $row['Date'];
							$model = $row['Model'];
							$engine = $row['Engine'];
							$unit = $row['UnitDescription'];
							$complaint = $row['Complaint'];
							$comment = $row['Comments'];
							$photo = $row['Photo'];
						
							echo "
								<center> Complaint Information </center>
								Transaction Number: <input type='text' readonly id='tid' name='tid' value='$tid'/>
								Date: <input type='date' id='date' name='date' disabled value='$date'/>
								Model: <input type='text' id='model' name='model' disabled value='$model'/>
								Engine: <input type='text' id='engine' name='engine' disabled value='$engine'/>
								Unit Description: <textarea id='unit' name='unit' disabled> {$unit} </textarea>
								Complaint: <textarea id='complaint' name='complaint' disabled> {$complaint} </textarea>
								Comments: <textarea id='comment' name='comment' disabled> {$comment} </textarea>
								Photo: 
								
							";
							echo "<br><br>
								<input type='button' id='editcom' name='editcom' value='Edit Transaction'/>
								<input type='button' id='savecom' name='savecom' disabled value='Save Transaction'/>
								<input type='button' id='delcom' name='delcom' value='Delete Transaction'/>
							";
						
						}
					
					}
					
				?>
			</form>
			
		</div>

	</body>	
</html>		