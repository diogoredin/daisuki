/*
*
* new_order.js
*
*/

$(document).ready(function() {

	// Category 1
	$(document).on('click', "#restaurant_category1", function(e) {
		$('#page').load("order_category.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Category 2
	$(document).on('click', "#restaurant_category2", function(e) {
		$('#page').load("order_category.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Category 3
	$(document).on('click', "#restaurant_category3", function(e) {
		$('#page').load("order_category.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

});