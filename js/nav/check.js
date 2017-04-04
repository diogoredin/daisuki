/*
*
* check.js
*
*/

$(document).ready(function() {

	// Check Review
	$(document).on('click', ".check_review", function(e) {
		$('#page').load("components/check/check_review.html", function(){
        	$('#screen_check_review').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Tax Information
	$(document).on('click', ".tax_information", function(e) {
		$('#page').load("components/check/tax_information.html", function(data){
        	$('#screen_tax_information').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Pay
	$(document).on('click', ".pay", function(e) {
		$('#page').load("components/check/pay.html", function(){
        	$('#screen_pay').fadeIn(1000);
    	});
		e.preventDefault();
	});

});