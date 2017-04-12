/*
*
*   my_order_views.js
*
*/

/*
*
*	LOAD CURRENT ORDER
*
*/

function loadCurrentOrder() {

    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));
    var products = JSON.parse(sessionStorage.getItem('products'));

    for (var i = 0; i < NoOrders; i++) {

        var properties = JSON.parse(sessionStorage.getItem(i));
        var state = parseInt(properties[5]);

        if (state == 0) {

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

            $("ul.order_products").append('\
					<li>\
            			<div class="product_image">\
                			<img src="./data/images/' + product.photo + '" />\
           				</div>\
                        <h3 class="icon-' + categoryTag + '">' + categoryName + '</h3>\
                        <h1>' + product.name + '</h1>\
            			<p class="price">' + Number(product.price).toFixed(2) + '$</p>\
                        <a class="remove_request ' + i.toString() + '">Remove</a>\
        				</li>');
		}

    }

    // No products anymore
    if ( NoOrders == 0 ) {
        $(".information_message").show();
    } else {
        $(".place_order").show();
    }

}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

    // Product removed from order
    $(document).on('click', "a.remove_request", function(e) {

        var requestId = $( this ).attr('class').split(' ')[1];
        var request = JSON.parse(sessionStorage.getItem(requestId));
        request[5] = -1;
        sessionStorage.setItem(requestId, JSON.stringify(request));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);

        // Update number products (-1)
        var NoOrders = sessionStorage.getItem("NoOrders");
        sessionStorage.setItem("NoOrders", parseInt(NoOrders) - 1);

        // Update sub menu display of number of products
        var menu_item = $('#submenu ul li.order_current');
		menu_item.find("span").text(parseInt(NoOrders) - 1);

        // No products anymore
        if ( ( NoOrders -1 ) == 0 ) {

            $(".information_message").show();
            $("button.place_order").hide();
        }

        e.preventDefault();
    });

    // Place Order
    $(document).on('click', "button.place_order", function(e) {

        // Hide button and products
        $("button.place_order").hide();
        $("ul.order_products").hide();
        $(".confirmation_message").fadeIn(500);

        // Update number of orders
        sessionStorage.setItem("NoOrders", 0);
        // IMPORTANTE!!! FALTA REMOVER PRODUTOS TODOS DA LISTA!

        // Update sub menu display of number of products
        var menu_item = $('#submenu ul li.order_current');
		menu_item.find("span").text(0);

        e.preventDefault();
    });

});