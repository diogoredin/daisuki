/*
*
* new_order.js
*
*/

$(document).ready(function() {

	var depth_one;
	var depth_two;

	// Category 1
	$(document).on('click', "#restaurant_category1", function(e) {
		depth_one = $("#page").clone();
		$('#page').load("categories/category1.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Category 2
	$(document).on('click', "#restaurant_category2", function(e) {
		depth_one = $("#page").clone();
		$('#page').load("categories/category2.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Category 3
	$(document).on('click', "#restaurant_category3", function(e) {
		depth_one = $("#page").clone();
		$('#page').load("categories/category3.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Product 1
	$(document).on('click', "#product1", function(e) {
		depth_two = $("#page").clone();
		$('#page').load("products/product1.html", function(){
        	$('#screen_product').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Product 2
	$(document).on('click', "#product2", function(e) {
		depth_two = $("#page").clone();
		$('#page').load("products/product2.html", function(){
        	$('#screen_product').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Product 3
	$(document).on('click', "#product3", function(e) {
		depth_two = $("#page").clone();
		$('#page').load("products/product3.html", function(){
        	$('#screen_product').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Product 4
	$(document).on('click', "#product4", function(e) {
		depth_two = $("#page").clone();
		$('#page').load("products/product4.html", function(){
        	$('#screen_product').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Product 5
	$(document).on('click', "#product5", function(e) {
		depth_two = $("#page").clone();
		$('#page').load("products/product5.html", function(){
        	$('#screen_product').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Product 6
	$(document).on('click', "#product6", function(e) {
		depth_two = $("#page").clone();
		$('#page').load("products/product6.html", function(){
        	$('#screen_product').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Product 7
	$(document).on('click', "#product7", function(e) {
		depth_two = $("#page").clone();
		$('#page').load("products/product7.html", function(){
        	$('#screen_product').fadeIn(1000);
    	});
		e.preventDefault();
	});

	$(document).on('click', "#screen_order_category .back_button", function(e) {
		$("#page").replaceWith(depth_one);
	});

	$(document).on('click', "#screen_product .back_button", function(e) {
		$("#page").replaceWith(depth_two);
	});

});