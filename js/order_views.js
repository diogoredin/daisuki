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