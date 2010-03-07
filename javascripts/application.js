// Processes input keyword and query string to open result in Google.
function process() {	
	query_string = document.search_form.query_string.options[document.search_form.query_string.options.selectedIndex].value;
	keyword = document.search_form.keywords.value;
	l = query_string + keyword;
	if (keyword == ""){
		$("#keywords").val("Please enter text");
		return false;
	}
	else if (keyword == "Please enter text") {
		return false;
	}
	top.window.location = l;
	return false;
}

//clears search text box
function clear_search() {		
	keyword = $("#keywords").val();
	if(keyword == "Please enter text") {
		$("#keywords").val("");
	}
}

function set_focus(){
	$('#keywords').focus();
}

// Google like effect
$(document).ready(function() {
	$('#contact').hide();
	// google like fade in effect
	$('body').mouseover(function() {
		$('#contact').fadeIn('slow');
	});
	$('#keywords').focus();
});
