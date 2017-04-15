/*
*
* order_views.js
*
*/

/*
*
*   Order Review General
*
*/

function loadOrderReview() {
    
    $(".information_message_review").hide();
    if ( sessionStorage.getItem("Ordered") == "False" ) {
        $(".information_message_review").show();
    }
    

    var products = JSON.parse(sessionStorage.getItem('products'));
    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));

    if ( NoOrders == 0 ) {
        $(".information_message").show();
    }

    for (var i = 0; i < NoOrders; i++) {

        var properties = JSON.parse(sessionStorage.getItem(i));
        var state = parseInt(properties[6]);

        if (state == 1) {

            var categoryTag = properties[1];
            var productId = properties[0];
            var product, categoryName, categoryTag;

            switch (categoryTag) {
                case "maincourses":
                    product = products[0].maincourses[productId];
                    categoryName = "Main Courses";
                    categoryTag = "maincourses";
                    break;
                case "drinks":
                    product = products[1].drinks[productId];
                    categoryName = "Drinks";
                    categoryTag = "drinks";
                    break;
                case "deserts":
                    product = products[2].deserts[productId];
                    categoryName = "Deserts";
                    categoryTag = "deserts";
                    break;
            }

            var date = new Date(properties[2]);

            $(".consumed_products ul").append('\<li>\
                <div class="product_photo">\
                    <img src="data/images/' + product.photo + '" />\
                </div>\
                <div class="product_details">\
                    <h3 class="icon-' + categoryTag + '">' + categoryName + '</h3>\
                    <h1>' + product.name +'</h1>\
                    <p>Price: ' + Number(product.price).toFixed(2) + '$</p>\
                    <p>Purchased in ' + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + '</p>\
                </div>\
                <div class="product_review_button">\
                    <button class="' + i + '">Add Review</button>\
                </div>\
            </li>');
        }     
    }

}

/*
*
*   Order Review Single
*
*/

function loadOrderReviewInner(orderId) {
    var products = JSON.parse(sessionStorage.getItem('products'));
    var properties = JSON.parse(sessionStorage.getItem(orderId));
    var categoryTag = properties[1];
    var productId = properties[0];
    var product, categoryName, categoryTag;

    switch (categoryTag) {
        case "maincourses":
            product = products[0].maincourses[productId];
            categoryName = "Main Courses";
            categoryTag = "maincourses";
            break;
        case "drinks":
            product = products[1].drinks[productId];
            categoryName = "Drinks";
            categoryTag = "drinks";
            break;
        case "deserts":
            product = products[2].deserts[productId];
            categoryName = "Deserts";
            categoryTag = "deserts";
            break;
    }

    var date = new Date(properties[2]);

	$('.page_title').append('<h1 class="icon-add-review">Review Order > ' + product.name + '</h1>');
    $('div.product_photo').append('<img src="data/images/' + product.photo +'"/>');
    $('div.product_details').append('<h3 class="icon-' + categoryTag + '">' + categoryName + '</h3>\
            <h1>' + product.name + '</h1>\
            <p><strong> Price: </strong> ' + Number(product.price).toFixed(2) + '$</p>\
            <p><strong> Purchased in </strong> ' + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + '</p>');
    $(".go_back_orders").show();
    $('div.my_stars').rateYo({
        rating      : properties[5],
        fullStar    : true,
        ratedFill   : '#fc0'
    });
    
    $('div.my_stars').rateYo().on("rateyo.change", function (e, data) {
        var rating = data.rating;
        properties[5] = rating;
        sessionStorage.setItem(orderId, JSON.stringify(properties)); 
    });
    
}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

    $(document).on('click', ".product_review_button button", function(e) {

        var orderId = $(this).attr('class')

		// Load the Page
		$('#page').load('order_review_inner.html', function(){
			$('#screen_order_review_inner').fadeIn(300);
			// Specific Functions to Execute
			loadOrderReviewInner(orderId);
    	});

		e.preventDefault();
	});

    /*
	*
	*	BACK BUTTON
	*
	*/

	// Single Category
	$(document).on('click', ".go_back_orders", function(e) {

		// Load the Page
		$('#page').load( 'order_review.html', function(data){
			$('#screen_order_review').fadeIn(300);
			loadOrderReview();
    	});

        $(this).hide();

		e.preventDefault();
	});

});