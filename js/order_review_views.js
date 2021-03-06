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

            if (properties[5] == 0){
                $(".consumed_products ul").append('\
                    <li>\
                        <div class="product_photo">\
                            <img src="data/images/' + product.photo + '" />\
                        </div>\
                        <div class="product_details">\
                            <h3 class="icon-' + categoryTag + '">' + categoryName + '</h3>\
                            <h1>' + product.name + ' ' + properties[7] + 'X</h1>\
                            <p>Purchased in ' + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + '</p>\
                            <p>' + Number(product.price * properties[7]).toFixed(2) + '$</p>\
                        </div>\
                        <div class="product_review_list_right">\
                            <div class="product_review_button alone">\
                                <button class="' + i + '">Add Review</button>\
                            </div>\
                        </div>\
                    </li>');
            }
            else {
                $(".consumed_products ul").append('\
                    <li>\
                        <div class="product_photo">\
                            <img src="data/images/' + product.photo + '" />\
                        </div>\
                        <div class="product_details">\
                            <h3 class="icon-' + categoryTag + '">' + categoryName + '</h3>\
                            <h1>' + product.name + ' ' + properties[7] + 'X</h1>\
                            <p>Purchased in ' + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + '</p>\
                            <p>' + Number(product.price * properties[7]).toFixed(2) + '$</p>\
                        </div>\
                        <div class="product_review_list_right">\
                            <div class="product_review_given">\
                                <p>Review Given</p>\
                                <div class="stars">\
                                    <div class="my_stars' + i + '"></div>\
                                </div>\
                            </div>\
                            <div class="product_review_button">\
                                <button class="' + i + '">Change Review</button>\
                            </div>\
                        </div>\
                    </li>');

                $('div.my_stars' + i).rateYo({
                    rating      : properties[5],
                    fullStar    : true,
                    ratedFill   : '#fc0',
                    readOnly    : true
                });                
            }
        }     
    }

}

/*
*
*   Order Review Single
*
*/

function loadOrderReviewInner(orderId, change) {
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
            <h1>' + product.name + ' ' + properties[7] + 'X</h1>\
            <p><strong> Price: </strong> ' + Number(product.price * properties[7]).toFixed(2) + '$</p>\
            <p><strong> Purchased in </strong> ' + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + '</p>');
    $(".go_back_orders").show();
    $('div.my_stars').rateYo({
        rating      : properties[5],
        fullStar    : true,
        ratedFill   : '#fc0'
    });
    
    if (change) {
        $(".add_review").addClass("change");
        $(".add_review").text("Change Review");
        $(".my_review_box h3").text("Change Review");
    } else {
        $(".add_review").addClass("add");
        $(".add_review").text("Add Review");
        $(".my_review_box h3").text("Add Review");

    }

    $('div.my_stars').rateYo().on("rateyo.change", function (e, data) {
        var rating = data.rating;
        properties[5] = rating;
        sessionStorage.setItem(orderId, JSON.stringify(properties));
        sessionStorage.setItem("newRating", rating); 
    });

    // Adding overall rating
	var overall_rating = product.overall_rating;
	for (var i = 0; i < overall_rating; i++) {
		$(".customer_ratings").children("div.stars").append('<i class="fa fa-star"></i>');
	}
	for (var i = 0; i < 5 - overall_rating; i++) {
		$(".customer_ratings").children("div.stars").append('<i class="fa fa-star inactive"></i>');
	}

	// Adding reviews
	var reviews = product.reviews;
	var reviewsLength = reviews.length;
	for (var i = 0; i < reviewsLength; i++) {
		$(".customer_comments ul").append('<li class="' + i +'">\
				<p>' + reviews[i].review + '</p>\
				<div class="stars"></div>\
			</li>');
		for (var star = 0; star < reviews[i].classification; star++) {
			$(".customer_comments ul").children("." + i).children("div.stars").append('<i class="fa fa-star"></i>');
		}
		for (var star = 0; star < 5 - reviews[i].classification; star++) {
			$(".customer_comments ul").children("." + i).children("div.stars").append('<i class="fa fa-star inactive"></i>');
		}
	}
    
    // Adding orderId to button class
    $(".add_review").addClass(orderId);
}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

    $(document).on('click', ".product_review_button button", function(e) {

        // Store Screen
        var location;

        // Get Plate Status
        if ( sessionStorage.getItem("Plate") == "off" ) {
            location = "#page";
        } else {
            location = "#submenu";
        }

        var orderId = $(this).attr('class')

        if ($(this).text() == "Add Review") {
            var change = false;
        }
        
        else {
            var change = true;
        }

		// Load the Page
		$(location).load('order_review_inner.html', function(){
			$('#screen_order_review_inner').fadeIn(300);
			// Specific Functions to Execute
			loadOrderReviewInner(orderId, change);
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

     /*
	*
	*	APPEND COMMENT
	*
	*/

    $(document).on('click', "button.add_review", function(e) {

        var orderId = $(this).attr('class').split(' ')[2];
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

        var stars = sessionStorage.getItem("newRating");
        var review = $('textarea#review_box').val();

        if ( review != '' && stars > 0 ) {
            if ($(this).hasClass("add")) {
                $(".customer_comments ul").prepend('<li class="new">\
                        <p>' + review + '</p>\
                        <div class="stars"></div>\
                    </li>');

                for (var star = 0; star < stars; star++) {
                    $(".customer_comments ul").children(".new").children("div.stars").append('<i class="fa fa-star"></i>');
                }
                for (var star = 0; star < 5 - stars; star++) {
                    $(".customer_comments ul").children(".new").children("div.stars").append('<i class="fa fa-star inactive"></i>');
                }

                sessionStorage.setItem("newRating", 0);
                $(".customer_comments ul").children(".new").removeClass("new");
                $('.my_review_box').fadeOut(1000);
                
                var reviewOBJ = {"classification" : stars,
                                "review" : review};
                product.reviews.unshift(reviewOBJ);
                console.log(product.reviews);
                sessionStorage.setItem('products', JSON.stringify(products));
            }

            else if ($(this).hasClass("change")) {
                $(".customer_comments ul li:first").replaceWith('<li class="new">\
                        <p>' + review + '</p>\
                        <div class="stars"></div>\
                    </li>');

                for (var star = 0; star < stars; star++) {
                    $(".customer_comments ul").children(".new").children("div.stars").append('<i class="fa fa-star"></i>');
                }
                for (var star = 0; star < 5 - stars; star++) {
                    $(".customer_comments ul").children(".new").children("div.stars").append('<i class="fa fa-star inactive"></i>');
                }

                sessionStorage.setItem("newRating", 0);
                $(".customer_comments ul").children(".new").removeClass("new");
                $('.my_review_box').fadeOut(1000);
                
                var reviewOBJ = {"classification" : stars,
                                "review" : review};
                product.reviews[0] = reviewOBJ;
                console.log(product.reviews);
                sessionStorage.setItem('products', JSON.stringify(products));                
            }

        } else {
            $('.my_review_box').effect( "shake" );
        }

		e.preventDefault();
	});

});