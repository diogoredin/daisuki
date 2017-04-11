function loadCurrentOrder() {

    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));
    var i;
    var products = JSON.parse(sessionStorage.getItem('products'));

    for (i = 0; i < NoOrders; i++) {

        var properties = JSON.parse(sessionStorage.getItem(i));
        var state = parseInt(properties[5]);

        if (state == 0) {
            var categoryTag = properties[1];
            var productId = properties[0];
            var product;
            var categoryName, categoryTag;


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

}

$(document).ready(function() {
    $(document).on('click', "a.remove_request", function(e) {
        var requestId = $( this ).attr('class').split(' ')[1];
        var request = JSON.parse(sessionStorage.getItem(requestId));
        request[5] = -1;
        sessionStorage.setItem(requestId, JSON.stringify(request));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });
});