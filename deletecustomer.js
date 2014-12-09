$(document).ready(function() {
	$('#delete').click(function(){
		var delconfirm = confirm("This action will delete customer's transaction. Are you sure?");
		if (delconfirm == true){
			var cid = $("#cid").val();
			$.ajax({
			type: "POST",
			data: {cid: cid},
			url: "deletecus.php",
			datatype: "json",
			cache: false, 
			success: function(html){
				alert("Customer deleted!");
				window.location.replace("index.php");
			},
			error: function(){
				alert("Customer delete failed");
			}
			
		});
		}
	});	
});