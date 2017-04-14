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

    if ( sessionStorage.getItem("NoOrders") == 0 ) {
        $(".information_message").show();
    }

var products = JSON.parse(sessionStorage.getItem('products'));
    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));

    if ( NoOrders == 0 ) {
        $(".information_message").show();
    }

    for (var i = 0; i < NoOrders; i++) {

        var properties = JSON.parse(sessionStorage.getItem(i));
        var state = parseInt(properties[5]);

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
                <div class="product_review_button ' + i + '">\
                    <button>Add Review</button>\
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

function loadOrderReviewInner() {
}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

    $(document).on('click', ".product_review_button button", function(e) {

		// Load the Page
		$('#page').load('order_review_inner.html', function(data){
			$('#screen_order_review_inner').fadeIn(300);

			// Specific Functions to Execute
			loadOrderReviewInner();

    	});

		e.preventDefault();
	});

});