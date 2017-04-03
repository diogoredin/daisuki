/*
*
* new_order.js
*
*/

$(document).ready(function() {

	// Category 1
	$("li#restaurant_category1").click(function(e) {
		$('#page').load("order_category.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Category 2
	$("li#restaurant_category2").click(function(e) {
		$('#page').load("order_category.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

	// Category 3
	$("li#restaurant_category3").click(function(e) {
		$('#page').load("order_category.html", function(){
        	$('#screen_order_category').fadeIn(1000);
    	});
		e.preventDefault();
	});

});