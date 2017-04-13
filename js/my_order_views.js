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
    var NoProductsInOrder = parseInt(sessionStorage.getItem("NoProductsInOrder"));
    var products = JSON.parse(sessionStorage.getItem('products'));
    var NoProductsShowed = 0;
    var total = 0; 
    for (var i = 0; i < NoOrders && NoProductsInOrder > NoProductsShowed; i++) {

        var properties = JSON.parse(sessionStorage.getItem(i));
        var state = parseInt(properties[5]);

        if (state == 0) {

            var categoryTag = properties[1];
            var productId = properties[0];
            var product, categoryName, categoryTag;
            NoProductsShowed++;

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
            
            // Increase total
            total = total + product.price;
		}
    }

    // No products anymore
    if ( NoProductsInOrder == 0 ) {
        $(".information_message").show();
        $(".place_order_message").hide();
    } else {
        $(".place_order_message").show();
        $(".place_order_message h4.icon-price").text("Total = " + Number(total).toFixed(2) + "$");
    }

    sessionStorage.setItem("Total", total);
}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

    // Product removed from order
    $(document).on('click', "a.remove_request", function(e) {

        var product;
        var products = JSON.parse(sessionStorage.getItem('products'));
        var requestId = $( this ).attr('class').split(' ')[1];
        var request = JSON.parse(sessionStorage.getItem(requestId));
        var total = sessionStorage.getItem("Total");
        request[5] = -1;
        sessionStorage.setItem(requestId, JSON.stringify(request));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);

        // Update number products (-1)
        var NoProductsInOrder = parseInt(sessionStorage.getItem("NoProductsInOrder")) - 1;
        sessionStorage.setItem("NoProductsInOrder", NoProductsInOrder);

        // Update sub menu display of number of products
        var menu_item = $('#submenu ul li.order_current');
		menu_item.find("span").text(NoProductsInOrder);

        // No products anymore
        if (NoProductsInOrder == 0) {

            $(".information_message").fadeIn(500);
            $(".place_order_message").hide();
        }

        //Updating total price
        switch (request[1]) {
            case "maincourses":
                product = products[0].maincourses[request[0]];
                break;
            case "drinks":
                product = products[1].drinks[request[0]];
                break;
            case "deserts":
                product = products[2].deserts[request[0]];
                break;
        }

        total = Number(total) - Number(product.price);
        $(".place_order_message h4.icon-price").text("Total = " + Number(total).toFixed(2) + "$");
        sessionStorage.setItem("Total", total);
        


        e.preventDefault();
    });

    // Place Order
    $(document).on('click', "button.place_order", function(e) {

        // Hide button and products
        $(".place_order_message").hide();
        $("ul.order_products").hide();
        $(".confirmation_message").fadeIn(500);

        //Get nubmer of requests
        NoOrders = sessionStorage.getItem("NoOrders");

        // Update number of products in order
        sessionStorage.setItem("NoProductsInOrder", 0);

        for (var i = 0; i < NoOrders; i++) {

            var properties = JSON.parse(sessionStorage.getItem(i));
            var state = parseInt(properties[5]);

            if (state == 0) {
                properties[5] = 1;
                properties[2] = new Date();
            }

            sessionStorage.setItem(i, JSON.stringify(properties));

        }        

        // Update sub menu display of number of products
        var menu_item = $('#submenu ul li.order_current');
		menu_item.find("span").text(0);

        // Update total price of current order
        sessionStorage.setItem("Total", 0);

        e.preventDefault();
    });

});