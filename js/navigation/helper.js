/*
*
* helper.js
*
*/

$(document).ready(function() {

	// Enable User Strict Mode
	'use strict';

	// Help Screen
	$(document).on('click', "#menu ul li.help", function(e) {
		$('#submenu').load("help.html", function(data){
        	$('#small_help').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Waiter Screen
	$(document).on('click', "#menu ul li.waiter", function(e) {
		$('#submenu').load("waiter.html", function(data){
        	$('#small_waiter').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Order Screen
	$(document).on('click', "#menu ul li.order", function(e) {
		$('#submenu').load("order.html", function(data){
        	$('#small_order').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Check Screen
	$(document).on('click', "#menu ul li.check", function(e) {
		$('#submenu').load("check.html", function(data){
        	$('#small_check').fadeIn(1000);
    	});
		e.preventDefault();
	});

});