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
		$("#inner_page").fadeIn(1000);
		e.preventDefault();
	});

});