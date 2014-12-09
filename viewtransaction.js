$(document).ready(function() {
	 //DOCUMENT BUTTONS
	$('#editdoc').click(function(){
		editdoc();	
	});
	$('#savedoc').click(function(){
		savedoc();	
	});
	$('#deldoc').click(function(){
		deldoc();	
	});

	//INQUIRY BUTTONS
	$('#editinq').click(function(){
		editinq();	
	});
	$('#saveinq').click(function(){
		saveinq();	
	});
	$('#delinq').click(function(){
		delinq();	
	});
	
	//COMPLAINT BUTTONS
	$('#editcom').click(function(){
		editcom();	
	});
	$('#savecom').click(function(){
		savecom();	
	});
	$('#delcom').click(function(){
		delcom();	
	});

	//PAYMENT BUTTONS
	$('#editpay').click(function(){
		editpay();	
	});
	$('#savepay').click(function(){
		savepay();	
	});
	$('#delpay').click(function(){
		delpay();	
	});
	
	//PURCHASE BUTTONS
	$('#editpur').click(function(){
		editpur();	
	});
	$('#savepur').click(function(){
		savepur();	
	});
	$('#delpur').click(function(){
		delpur();	
	}); 
	
});

//VIEW COMPLAINT
function viewcomplaint(){
	$('#transactionlist').find('tr').click( function(){
		//GET IDTRANSACTION AND TYPE OF TRANSACTION
		var tid = $(this).find('td:first').text();
		var cid = $('input[name=cid]').val();
		 $('#viewcom').load("viewcomplaint.php?" + $.param({tid: tid}));
		 $("#viewcom").show();
	});
}

//VIEW PURCHASE
function viewpurchase(){
	$('#transactionlist').find('tr').click( function(){
		//GET IDTRANSACTION AND TYPE OF TRANSACTION
		var tid = $(this).find('td:first').text();
		var cid = $('input[name=cid]').val();
		 $('#viewpur').load("viewpurchase.php?" + $.param({tid: tid}));
		 $("#viewpur").show();
	});
}

//VIEW PAYMENT
function viewpayment(){
	$('#transactionlist').find('tr').click( function(){
		//GET IDTRANSACTION AND TYPE OF TRANSACTION
		var tid = $(this).find('td:first').text();
		var cid = $('input[name=cid]').val();
		 $('#viewpay').load("viewpayment.php?" + $.param({tid: tid}));
		 $("#viewpay").show();
	});
}

//VIEW DOCUMENT
function viewdocument(){
	$('#transactionlist').find('tr').click( function(){
		//GET IDTRANSACTION AND TYPE OF TRANSACTION
		var tid = $(this).find('td:first').text();
		var cid = $('input[name=cid]').val();
		 $('#viewdoc').load("viewdocument.php?" + $.param({tid: tid}));
		 $("#viewdoc").show();
	});
}


//VIEW INQUIRY
function viewinquiry(){
	$('#transactionlist').find('tr').click( function(){
		//GET IDTRANSACTION AND TYPE OF TRANSACTION
		var tid = $(this).find('td:first').text();
		var cid = $('input[name=cid]').val();
		//alert(cid + tid);
		 $('#viewinq').load("viewinquiry.php?" + $.param({tid: tid}));
		 $("#viewinq").show();
	});
}

//EDIT DOC
function editdoc(){
	$('#document :input').removeAttr('disabled');
	$('#savedoc').removeAttr('disabled');	
}

//SAVE DOC
function savedoc(){
	var datastring = $("#document #document").serialize();
	//alert(datastring);
	$.ajax({
		type: "POST",
		url: "updatedocument.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction updated.");
			$('#document :input').attr('disabled', true);
			$('#savedoc').attr('disabled', true);
			$('#editdoc').attr('disabled', false);
			$('#deldoc').attr('disabled', false);
			$("#transaction").load(" #transaction");
			$("#viewdoc").hide();
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}	
	});
	$("#transaction").load(" #transaction");
}

//DELETE DOC
function deldoc(){
	var delconfirm = confirm("This action will delete customer's transaction. Are you sure?");
	if (delconfirm==true){
		var datastring = $("#document #document").serialize();
		$.ajax({
			type: "POST",
			data: datastring,
			url: "deletedoc.php",
			datatype: "json",
			success: function(html){
				alert("Transaction deleted!");
				$("#transaction").load(" #transaction");
				$("#viewdoc").hide();
			}	
		});
	}
	else{
		alert("Action cancelled!");
	}
	$("#transaction").load(" #transaction");
}

//EDIT INQUIRY
function editinq(){
	$('#inquiry :input').removeAttr('disabled');
	$('#save').removeAttr('disabled');
}

