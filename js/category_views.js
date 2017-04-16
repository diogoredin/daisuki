/*
*
* category_views.js
*
*/

/*
*
*	LOAD CATEGORY
*
*/

function loadCategory(categoryIndex, ProductAdded, ProductId) {

	// Store Screen
	var location;

	// Get Plate Status
	if ( sessionStorage.getItem("Plate") == "off" ) {
		location = "#page";
	} else {
		location = "#submenu";
	}

	$(".go_back").show();

	// Load the Category page view
	var link = "./order_category.html";

	$(location).load(link, function() {

		$(".go_back").removeClass().addClass("go_back go_back_categories");
		$("div.go_back span").text("Go Back to Menu");

		// Parse the list of products saved on localStorage
		var products = JSON.parse( sessionStorage.getItem('products') );

		var categories, category, category_tag, category_name;

		// Get the list of products for the correct category
		switch (categoryIndex) {
			case 0:
				categories = products[0];
				category_name = "Main Courses";
				category_tag = "maincourses";
				category = categories.maincourses;
				break;
			case 1:
				categories = products[1];
				category_name = "Drinks";
				category_tag = "drinks";
				category = categories.drinks;
				break;
			case 2:
				categories = products[2];
				category_name = "Deserts";
				category_tag = "deserts";
				category = categories.deserts;
				break;
		}

		// Display the category name
		$('.page_title').append('<h1 class="icon-' + category_tag +'">' + category_name + '</h1>');

		// Display all the products from the category
		for (var i = 0; i < category.length; i++) {
			var object = category[i];
			$("ul.restaurant_products").append('\
				<li class="product id_' + object.id + ' ' + category_tag + '">\
           			<div class="product_image">\
               			<img src="./data/images/' + object.photo + '" />\
        			</div>\
            		<h1>' + object.name + '</h1>\
            			<p class="price">' + Number(object.price).toFixed(2) + '$</p>\
        			</li>');
			}

		// Display Category
		$('#screen_order_category').fadeIn(300);

		// Dispay Product Added Message
		if( ProductAdded ) {
			var product = category[ProductId];
			$(".success_message").append('\
				<h4 class="icon-confirm">' + product.name + ' was successfully added to your order.\
				</h4>').show().delay(2000).fadeOut(300);
		}

	});
}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

	/*
	*
	*	BACK BUTTON
	*
	*/

	// Single Category
	$(document).on('click', ".go_back_product", function(e) {

		// Get the category to return to
		var categoryName = $( this ).attr('class').split(' ')[2];

		// Return to the category
		if (categoryName == "maincourses") {
			loadCategory(0);
		} else if (categoryName == "drinks") {
			loadCategory(1);
		} else if (categoryName == "deserts") {
			loadCategory(2);
		}

		e.preventDefault();
	});

	// Categories
	$(document).on('click', ".go_back_categories", function(e) {
		$(this).hide();
		$(this).removeClass().addClass("go_back");
		var link = "./order_categories.html";

		// Store Screen
		var location;

		// Get Plate Status
		if ( sessionStorage.getItem("Plate") == "off" ) {
			location = "#page";
		} else {
			location = "#submenu";
		}

		$(location).load(link, function() {
			$('#screen_order_categories').fadeIn(300);
		});

		e.preventDefault();
	});

	/*
	*
	*	STORES PRODUCTS LOCALLY
	*
	*/

	$.ajax({
        type: "GET",
        url: "./data/products.json",
        dataType: "json",
        success: function(data) {storeData("products", data);}
     });

	 function storeData(name, data) {
		sessionStorage.setItem(name, JSON.stringify(data));
	 }

	/*
	*
	*	CATEGORY VIEW
	*
	*/

	// Load the respective category when clicked
	$(document).on('click', ".restaurant_category", function(e) {

		if ($( this ).hasClass('maincourses')) {
			loadCategory(0);

		} else if ($( this ).hasClass('drinks')) {
			loadCategory(1);

		} else if ($( this ).hasClass('deserts')) {
			loadCategory(2);
		}

		e.preventDefault();
	});

	/*
	*
	*	CATEGORY PRODUCT VIEW
	*
	*/

	// Load the clicked product
	$(document).on('click', ".product", function(e) {

		// Get the class of the product with its id
		var txt = $( this ).attr('class').split(' ')[1];

		// Extract the id from the class
		var id = txt.match(/\d/g);
		id = id.join("");

		// Get the category of the product
		var categoryTag = $( this ).attr('class').split(' ')[2];

		// Return to the category
		if (categoryTag == "maincourses") {
			categoryName = "Main Courses";
		} else if (categoryTag == "drinks") {
			categoryName = "Drinks";
		} else if (categoryTag == "deserts") {
			categoryName = "Deserts";
		}

		// Update back button
		$(".go_back").removeClass("go_back_categories").addClass("go_back_product " + categoryTag );
		$("div.go_back span").text("Go Back to " + categoryName );

		// Load the Product page view
		var link = "./order_product.html";

		// Store Screen
		var location;

		// Get Plate Status
		if ( sessionStorage.getItem("Plate") == "off" ) {
			location = "#page";
		} else {
			location = "#submenu";
		}

		// Load Product Page
		$(location).load(link, function() {
			loadProduct(id, categoryTag);
		});

		e.preventDefault();
	});

});