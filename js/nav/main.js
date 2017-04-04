/*
*
* main.js
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

	// Order
	$(document).on('click', "#menu ul li.order", function(e) {
		$('#submenu').load("components/order/menu.html", function(data){
			$('#page').hide();
			$('#page').replaceWith( "<div id='page'></div>" );
			$('#submenu').hide();
        	$('#submenu').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Check
	$(document).on('click', "#menu ul li.check", function(e) {
		$('#submenu').load("components/check/menu.html", function(data){
			$('#page').hide();
			$('#page').replaceWith( "<div id='page'></div>" );
			$('#submenu').hide();
        	$('#submenu').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Waiter
	$(document).on('click', "#menu ul li.waiter", function(e) {
		$('#submenu').load("components/waiter.html", function(data){
			$('#submenu').hide();
        	$('#submenu').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Help
	$(document).on('click', "#menu ul li.help", function(e) {
		$('#submenu').load("components/help.html", function(data){
			$('#submenu').hide();
        	$('#submenu').fadeIn(1000);
    	});
		e.preventDefault();
	});

});