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
        url: "data/mainCourses.txt",
        dataType: "text",
        success: function(data) {productsCreation(data, mainCourses);}
     });

    $.ajax({
        type: "GET",
        url: "data/drinks.txt",
        dataType: "text",
        success: function(data) {productsCreation(data, drinks);}
     });

    $.ajax({
        type: "GET",
        url: "data/desserts.txt",
        dataType: "text",
        success: function(data) {productsCreation(data, orders);}
     });

	 function productsCreation(data, array) {
		var lines = data.split(/\r\n|\n/);
		var noLines = lines.length;
		var i;

		for (i = 0; i < noLines; i++) {
			var properties = lines[i].split(',');
			var product = new Product(
				properties[0],
				properties[1],
				properties[2],
				properties[3],
				properties[4],
				properties[5]
			);

			array.push(product);
		}
	 }

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