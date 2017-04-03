/*
*
* menu.js
*
*/

$(document).ready(function() {

	// Enable User Strict Mode
	'use strict';

	var mainCourses = [];
	var drinks = [];
	var desserts = [];
	var orders = [];

    $.ajax({
        type: "GET",
        url: "mainCourses.txt",
        dataType: "text",
        success: function(data) {mainCoursesCreate(data);}
     });

    $.ajax({
        type: "GET",
        url: "drinks.txt",
        dataType: "text",
        success: function(data) {drinksCreate(data);}
     });

    $.ajax({
        type: "GET",
        url: "desserts.txt",
        dataType: "text",
        success: function(data) {dessertsCreate(data);}
     });


	 function mainCoursesCreate(data) {
		var lines = data.split(/\r\n|\n/);
		var noLines = lines.length();

		for (i = 0; i < noLines; i++) {
			var properties = lines[i].split(',')
		}
	 }

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

	// New Order
	$(".new_order").click(function(e) {
		$('#page').load("new_order.html", function(){
        	$('#screen_new_order').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Order Status
	$(".order_status").click(function(e) {
		$('#page').load("order_status.html", function(data){
        	$('#screen_order_status').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Order Review
	$(".order_review").click(function(e) {
		$('#page').load("order_review.html", function(){
        	$('#screen_order_review').fadeIn(1000);
    	});
		e.preventDefault();
	});

});