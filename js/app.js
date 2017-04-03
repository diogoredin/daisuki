/*
*
* app.js
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
	 console.log(mainCourses);
});