/*
*
* menu.js
*
*/

$(document).ready(function() {

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