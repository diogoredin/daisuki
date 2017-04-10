/*
*
* product_view.js
*
*/

// On Page Load
function loadProduct(id, categoryName) {

	// Parse the list of products saved on localStorage
	var products = JSON.parse( localStorage.getItem('products') );

	// Get the list of products for the correct category
	var categories, category, category_tag, category_name;

	switch (categoryName) {
		case "maincourses":
			categories = products[0];
			category = categories.maincourses;
			category_name = "Main Courses";
			category_tag = "maincourses";
			break;
		case "drinks":
			categories = products[1];
			category = categories.drinks;
			category_name = "Drinks";
			category_tag = "drinks";
			break;
		case "deserts":
			categories = products[2];
			category = categories.deserts;
			category_name = "Deserts";
			category_tag = "deserts";
			break;
	}

	// Find the product with the matching id
	for (var i = 0; i < category.length; i++) {
		var object = category[i];

		// Found it
		if ( object.id == id ) {
			break;
		}

	}

	// Display the product name
	$('.page_title').append('<h1>' + object.name + '</h1>');

	//Display the confirm button
	$('.picker_configure').append('<button class="confirm" id=\"' + object.id + '\"> Add to Order </button>')

	// Update the Product Image
	$('.center').css( "background", "#ffffff url('data/images/" + object.photo + "') no-repeat scroll 50% 50% / 100px 100px" );

	// Display Product
	$('#screen_product').fadeIn(300);

}

$(document).ready(function() {

	// Circular Menu
	$(document).on('click', ".circle-menu ul li a", function(e) {
		$(".circle-menu>ul>li.active").removeClass("active");
		$(this).parent().addClass('active');

		var option = $(this).attr('href');
		$('.picker_details').each(function() {
			
			if (!$(this).hasClass('picker_' + option)) {
				$(this).hide();
			} else {
				$(this).show();
			}

		});

		e.preventDefault();
	});

	$(document).on('click', "button.confirm", function(e) {
		var NoOrders = localStorage.getItem("NoOrders");
		// [Product ID, Time of Creation (to be changed later), 
		//	Status, Review, Classification, {-1: Removed, 0: Added not confirmed, 1:Ordered}]
		var orderProperties = [e.target.id, 0, "", "", 0, 0];
		localStorage.setItem(NoOrders, JSON.stringify(orderProperties));
		localStorage.setItem("NoOrders", parseInt(NoOrders) + 1);
	});

});