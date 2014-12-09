function getID(){
	$('#addtransaction').click(function(){
		var id = $("#cid").val();
		//window.location.href = "addtransaction.php?id=" + id;
	});	
}

$(document).ready(function() {
	//DATES
	document.getElementById('inqdate').valueAsDate = new Date();
	document.getElementById('comdate').valueAsDate = new Date();
	document.getElementById('docdate').valueAsDate = new Date();
	document.getElementById('purdate').valueAsDate = new Date();
	document.getElementById('paydate').valueAsDate = new Date();	

	//VIEW DIVS ACCORDING TO TYPE OF TRANSACTION
	$("#typeoftransaction").change(function() {
		var typeoftransaction = $("#typeoftransaction option:selected").val();
		switch(typeoftransaction){
			case "Inquiry":
				$("#divinq").show();
				$("#divpur").hide();
				$("#divcom").hide();
				$("#divpay").hide();
				$("#divdoc").hide();
				break;
			case "Complaint":
				$("#divcom").show();
				$("#divpur").hide();
				$("#divinq").hide();
				$("#divpay").hide();
				$("#divdoc").hide();
				break;
			case "Payment":
				$("#divpay").show();
				$("#divpur").hide();
				$("#divinq").hide();
				$("#divcom").hide();
				$("#divdoc").hide();
				break;
			case "Document Pick-up":
				$("#divdoc").show();
				$("#divpur").hide();
				$("#divinq").hide();
				$("#divcom").hide();
				$("#divpay").hide();
				break;
			case "Purchase":
				$("#divpur").show();
				$("#divinq").hide();
				$("#divcom").hide();
				$("#divpay").hide();
				$("#divdoc").hide();
				break;
			case "Select Type of Transaction":
				$("#divpur").hide();
				$("#divinq").hide();
				$("#divcom").hide();
				$("#divpay").hide();
				$("#divdoc").hide();
				break;
			default: 
				break;
		}
	});
	
	$('#addtransaction').click(function(){
		$("#adddialog").show();
		document.getElementById("transactiondetails").reset();
		document.getElementById("payment").reset();
		document.getElementById("document").reset();
		document.getElementById("purchase").reset();
		document.getElementById("inquiry").reset();
		document.getElementById("complaint").reset();
	});
	
	//SUBMIT TRANSACTION DETAILS
	$("#transactiondetails").submit(function(e){
	       e.preventDefault();
	});
	
	//SUBMIT TYPE OF TRANSACTION DETAILS
	$("#submit").click(function(e){
		var typeoftransaction = $("#typeoftransaction option:selected").val();
		if(typeoftransaction == "Select Type of Transaction"){
			
			alert("Please select Type of Transaction to proceed")
		}
		
		else if(typeoftransaction=="Inquiry"){
			var datastring = $("#transactiondetails").serialize();
			var inqstring = $("#inquiry").serialize();
			var cid = $("#cid").val();
			var inqtype = $("#inqtype option:selected").val();
			var inqdate = $("#inqdate").val();
			var inqproduct = $("#inqproduct").val();
			if(inqdate == '' || inqtype == '' || inqproduct==''){
				alert("Please fill fields marked with *");
			}
			else{
				$.ajax({
					type: "POST",
					async: true,
					url: "savenumber.php",
					data: datastring,
					datatype: "json",
					success: function(html){
						$("#transaction").load(" #transaction");
						saveinquiry();
					},
					error: function(){
						alert("Failed saving transaction into database");
					}	
				});
				
			}
		}

		else if(typeoftransaction=="Complaint"){
			
			var datastring = $("#transactiondetails").serialize();
			var commodel = $("#commodel").val();
			var comengine = $("#comengine").val();
			var comcomplaint = $("#comcomplaint").val();
			var comdate = $("#comdate").val();
			if(commodel=='' || comengine=='' || comcomplaint=='' || comdate==''){
				alert("Please fill fields marked with *");
			}
			else{
				$.ajax({
					type: "POST",
					url: "savenumber.php",
					data: datastring,
					datatype: "json",
					success: function(html){
						$("#transaction").load(" #transaction");
						savecomplaint();
					},
					error: function(){
						alert("Failed saving transaction into database.");
					}
					});
			}
		}

		else if(typeoftransaction=="Payment"){
			var datastring = $("#transactiondetails").serialize();
			var paysales=$("#paysales").val();
			var payamount=$("#payamount").val();
			var paydate=$("#paydate").val();
			if(paysales=='' || payamount=='' || paydate==''){
				alert("Please fill fields marked with *.")
			}
			else{
				$.ajax({
					type: "POST",
					url: "savenumber.php",
					data: datastring,
					datatype: "json",
					success: function(html){
						$("#transaction").load(" #transaction");
						savepayment();
					},
					error: function(){
						alert("Failed saving transaction into database.");
					}
				});
			}
			
		}

		else if(typeoftransaction=="Document Pick-up"){
			var datastring = $("#transactiondetails").serialize();
			var docdoc = $("#docdoc").val();
			var docdate = $("#docdate").val();
			if(docdate=='' || docdoc==''){
				alert("Please fill fields marked with *.");
			}
			else{
				$.ajax({
					type: "POST",
					url: "savenumber.php",
					data: datastring,
					datatype: "json",
					success: function(html){
						$("#transaction").load(" #transaction");
						savedocument();
					},
					error: function(){
						alert("Failed saving transaction into database.");
					}	
				});
			}
		}
		
		else if(typeoftransaction=="Purchase"){
			var datastring = $("#transactiondetails").serialize();
			var purjp = $("#purjp").val();
			var purph = $("#purph").val();
			var purengine = $("#purengine").val();
			var purmodel = $("#purmodel").val();
			var purprice = $("#purprice").val();
			var puramount = $("#puramount").val();
			if(purjp=='' || purph=='' || purengine=='' || purmodel=='' || purprice=='' || puramount==''){
				alert("Please fill fields marked with *");
			}
			
			else{
				$.ajax({
				type: "POST",
				url: "savenumber.php",
				data: datastring,
				datatype: "json",
				success: function(html){
					$("#transaction").load(" #transaction");
					savepurchase();
				},
				error: function(){
					alert("Failed saving transaction into database.");
				}	
			});
			}
		}
	});
});

