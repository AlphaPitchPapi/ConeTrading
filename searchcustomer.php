<!DOCTYPE HTML>
<html>
	<head>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script type="text/javascript" src="searchcustomer.js"></script>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.form.js"></script>
	</head>
	
	<body>
		<?php
		
			//if(!empty($_POST)) {
				$q=$_REQUEST["q"]; $hint="";
				include("include.php");
				// lookup all hints from array if $q is different from "" 
				if ($q !== "") {
					
				  	$sqlindividual="SELECT idcustomer, FamilyName, GivenName, MailingCity FROM customer WHERE (TypeofCustomer='Individual') AND (FamilyName LIKE '%".$q."%' OR GivenName LIKE '%".$q."%')";
					$resultindividual = mysql_query($sqlindividual);
					$rowind = mysql_num_rows($resultindividual);
					if(mysql_num_rows($resultindividual)>0){
						echo "<div id='individualdiv'>";
							/* echo "<table id='searchind'>
									<tr>
										<td> Search keyword: $q</td>
										<td> Number of Results: $rowind </td>
									</tr>									
								  </table><br>"; */
							/*echo "Search Results: " . mysql_num_rows($resultindividual);*/
					 		echo "<table border='1' id='individual'>
							<tr>
								<th style='display:none'>Customer ID</th>
								<th>Family Name</th>
								<th>Given Name</th>
								<th>Mailing City</th>
							</tr>";
							while(($rowindividual = mysql_fetch_assoc($resultindividual))!==FALSE) {
								echo "<tr onclick='rownumberindividual()'>";
						  		echo "<td id ='cid' style='display:none'>"  . $rowindividual['idcustomer'] . "</a></td>";
						  		echo "<td class='red'> " . $rowindividual['FamilyName'] . " </td>";
						  		echo "<td class='red'> " . $rowindividual['GivenName'] . " </td>";
						  		echo "<td class='red'> " . $rowindividual['MailingCity'] . " </td>";
						  		echo "</tr>";
							}
							echo "<table>";
						echo "</div>";
					}
					else {
						echo "<table id='indresults'>
								<tr onclick='addnewcustomer()'>
									<td id='tdaddind'> No INDIVIDUAL customer found! Click to ADD customer </td>
								</tr>
							 </table>";
					}
					
					$sqlcorporate = "SELECT idcustomer, CompanyName, FamilyName1, GivenName1 FROM customer where (TypeofCustomer='Corporate') AND (FamilyName1 LIKE '%".$q."%' OR GivenName1 LIKE '%".$q."%' OR CompanyName LIKE '%".$q."%')";
					$resultcorporate = mysql_query($sqlcorporate);
					$rowcor = mysql_num_rows($resultcorporate);
					if(mysql_num_rows($resultcorporate)>0){
						echo "<div id='corporatediv'>";
							/* echo "<table id='searchcor'>
									<tr>
										<td> Search keyword: $q</td>
										<td> Number of Results: $rowcor </td>
									</tr>									
								  </table><br>"; */
							/*echo "Search Results: " . mysql_num_rows($resultcorporate);*/
					 		echo "<table border='1' id='corporate'>
							<tr>
							<th style='display:none'>Customer ID</th>
							<th>Company Name</th>
							<th>Rep. Family Name</th>
							<th>Rep. Given Name</th>
							</tr>";
							while(($rowcorporate = mysql_fetch_assoc($resultcorporate))!==FALSE) {
								echo "<tr onclick='rownumbercorporate()'>";
						  		echo "<td id ='cid' style='display:none'>"  . $rowcorporate['idcustomer'] . "</a></td>";
						  		echo "<td class='red'> " . $rowcorporate['CompanyName'] . " </td>";
						  		echo "<td class='red'> " . $rowcorporate['FamilyName1'] . " </td>";
						  		echo "<td class='red'> " . $rowcorporate['GivenName1'] . " </td>";
						  		echo "</tr>";
							}
							echo "<table>";
						echo "</div>";
					}	
					else {
						echo "<table id='corresults'>
								<tr onclick='addnewcustomer()'>
									<td id='tdaddind'> No CORPORATE customer found! Click to ADD customer </td>
								</tr>
							 </table>";
					}
				}
			
		?>
	</body>
</html>