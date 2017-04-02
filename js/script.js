/*
*
* script.js
*
*/

$(document).ready(function() {

	// Enable User Strict Mode
	'use strict';

	// Menu
	$("#menu ul li").click(function(e) {
		$(this).parent().children("li.active").toggleClass("active");
		$(this).toggleClass("active");
		e.preventDefault();
	});

	// Sub Menu
	$("#submenu ul li").click(function(e) {
		$(this).parent().children("li.active").toggleClass("active");
		$(this).toggleClass("active");
		e.preventDefault();
	});

	// Inner Page
	$(".new_order").click(function(e) {
		$("#screen_order_status").hide();
		$("#screen_order_review").hide();
		$("#screen_new_order").fadeIn(1000);
		e.preventDefault();
	});

	// Inner Page
	$(".order_status").click(function(e) {
		$("#screen_new_order").hide();
		$("#screen_order_review").hide();
		$("#screen_order_status").fadeIn(1000);
		e.preventDefault();
	});

	// Inner Page
	$(".order_review").click(function(e) {
		$("#screen_order_status").hide();
		$("#screen_new_order").hide();
		$("#screen_order_review").fadeIn(1000);
		e.preventDefault();
	});

});