<!DOCTYPE html>
<html>
	<head>
		<title> C-One Trading Corporation : Customer Profile</title>
		<link rel="stylesheet" href="viewcustomer.css"/>
		<link rel="stylesheet" href="viewtransaction.css"/>
		<link rel="stylesheet" href="addtransaction.css"/>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
  		<script type="text/javascript" src="cusphoto.js"></script>
		<script type="text/javascript" src="viewtransaction.js"></script>
		<script type="text/javascript" src="addtransaction.js"></script>
		<script type="text/javascript" src="viewcustomer.js"></script>
		<script type="text/javascript" src="deletecustomer.js"></script>
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.form.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	</head>
	
	<body>
		<!--CSS MENU-->
		<div id="cssmenu" class="cssmenu">	
			<ul type="none">
				<li><a href="index.php"><button id="honembutton" name="homebutton">Home</button></a></li>
			</ul>
	   	</div>
	   	
	   	<!--VIEW INQUIRY MODAL DIALOG-->
	   	<div id="viewinq" class="viewinq">
	   		<div>
	   			<a href="#close" title="Close" class="close">X</a>	
	   			
	   		</div>
	   	</div>
	   	
	   	<!--VIEW COMPLAINT MODAL DIALOG-->
	   	<div id="viewcom" class="viewcom">
	   		<div>
	   			<a href="#close" title="Close" class="close">X</a>	
	   			
	   		</div>
	   	</div>

		<!--VIEW PURCHASE MODAL DIALOG-->
		<div id="viewpur" class="viewpur">
	   		<div>
	   			<a href="#close" title="Close" class="close">X</a>	
	   			
	   		</div>
	   	</div>
	   	
	   	<!--VIEW PAYMENT DIALOG-->
	   	<div id="viewpay" class="viewpay">
	   		<div>
	   			<a href="#close" title="Close" class="close">X</a>	
	   			
	   		</div>
	   	</div>
		
		<!--VIEW DOCUMENT DIALOG-->
		<div id="viewdoc" class="viewdoc">
	   		<div>
	   			<a href="#close" title="Close" class="close">X</a>	
	   			
	   		</div>
	   	</div>
				
		<!--ADD TRANSACTION-->
		<div id="adddialog" class="adddialog">
			<div>
				<a href="#close" title="Close" class="close">X</a>	
					<?php
						echo "<form id='transactiondetails' name='transactiondetails' method='post'>";
							if (isset($_GET["id"])) {
								$cid = $_GET["id"];
								
								echo "Transaction Number: <input type='text' id='tid' name='tid' disabled/>
								Customer ID: <input type='text' id='cid' value='$cid' name='cid' readonly>
								Type of Transaction: <select id='typeoftransaction' name='typeoftransaction'>
									<option value='Select Type of Transaction'> Select Type of Transaction </option>
									<option value='Inquiry'> Inquiry </option>
									<option value='Purchase'> Purchase </option>
									<option value='Payment'> Payment </option>
									<option value='Complaint'> Complaint </option>
									<option value='Document Pick-up'> Document Pick-up </option>
								</select>";
							}
						echo "</form>";
						
						echo "<br><div id='divinq' style='display: none;'>
								 <form id='inquiry' method='post'>
								 	<legend> Inquiry Information </legend>
									<input type='text' readonly id='inqid' hidden name='inqid'/>
									Date: * <input type='date' id='inqdate' name='inqdate'/>
									Type of Inquiry: * <select id='inqtype' name='inqtype'>
														<option> </option>
														<option> Repair </option>
														<option> Rentals </option>
														<option> Steel Products </option>
														<option> Trucks and Equipments </option> 
													 </select>
									Product: * <input type='text' id='inqproduct' name='inqproduct'/>
									Price: <input type='text' id='inqprice' name='inqprice'/>
									Miscellaneous: <textarea id='inqmisc' name='inqmisc'> </textarea>							
								 </form>
							 </div>";
						
						echo "<br> <div id='divcom'style='display: none;'>
								<form id='complaint' name='complaint' method='POST'>
									<legend>Complaint Information</legend>
									<input type='text' readonly hidden id='comid' name='comid'/>
									Date: * <input type='date' id='comdate' name='comdate'/>
									Model: *<input type='text' id='commodel' name='commodel'/>
									Engine: *<input type='text' id='comengine' name='comengine'/>
									Unit Description: <textarea id='comunit' name='comunit'> </textarea>
									Complaint: *<textarea id='comcomplaint' name='comcomplaint'> </textarea>
									Comments: <textarea id='comcomment' name='comcomment'> </textarea>
									Photo: <input type='file' id='comphoto' name='comphoto'/>
								</form>
							  </div>";
							  
						echo "<br> <div id='divpay'style='display: none;'>
								<form id='payment' name='payment' method='POST'>
									<legend> Payment Information </legend>
									<input type='text' hidden readonly id='payid' name='payid'/>
									Date: *<input type='date' id='paydate' name='paydate'/>
									Sales Contract Number: * <input type='text' id='paysales' name='paysales'/>
									Mode of Payment: <select name='paymode' id='paymode'>
							                                <option> </option>
							                                <option> Cash </option>
							                                <option> Check </option>
							                                <option> Finance </option>
							                                <option> PDC </option> 
							                            </select>
							        Amount: *<input type='text' id='payamount' name='payamount'/>
							        PDC Details: <textarea id='paypdc' name='paypdc'> </textarea>
								</form>
							</div>";
							
						echo "<br> <div id='divdoc'style='display: none;'>
								<form id='document' name='document' method='POST'>
									<legend> Document Information </legend>
									<input type='text' hidden readonly id='docid' name='docid'/>
									Date: *<input type='date' id='docdate' name='docdate'/>
									Type of Document: *<input type='text' id='docdoc' name='docdoc'/>
								</form>
							</div>";
							
						echo "<br> <div id='divpur'style='display: none;'>
								<form id='purchase' name='purchase' method='POST'>
									<legend> Purchase Information </legend>
								 	 <input type='text' hidden readonly id='purid' name='purid'/> 
							         Date: *               <input type='date' id='purdate' name='purdate'/> 
							         JP Code: *           <input type='text' id='purjp' name='purjp'/> 
							         PH Code: *           <input type='text' id='purph' name='purph'/> 
							         Engine: *            <input type='text' id='purengine' name='purengine'/> 
							         Model: *             <input type='text' id='purmodel' name='purmodel'/> 
							         Unit Description:   <textarea id='purunit' name='purunit'> </textarea> 
							         Price: *             <input type='text' id='purprice' name='purprice'/> 
							         Agent Name:         <input type='text' id='puragentname' name='puragentname'/> 
							         Agent Commission:   <input  type='text' id='purcom' name='purcom'/>  
							         Mode of Payment:    <select id='purmode' name='purmode'> 
							                                    <option> </option>
							                                    <option> Cash </option>
							                                    <option> Check </option>
							                                    <option> Finance </option>
							                                    <option> PDC </option> 
							                                </select>
							         Amount Paid: *       <input type='text' id='puramount' name='puramount'/> 
							         Comments:           <textarea id='purcomment' name='purcomment'> </textarea>  
							</form>
							</div>";
						
						echo "<p><input type='submit' id='submit' name='submit' class='submit' value='Submit Form'/></p>";
					?>
			</div>
		</div>
		
		
		<!--VIEW CUSTOMER PROFILE-->
		<div id="customerdiv" class="customerdiv">
			 <button id="edit" name="edit"> Edit Profile </button> 
			 <button id="saveedit" name="saveedit"> Save Profile </button> 
			 <button id="delete" name="delete" > Delete Profile </button> 
			 <div id="profile" class="profile">
				<center><font face="arial" size="50px"> Customer Profile </font></center>
				
				<!--UPLOAD PHOTO-->
				<div id='upload-area'>
					<form id="uploadimage" action="" method="post" enctype="multipart/form-data">
						<div id="image_preview"><img id="previewing" src="images/photo.jpg" height="100px" width="100px"/></div>
						
						<div id="selectImage">
							<label>Select Your Image</label><br/>
							<input type="file" name="file" id="file"/><br> <br>
							<input type="submit" value="Upload" class="submit" />
						</div>
					</form>
				</div>
				
				<form id="customer" name="customer">
					<?php
						
						 if (isset($_GET["id"])){
							
							$cid = $_GET["id"]; 
							include("include.php");
							
							$sql = "SELECT * from customer where idcustomer='$cid'";
							$result = mysql_query($sql);
							while(($row = mysql_fetch_array($result))) {
								$cid = $row['idcustomer'];
								$typeofcustomer = $row['TypeofCustomer'];
								$fname = $row['FamilyName'];
								$gname = $row['GivenName'];
								$mname = $row['middlename'];
								$cname = $row['CompanyName'];
								$tin = $row['TIN'];
								$typeofcompany = $row['TypeofCompany'];
								$mail1 = $row['MailingAdd1'];
								$mailpro = $row['MailingProvince'];
								$mailcity = $row['MailingCity'];
								$mailmun = $row['MailingMunicipality'];
								$mailzip = $row['MailingZipCode'];
								$res1 = $row['ResidentialAdd1'];
								$respro = $row['ResidentialProvince'];
								$rescity = $row['ResidentialCity'];
								$resmun = $row['ResidentialMunicipality'];
								$reszip = $row['ResidentialZipCode'];
								$com1 = $row['CompanyAdd1'];
								$compro = $row['CompanyProvince'];
								$comcity = $row['CompanyCity'];
								$commun = $row['CompanyMunicipality'];
								$comzip = $row['CompanyZipCode'];
								$tel = $row['TelephoneNumber'];
								$mobile = $row['MobileNumber'];
								$fax = $row['FaxNumber'];
								$email = $row['EmailAddress'];
								$fname1 = $row['FamilyName1'];
								$gname1 = $row['GivenName1'];
								$mname1 = $row['Middlename1'];
								$contact1 = $row['Contact1'];
								$fname2 = $row['FamilyName2'];
								$gname2 = $row['GivenName2'];
								$mname2 = $row['Middlename2'];
								$contact2 = $row['Contact2'];
								$fname3 = $row['FamilyName3'];
								$gname3 = $row['GivenName3'];
								$mname3 = $row['Middlename3'];
								$contact3 = $row['Contact3'];
								
								echo "Customer Number: " . "<input type='text' readonly id='cid' name='cid' value='$cid'/>";
								echo "Type of Customer: " . "<input type='text' id='typeofcustomer' name='typeofcustomer' value='$typeofcustomer'/>";
								echo "<fieldset class='personal'>
										<legend> Personal Information </legend>
										Family Name: " . "<input type='text' id='fname' name='fname' value='$fname'/>
										Given Name: " . "<input type='text' id='gname' name='gname' value='$gname'/> 
										Middle Name: " . "<input type='text' id='mname' name='mname' value='$mname'/>
									</fieldset>";
								echo "<fieldset class='company'>
										<legend> Company Information </legend>
										Company Name: " . "<input type='text' id='cname' name='cname' value='$cname'/>
										TIN: " . "<input type='text' id='tin' name='tin' value='$tin'/>
										Type of Company:  " . "<input type='text' id='typeofcompany' name='typeofcompany' value='$typeofcompany'/>
									</fieldset>";
									
								echo "<fieldset class='contact'>
										<legend>Contact Information</legend>
										Telephone Number: <input type='text' id='tel' name='tel'  value='$tel'/>
										Mobile Number: <input type='text' id='mobile' name='mobile' value='$mobile'/>
										Fax Number: <input type='text' id='fax' name='fax' value='$fax'/>
										E-mail Address: <input type='text' id='email' name='email' value='$email'/>
									</fieldset>";	
									
								echo "<fieldset class='mailing'>
										<legend> Mail Address Information </legend>
										Mail Address Line 1:  " . "<input type='text' id='mail1' name='mail1' value='$mail1'/>
										Mail Province: <input type='text' id='mailpro' value='$mailpro' name='mailpro'>
										Municipality: <input type='text' id='mailmun' name='mailmun' value='$mailmun'>							
										City: <input type='text' id='mailcity' name='mailcity' value='$mailcity'>
										Zip Code: <input type='text' id='mailzip' name='mailzip' value='$mailzip'>
									</fieldset>";
									
								echo "<fieldset class='residential'>
								<legend> Residential Address </legend>
								Residential Address Line 1: <input type='text' id='res1' name='res1'  value='$res1'/>
								Residential Province: <input type='text' id='respro' name='respro'  value='$respro'>
								Residential Municipality: <input type='text' id='resmun' name='resmun' value='$resmun'>
								Residential City: <input type='text' id='rescity' name='rescity' value='$rescity'>
								Residential Zip Code: <input type='text' id='reszip' name='reszip' value='$reszip'>
						</fieldset>";
					echo "<fieldset class='companyadd'>
							<legend> Company Address </legend>
							Company Address Line 1: <input type='text' id='com1' name='com1' value='$com1'/>
							Company Province: <input type='text' id='compro' name='compro' value='$compro'>
							Company Municipality: <input type='text' id='commun' name='commun' value='$commun'/>
							Company City: <input type='text' id='comcity' name='comcity'  value='$comcity'>
							Company Zip Code: <input type='text' id='comzip' name='comzip'  value='$comzip'/>
						</fieldset>";
						
						echo "<fieldset class='representative'>
							<legend>Representative Information</legend>
							Family Name 1: <input type='text' id='fname1' name='fname1' value='$fname1'/>
							Given Name 1: <input type='text' id='gname1' name='mname1' value='$gname1'/>
							Middle Name 1: <input type='text' id='mname1' name='mname1' value='$mname1'/>
							Contact Information 1: <input type='text'' id='contact1'' name='contact1' value='$contact1'/>
							Family Name 2: <input type='text' id='fname2' name='fname2'  value='$fname2'/>
							Given Name 2: <input type='text' id='gname2' name='mname2' value='$gname2'/>
							Middle Name 2: <input type='text' id='mname2' name='mname2' value='$mname2'/>
							Contact Information 2: <input type='text' id='contact2' name='contact2' value='$contact2'/>
							Family Name 3: <input type='text' id='fname3' name='fname3' value='$fname'3/>
							Given Name 3: <input type='text' id='gname3' name='mname3' value='$gname3'/>
							Middle Name 3: <input type='text' id='mname3' name='mname3' value='$mname3'/>
							Contact Information 3: <input type='text' id='contact3' name='contact3' value='$contact3'/>
						</fieldset>";
													
							}
						}	
					?>
				
				</form>
			</div>
			<br>
			
		</div>
	
		<!--VIEW TRANSACTIONS-->
		<div id="transactiondiv" class="transactiondiv">
			 <a href="#adddialog"><button name="addtransaction" id="addtransaction"> Add Transaction </button> </a>
			<div id="transaction" class="transaction">
				<?php
					if (isset($_GET["id"])) {
						$cid = $_GET["id"]; 
						include("include.php");
						
						$sql2 = "SELECT * from transaction where idcustomer='$cid'";
						$result2 = mysql_query($sql2);
						
						echo "<table width = '100%', border = '1' id='transactionlist'>\n";
						echo "<b><tr > <th style='display:none'>Transaction ID </th>
							<th style='display:none'> Customer ID </th>
							<th width ='25%'> Date </th>
							<th>Type</th>
							<th>Summary </th>
							<th>Option </th>
							</tr>";
							
						while(($row2 = mysql_fetch_assoc($result2))!==FALSE){
							$typetran = $row2['TypeofTransaction'];
							$id = $row2['idTransaction'];
							//VIEW WITH SUMMARY
							//VIEW INQUIRY
							if($typetran=="Inquiry"){
								$sqlinq = "SELECT Date, TypeofInquiry, Product from inquiry where idtransaction='$id'";
								$resultinq = mysql_query($sqlinq);
								
								while(($rowinq=mysql_fetch_assoc($resultinq))!==FALSE){
									echo "<tr>
											<td style='display:none'>{$row2['idTransaction']}</td>
											<td id='cidn' style='display:none' >{$row2['idcustomer']}</td>
											<td>{$rowinq['Date']}</td>
											<td>{$row2['TypeofTransaction']}</td>
											<td>Type of Inquiry: {$rowinq['TypeofInquiry']}<br/>Product: {$rowinq['Product']} </td>
											<td> <a href='#viewinq'> <button name='viewinquiry' id='viewinquiry' onclick='viewinquiry()'>  View </button></a></td>
										 </tr>";
								}
							}
							
							//VIEW COMPLAINT
							else if($typetran=="Complaint"){
								$sqlcom = "SELECT Date, Model, Complaint from complaint where idtransaction='$id'";
								$resultcom = mysql_query($sqlcom);
								
								while(($rowcom=mysql_fetch_assoc($resultcom))!==FALSE){
									echo "<tr> 
											<td style='display:none'>{$row2['idTransaction']}</td>
											<td id='cidn' style='display:none' >{$row2['idcustomer']}</td>
											<td>{$rowcom['Date']}</td>
											<td>{$row2['TypeofTransaction']}</td>
											<td>Model: {$rowcom['Model']}<br/>Complaint: {$rowcom['Complaint']} </td>
											<td> <a href='#viewcom'> <button name='viewcomplaint' id='viewcomplaint' onclick='viewcomplaint()'>  View </button></a></td>
										</tr>";
								}
							}
							
							//VIEW PURCHASE
							else if($typetran=="Purchase"){
								$sqlpur = "SELECT Date, PHCode, JPCode, Model, Engine from purchase where idtransaction='$id'";
								$resultpur = mysql_query($sqlpur);
								while(($rowpur=mysql_fetch_assoc($resultpur))!==FALSE){
									echo "<tr> 
											<td style='display:none'>{$row2['idTransaction']}</td>
											<td id='cidn' style='display:none' >{$row2['idcustomer']}</td>
											<td>{$rowpur['Date']}</td>
											<td>{$row2['TypeofTransaction']}</td>
											<td>PH Code: {$rowpur['PHCode']}<br/>JP Code: {$rowpur['JPCode']}<br/>Model: {$rowpur['Model']}<br/>Engine: {$rowpur['Engine']} </td>
											<td> <a href='#viewpur'> <button name='viewpurchase' id='viewpurchase' onclick='viewpurchase()'>  View </button></a></td>
										 </tr>";
									
								}
							}
							
							//VIEW PAYMENT
							else if($typetran=="Payment"){
								$sqlpay = "SELECT Date, SalesContractNumber, Amount from payment where idtransaction='$id'";
								$resultpay = mysql_query($sqlpay);
								
								while(($rowpay=mysql_fetch_assoc($resultpay))!==FALSE){
									echo "<tr> 
											<td style='display:none'>{$row2['idTransaction']}</td>
											<td id='cidn' style='display:none' >{$row2['idcustomer']}</td>
											<td>{$rowpay['Date']}</td>
											<td>{$row2['TypeofTransaction']}</td>
											<td>Sales Contract Number: {$rowpay['SalesContractNumber']}<br/>Amount Paid: P {$rowpay['Amount']} </td>
											<td> <a href='#viewpay'> <button name='viewpayment' id='viewpayment' onclick='viewpayment()'>  View </button></a></td>
										 </tr>";
								}
							}
							
							//VIEW DOCUMENT
							else if($typetran=="Document Pick-up"){
								$sqldoc = "SELECT Date, TypeofDocument from document where idtransaction='$id'";
								$resultdoc = mysql_query($sqldoc);
								
								while(($rowdoc=mysql_fetch_assoc($resultdoc))!==FALSE){
									echo "<tr> 
											<td style='display:none'>{$row2['idTransaction']}</td>
											<td id='cidn' style='display:none' >{$row2['idcustomer']}</td>
											<td>{$rowdoc['Date']}</td>
											<td>{$row2['TypeofTransaction']}</td>
											<td>Type of Document: {$rowdoc['TypeofDocument']} </td>
											<td> <a href='#viewdoc'> <button name='viewdocument' id='viewdocument' onclick='viewdocument()'>  View </button></a></td>
										 </tr>";
								}
							}
						}
							
						echo "</table>";
						
					}
					?>
					<br>
					
				</div>
			
		</div>
	
	</body>
	
</html>