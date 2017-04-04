/*
*
* menu.js
*
*/

$(document).ready(function() {

	// Enable User Strict Mode
	'use strict';

	// Menu
	$(document).on('click', "#menu ul li", function(e) {
		$(this).parent().children("li.active").toggleClass("active");
		$(this).toggleClass("active");
		e.preventDefault();
	});

	// Sub Menu
	$(document).on('click', "#submenu ul li", function(e) {
		$(this).parent().children("li.active").toggleClass("active");
		$(this).toggleClass("active");
		e.preventDefault();
	});

	$('#screen_new_order').fadeIn(1000);

	// New Order
	$(document).on('click', ".new_order", function(e) {
		$('#page').load("new_order.html", function(){
        	$('#screen_new_order').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Order Status
	$(document).on('click', ".order_status", function(e) {
		$('#page').load("order_status.html", function(data){
        	$('#screen_order_status').fadeIn(1000);
			timer();
    	});
		e.preventDefault();
	});

	// Order Review
	$(document).on('click', ".order_review", function(e) {
		$('#page').load("order_review.html", function(){
        	$('#screen_order_review').fadeIn(1000);
    	});
		e.preventDefault();
	});

});