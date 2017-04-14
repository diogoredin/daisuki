/*
*
* order_status.js
*
*/

function loadOrderStatus() {
    
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

            $(".order_status_timers ul").append('\
                <li>\
                    <div class="product_photo">\
                        <img src="./data/images/' + product.photo + '" />\
                    </div>\
                    <div class="product_timer">\
                        <div id="countdown' + i + '"></div>\
                    </div>\
                    <div class="product_details">\
                        <h3 class="icon-status">' + properties[3] + '</h3>\
                        <h1>' + product.name + '</h1>\
                        <p class="icon-' + categoryTag +'">' + categoryName + '</p>\
                    </div>\
                </li>');

	        $("#countdown" + i).countdown360({
                id          : i,
                radius      : 60.5,
                seconds     : product.cookingTime,
                strokeWidth : 10,
                fillStyle   : 'transparent',
                strokeStyle : '#0276FD',
                fontSize    : 50,
                fontColor   : '#FFFFFF',
                fontFamily  : "HeeboLight",
                fontWeight  : 700,
                autostart: false,
                onComplete  : function () {
                    var properties = JSON.parse(sessionStorage.getItem($(this)[0].id));
                    properties[3] = "served";
                    sessionStorage.setItem($(this)[0].id, JSON.stringify(properties));
                    console.log($("#countdown" + $(this)[0].id).parent().parent().find("h3.icon-status"));
                    $("#countdown" + $(this)[0].id).parent().parent().find("h3.icon-status").text("served");
                }
            }).start(properties[2]);	
        }     
    }
}