//SAVE INQUIRY
function saveinq(){
	var datastring = $("#inquiry #inquiry").serialize();
	$.ajax({
		type: "POST",
		url: "updateinquiry.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction updated.");
			$('#inquiry :input').attr('disabled', true);
			$('#saveinq').attr('disabled', true);
			$('#editinq').attr('disabled', false);
			$('#delinq').attr('disabled', false);
			$("#transaction").load(" #transaction");
			$("#viewinq").hide();
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}	
	});
	$("#transaction").load(" #transaction");
}

//DELETE INQUIRY
function delinq(){
	var delconfirm = confirm("This action will delete customer's transaction. Are you sure?");
	if (delconfirm==true){
		var datastring = $("#inquiry #inquiry").serialize();
		$.ajax({
			type: "POST",
			data: datastring,
			url: "deleteinq.php",
			datatype: "json",
			success: function(html){
				alert("Transaction deleted!");
				$("#transaction").load(" #transaction");
				$("#viewinq").hide();
			}
		});
		$("#transaction").load(" #transaction");
	}
	else{
		alert("Action cancelled!");
	}
	$("#transaction").load(" #transaction");
}

//EDIT COMPLAINT
function editcom(){
	$('#complaint :input').removeAttr('disabled');
	$('#savecom').removeAttr('disabled');
	$("#transaction").load(" #transaction");
}

//SAVE COMPLAINT
function savecom(){
	var datastring = $("#complaint #complaint").serialize();
	$.ajax({
		type: "POST",
		url: "updatecomplaint.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction updated.");
			$('#complaint :input').attr('disabled', true);
			$('#savecom').attr('disabled', true);
			$('#editcom').attr('disabled', false);
			$('#delcom').attr('disabled', false);
			$("#transaction").load(" #transaction");
			$("#viewcom").hide();
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}	
	});
	$("#transaction").load(" #transaction");
}

//DELETE COMPLAINT
function delcom(){
	var delconfirm = confirm("This action will delete customer's transaction. Are you sure?");
	if (delconfirm==true){
		var datastring = $("#complaint #complaint").serialize();
		$.ajax({
			type: "POST",
			data: datastring,
			url: "deletecom.php",
			datatype: "json",
			success: function(html){
				alert("Transaction deleted!");
				$("#transaction").load(" #transaction");
				$("#viewcom").hide();
			}
		});
		$("#transaction").load(" #transaction");
	}
	else{
		alert("Action cancelled!");
	}
	$("#transaction").load(" #transaction");
}

//EDIT PAYMENT
function editpay(){
	$('#payment :input').removeAttr('disabled');
	$('#savepay').removeAttr('disabled');
	$("#transaction").load(" #transaction");
}

//SAVE PAYMENT
function savepay(){
	var datastring = $("#payment #payment").serialize();
	$.ajax({
		type: "POST",
		url: "updatepayment.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction updated.");
			$('#payment :input').attr('disabled', true);
			$('#savepay').attr('disabled', true);
			$('#editpay').attr('disabled', false);
			$('#delpay').attr('disabled', false);
			$("#transaction").load(" #transaction");
			$("#viewpay").hide();
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}	
	});
	$("#transaction").load(" #transaction");
}

//DELETE PAYMENT
function delpay(){
	var delconfirm = confirm("This action will delete customer's transaction. Are you sure?");
	if (delconfirm==true){
		var datastring = $("#payment #payment").serialize();
		$.ajax({
			type: "POST",
			data: datastring,
			url: "deletepay.php",
			datatype: "json",
			success: function(html){
				alert("Transaction deleted!");
				$("#transaction").load(" #transaction");
				$("#viewpay").hide();
			}
			
		});
	}
	else{
		alert("Action cancelled!");
	}
	$("#transaction").load(" #transaction");
}

//EDIT PURCHASE
function editpur(){
	$('#purchase :input').removeAttr('disabled');
	$('#savepur').removeAttr('disabled');	
}

//SAVE PURCHASE
function savepur(){
	var datastring = $("#purchase #purchase").serialize();
	$.ajax({
		type: "POST",
		url: "updatepurchase.php",
		data: datastring,
		datatype: "json",
		success: function(html){
			alert("Transaction updated.");
			$('#purchase :input').attr('disabled', true);
			$('#savepur').attr('disabled', true);
			$('#editpur').attr('disabled', false);
			$('#delpur').attr('disabled', false);
			$("#transaction").load(" #transaction");
			$("#viewpur").hide();
		},
		error: function(){
			alert("Failed saving transaction into database.");
		}	
	});
	$("#transaction").load(" #transaction");
}

//DELETE PURCHASE
function delpur(){
	var delconfirm = confirm("This action will delete customer's transaction. Are you sure?");
	if (delconfirm==true){
		var datastring = $("#purchase #purchase").serialize();
		$.ajax({
			type: "POST",
			data: datastring,
			url: "deletepur.php",
			datatype: "json",
			success: function(html){
				alert("Transaction deleted!");
				$("#transaction").load(" #transaction");
				$("#viewpur").hide();
			}
			
		});
		$("#transaction").load(" #transaction");
	}
	else{
		alert("Action cancelled!");
	}
}