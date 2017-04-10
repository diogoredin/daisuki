/*
*
* category_views.js
*
*/

$(document).ready(function() {

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

	function loadCategory(categoryIndex) {

		// Load the Category page view
		var link = "./order_category.html";

		$('#page').load(link, function() {

			// Parse the list of products saved on localStorage
			var products = JSON.parse( localStorage.getItem('products') );

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

			$('#screen_order_category').fadeIn(300);

		});

	 }

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
		var categoryName = $( this ).attr('class').split(' ')[2];

		// Load the Product page view
		var link = "./order_product.html";

		// Load Product Page
		$('#page').load(link, function() {
			loadProduct(id, categoryName);
		});

		e.preventDefault();
	});

});