//SAVE PURCHASE
function savepurchase(){
	$("#transaction").load(" #transaction");
	var purid = $('#transactionlist tr:last').find('td:first').text();
	var purmode = $("#purmode option:selected").val();
	var purprice = $("#purprice").val();
	var puramount = $("#puramount").val();
	var datastring = $("#divpur #purchase").serialize();
	$.ajax({
		type: "POST",
		async: true, 
		url: "savepurchase.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction added to database.");
			$("#adddialog").hide();
			$("#divpur").hide();
			document.getElementById("purchase").reset();
			document.getElementById("transactiondetails").reset();
			$("#transaction").load(" #transaction");
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}	
	});
	$("#transaction").load(" #transaction");
}

//SAVE PAYMENT
function savepayment(){
	$("#transaction").load(" #transaction");
	var payid = $('#transactionlist tr:last').find('td:first').text();
	var paymode = $("#paymode option:selected").val();
	var datastring = $("#divpay #payment").serialize();
	$.ajax({
		type: "POST",
		async: true, 
		url: "savepayment.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction added to database.");
			$("#adddialog").hide();
			$("#divpay").hide();
			document.getElementById("payment").reset();
			document.getElementById("transactiondetails").reset();
			$("#transaction").load(" #transaction");
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}
	});
	$("#transaction").load(" #transaction");
}

//SAVE COMPLAINT
function savecomplaint(){
	$("#transaction").load(" #transaction");
	var comid = $('#transactionlist tr:last').find('td:first').text();
	var datastring = $("#divcom #complaint").serialize();
	$.ajax({
		type: "POST",
		async: true, 
		url: "savecomplaint.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction added to database.");
			$("#adddialog").hide();
			$("#divcom").hide();
			document.getElementById("complaint").reset();
			document.getElementById("transactiondetails").reset();
			$("#transaction").load(" #transaction");
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}
	});
	$("#transaction").load(" #transaction");
}

//SAVE INQUIRY
function saveinquiry(){
	$("#transaction").load(" #transaction");
	var inqid = $('#transactionlist tr:last').find('td:first').text();
	var inqtype = $("#inqtype option:selected").val();
	var datastring = $("#divinq #inquiry").serialize();
	$.ajax({
		type: "POST",
		async: true,
		url: "saveinquiry.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction added to database.");
			$("#adddialog").hide();
			$("#divinq").hide();
			document.getElementById("inquiry").reset();
			document.getElementById("transactiondetails").reset();
			$("#transaction").load(" #transaction");
		},
		error: function(){
			alert("Failed saving transaction to database.");
		}	
	});
	$("#transaction").load(" #transaction");
}

//SAVE DOCUMENT
function savedocument(){
	$("#transaction").load(" #transaction");
	var docid = $('#transactionlist tr:last').find('td:first').text();
	var datastring = $("#divdoc #document").serialize();
	$.ajax({
		type: "POST",
		async: true,
		url: "savedocument.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction added to database.");
			$("#adddialog").hide();
			$("#divdoc").hide();
			document.getElementById("document").reset();
			document.getElementById("transactiondetails").reset();
			$("#transaction").load(" #transaction");
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}
	});
	$("#transaction").load(" #transaction");
}