/*
*
* order.js
*
*/

$(document).ready(function() {

	// Enable User Strict Mode
	'use strict';

	// New Order
	$(document).on('click', ".new_order", function(e) {
		$('#page').load("components/order/order.html", function(){
        	$('#screen_new_order').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Order Status
	$(document).on('click', ".order_status", function(e) {
		$('#page').load("components/order/order_status.html", function(data){
        	$('#screen_order_status').fadeIn(1000);
			timer();
    	});
		e.preventDefault();
	});

	// Order Review
	$(document).on('click', ".order_review", function(e) {
		$('#page').load("components/order/order_review.html", function(){
        	$('#screen_order_review').fadeIn(1000);
    	});
		e.preventDefault();
	});

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