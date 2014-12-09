function showHint(str) {
	$('#idsearch').keypress(function(e) {
	 if(e.keyCode == 13) {
	 	var str = $('input[name=idsearch]').val();
	    //alert(str);
	    getcustomer(str);
	    return false;
	  }
	});
}

function getcustomer(str){
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","searchcustomer.php?q="+str,true);
	xmlhttp.send();
}


function rownumberindividual(){
	$('#individual').find('tr').click( function(){
	  var rowind = $(this).find('td:first').text();
	  window.location.href = "viewcustomer.php?id=" + rowind;
	});
}

function rownumbercorporate(){
	$('#corporate').find('tr').click( function(){
	  var rowcor = $(this).find('td:first').text();
	  window.location.href = "viewcustomer.php?id=" + rowcor;
	});
}

$(document).ready(function() {
	$("#newcustomer").dialog({
		//title: "Add New Customer",
		autoOpen: false,
		position: {
				my: 'center',
		    	at: 'center',
		    	of: $("#header")
		},
	 	width: 500,
	 	height: 400
	 	
	});
	
	$("#addcustomer").click(function (e) {
		$("#newcustomer").dialog("open");
	});
	
});

function addnewcustomer(){
	$('#indresults').find('tr').dblclick( function(){
	  $("#newcustomer").dialog("open");
	});
	$('#corresults').find('tr').dblclick( function(){
	  $("#newcustomer").dialog("open");
	});
}