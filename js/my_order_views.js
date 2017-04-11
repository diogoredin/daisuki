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
            var categoryName;


            switch (categoryTag) {
                case "maincourses":
                    product = products[0].maincourses[productId];
                    categoryName = "Main Courses";
                    break;
                case "drinks":
                    product = products[1].drinks[productId];
                    categoryName = "Drinks";
                    break;
                case "deserts":
                    product = products[2].deserts[productId];
                    categoryName = "Deserts";
                    break;
            }

            $('ul.order_products').append('<li><img src="data/images/' + product.photo + '">\
                                                <p>Category: ' + categoryName + '</p>\
                                                <p>Name: ' + product.name + '</p>\
                                                <p>Price: ' + Number(product.price).toFixed(2) + '</p>\
                                                <button class="remove_request ' + i.toString() + '">Remove</button></li>');
        }
    }
}

$(document).ready(function() {
    $(document).on('click', "button.remove_request", function(e) {
        var requestId = $( this ).attr('class').split(' ')[1];
        var request = JSON.parse(sessionStorage.getItem(requestId));
        request[5] = -1;
        sessionStorage.setItem(requestId, JSON.stringify(request));
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });
});