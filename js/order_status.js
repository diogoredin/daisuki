/*
*
* order_status.js
*
*/

function loadOrderStatus() {
    
    var products = JSON.parse(sessionStorage.getItem('products'));
    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));

    $(".information_message").hide();
    if ( sessionStorage.getItem("Ordered") == "False" ) {
        $(".information_message").show();
    }

    // Get Plate Status
	if ( sessionStorage.getItem("Plate") == "off" ) {
		var t_fontsize = 50;
        var t_radius = 60.5;
        var t_strokewidth = 10;
	} else {
		var t_fontsize = 40;
        var t_radius = 40.5;
        var t_strokewidth = 5;
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
                        <h1>' + product.name + ' ' + properties[7] +'X</h1>\
                        <p class="icon-' + categoryTag +'">' + categoryName + '</p>\
                    </div>\
                </li>');

	        $("#countdown" + i).countdown360({
                id          : i,
                radius      : t_radius,
                seconds     : product.cookingTime,
                strokeWidth : t_strokewidth,
                fillStyle   : 'transparent',
                strokeStyle : '#0276FD',
                fontSize    : t_fontsize,
                fontColor   : '#FFFFFF',
                fontFamily  : "HeeboLight",
                fontWeight  : 700,
                autostart: false,
                onComplete  : function () {
                    var properties = JSON.parse(sessionStorage.getItem($(this)[0].id));
                    properties[3] = "served";
                    sessionStorage.setItem($(this)[0].id, JSON.stringify(properties));
                    $("#countdown" + $(this)[0].id).parent().parent().find("h3.icon-status").text("served");
                },
                afterTen  : function () {
                    var properties = JSON.parse(sessionStorage.getItem($(this)[0].id));
                    properties[3] = "cooking";
                    sessionStorage.setItem($(this)[0].id, JSON.stringify(properties));
                    $("#countdown" + $(this)[0].id).parent().parent().find("h3.icon-status").text("cooking");
                },
                tenToComplete  : function () {
                    var properties = JSON.parse(sessionStorage.getItem($(this)[0].id));
                    properties[3] = "serving";
                    sessionStorage.setItem($(this)[0].id, JSON.stringify(properties));
                    $("#countdown" + $(this)[0].id).parent().parent().find("h3.icon-status").text("serving");
                }

            }).start(properties[2]);	
        }     
    }
}