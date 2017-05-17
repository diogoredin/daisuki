/*
*
* check.js
*
*/

/*
*
*   Update Check Menus
*
*/

function updateCheckMenus( screen ) {

    $("#submenu ul").children().removeClass("active");
    $("#submenu ul li." + screen ).addClass("active");

    $("#submenu ul").children().addClass("inactive");
    $("#submenu ul li." + screen ).removeClass("inactive");

}

/*
*
*   Load Check Confirmation Screen
*
*/

function loadCheckReviewScreen() {

	// Load the Page
	$('#page').load( 'check_review.html', function(data){
		$('#screen_check_review').fadeIn(300);
        loadCheckProducts();
    });

}

/*
*
*   Load Tax Confirmation Screen
*
*/

function loadTaxInformationScreen() {

	// Load the Page
	$('#page').load( 'check_tax.html', function(data){
		$('#screen_check_tax' ).fadeIn(300);
        loadCheckList();
    });

}

/*
*
*   Load Pay Screen
*
*/

function loadPayScreen() {

	// Load the Page
	$('#page').load( 'check_pay.html', function(data){
	    $('#screen_check_pay' ).fadeIn(300);
            $(".authorize_payment").replaceWith('<div class="authorize_payment"><h4 class="icon-info"></h4>Authorize payment of '
            + Number(sessionStorage.getItem("Total")).toFixed(2) + '$</div>');
    });

}

/*
*
*   Load Correct Products
*
*/

function loadCheckProducts() {

    var products = JSON.parse(sessionStorage.getItem('products'));
    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));
    var total = 0;

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

            $('.check_list_review ul').append('<li>\
                <div class="product_photo">\
                    <img src="data/images/' + product.photo + '" />\
                </div>\
                <div class="product_details">\
                    <h3 class="icon-' + categoryTag + '">' + categoryName + '</h3>\
                    <h1>' + product.name + ' ' + properties[7] + 'X</h1>\
                    <p>Purchased in ' + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + '</p>\
                    <p>' + Number(product.price * properties[7]).toFixed(2) + '$</p>\
                </div>\
            </li>');

            // Update Total
            total = total + product.price * properties[7];
        }

        if ( total > 0 ) {
            $("button.confirm_check").show();
        }
    }

    $('.total_message h4').replaceWith('<h4 class="icon-price">Total = ' + Number(total).toFixed(2) + '$</h4>');

}

/*
*
*   Load Correct Products
*
*/

function loadCheckList() {

    var products = JSON.parse(sessionStorage.getItem('products'));
    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));
    var total = 0;

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

            $('.check_tax_inner ul.products').append('<li>\
                        <p class="product_name">' + product.name + ' ' + properties[7] + 'x</p>\
                        <p class="product_price">' + Number(product.price * properties[7]).toFixed(2) + '$</p>\
                    </li>\
            </li>');

            // Update Total
            total = total + product.price * properties[7];
        }
    }

    // Set global State to On
    sessionStorage.setItem("Total", total);

    $('p.product_price_vat').replaceWith('<p class="product_price product_price_vat">' + Number(0.23*total).toFixed(2) + '$</p>');
    $('p.product_price_no_vat').replaceWith('<p class="product_price product_price_no_vat">' + Number(total).toFixed(2) + '$</p>');

}

/*
*
*   Page Data and Animations
*
*/

$(document).ready(function() {

    /*
    *
    *   Navigation
    *
    */

    $(document).on('click', ".confirm_check", function(e) {
        loadTaxInformationScreen();
        updateCheckMenus("check_tax");
        e.preventDefault();
    });

    $(document).on('click', ".confirm_receipt", function(e) {
        loadPayScreen();
        updateCheckMenus("check_pay");
        e.preventDefault();
    });

    $(document).on('click', ".back_pay", function(e) {
        loadTaxInformationScreen();
        updateCheckMenus("check_tax");
        e.preventDefault();
    });
    
    $(document).on('click', ".back_tax", function(e) {
        loadCheckReviewScreen();
        updateCheckMenus("check_review");
        e.preventDefault();
    });

    /*
    *
    *   Tax Information
    *
    */

    $(document).on('click', "button.change_tax", function(e) {
        $("#myCard").addClass("flip");
        e.preventDefault();
    });

    $(document).on('click', "button.save_tax_information", function(e) {

        if ( $('input[name=name]:text').val().length == 0 ) {
            $('input[name=name]').effect( "highlight", {color: 'rgba(255, 0, 0, 0.3)'}, 1000 );
        }

         if ( $('input[name=tin]:text').val().length == 0 ) {
            $('input[name=tin]').effect( "highlight", {color: 'rgba(255, 0, 0, 0.3)'}, 1000 );
        }

        if ( $('input[name=name]:text').val().length == 0 || $('input[name=tin]:text').val().length == 0 ) {
            $("#myCard").effect( "shake" );

        } else {

            // Update Name
            var tax_name = $('input[name=name]').val();
            $("p.tax_name").replaceWith('<p class="tax_name"> <u>Name</u> ' + tax_name + '</p>');

            // Update Tin
            var tin = $('input[name=tin]').val();
            $("p.tax_tin").replaceWith('<p class="tax_tin"> <u>TIN</u> ' + tin + '</p>');

            // Update Enterprise
            var enterprise = $('input[name=enterprise]').val();
            $("p.tax_enterprise").replaceWith('<p class="tax_enterprise"> <u>Enterprise</u> - ' + enterprise + '</p>');

            // Reset
            $('.front h1').replaceWith("<h1>Tax Information</h1>");

            $("#myCard").removeClass("flip");

        }

        e.preventDefault();
    });

    $(document).on('click', "button.cancel_tax_information", function(e) {
        $("#myCard").removeClass("flip");
        e.preventDefault();
    });

    /*
    *
    *   Keypad
    *
    */
    
    var count = 0;
    $(document).on('click', ".digit", function(e) {

        if(count == 0) {
            $("#output").replaceWith('<div id="output"></div>');
        }
        if (count < 4) {
            $("#output").append('<span>*</span>');
            count++;
        }

        e.preventDefault();
    });

    $(document).on('click', ".clear", function(e) {
        $('#output span:last-child').remove();
        count--;

        e.preventDefault();
    });

    $(document).on('click', "#cancel_pin", function(e) {
        if ( !$("#atm").hasClass("inactive") ) {
            $(".authorize_payment").replaceWith('<div class="authorize_payment"><h4 class="icon-price"></h4>Authorize payment of ' + Number(sessionStorage.getItem("Total")).toFixed(2) + '$</div>');
            $("#output").replaceWith('<div id="output">Introduce PIN</div>');
            count = 0;
        }
        e.preventDefault();
    });

    $(document).on('click', "#confirm_pin", function(e) {
        if ( !$("#atm").hasClass("inactive") ) {
            if ( count == 4 ) {
                $(".authorize_payment").replaceWith('<div class="authorize_payment"><h4 class="icon-confirm"></h4>Payment Accepted.</br> Thank you!</div>');
                $("#output").replaceWith('<div id="output"></div>');
                $(".container").fadeTo( "slow", 0.33 );
                $(".total_check").hide();
                $(".container").addClass("inactive");
            }

            else {
                $(".container").effect( "shake" );
                $(".authorize_payment").replaceWith('<div class="authorize_payment"><h4 class="icon-close"></h4>Payment Denied. Please try again.</div>');
                $("#output").replaceWith('<div id="output">Introduce PIN</div>');
                count = 0;
            }
        }

        e.preventDefault();
    });

});