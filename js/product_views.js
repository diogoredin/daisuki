/*
*
* product_view.js
*
*/

/*
*
*	LOAD PRODUCT
*
*/

function loadProduct(id, categoryName) {

	// Parse the list of products saved on localStorage
	var products = JSON.parse( sessionStorage.getItem('products') );

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

	var object = category[id];

	// Display the product name
	$('.page_title').append('<h1 class="icon-' + category_tag +'">' + category_name + ' > ' + object.name + '</h1>');

	// Display the confirm button
	$('.picker_configure').append('<button class="confirm ' + categoryName + '" id=\"' + object.id + '\"> Add to Order </button>')

	// Update the Product Image
	$('.center').css( "background", "#ffffff url('data/images/" + object.photo + "') no-repeat scroll 50% 50% / 100px 100px" );

	// Display Product
	$('#screen_product').fadeIn(300);

	for (var key in object.nutricionalInfo) {
		$('table.nutricional').append("<tr><td><strong>" + key + "</strong></td>\
                						<td>" + object.nutricionalInfo[key] + "</td></tr>");
	}

	$('p.desc').append(object.info);
}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

	// Update Number of Orders
	$('#submenu ul li.order_current').find("span").text(parseInt(sessionStorage.getItem("NoOrders")));

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

	// Plus Button
	$(document).on('click', ".picker_configure ul li button.plus", function(e) {
		var value = parseInt($(this).parent().find("p span").text()) + 1;
		$(this).parent().find("p span").text(value);

		if ( value >= 0 ) {
			$(this).parent().find("button.minus").removeClass("disable");
		}

	});

	// Minus Button
	$(document).on('click', ".picker_configure ul li button.minus", function(e) {

		var value = parseInt($(this).parent().find("p span").text()) - 1;

		if ( value == 0 ) {
			$(this).addClass("disable");
			$(this).parent().find("p span").text("0");
		} else if ( value > 0 ) {
			$(this).removeClass("disable");
			$(this).parent().find("p span").text(value);
		}
	
	});

	$(document).on('click', "button.confirm", function(e) {
		var NoOrders = sessionStorage.getItem("NoOrders");
		var category = $( this ).attr('class').split(' ')[1]
		// [Product ID, {0: MainCourses, 1: Drinks, 2: Deserts}, Time of Creation (to be changed later), 
		//	Status, Review, Classification, {-1: Removed, 0: Added not confirmed, 1:Ordered}]
		var orderProperties = [e.target.id, category, 0, "", "", 0, 0];
		sessionStorage.setItem(NoOrders, JSON.stringify(orderProperties));
		sessionStorage.setItem("NoOrders", parseInt(NoOrders) + 1);
		// Update number products (+1)
        var NoProductsInOrder = parseInt(sessionStorage.getItem("NoProductsInOrder")) + 1;
        sessionStorage.setItem("NoProductsInOrder", NoProductsInOrder);

		// Animation and Submenu Increase
		var menu_item = $('#submenu ul li.order_current');
		menu_item.find("span").text(NoProductsInOrder);

		// Load Category
		if (category == "maincourses") {
			categoryIndex = 0;
		} else if (category == "drinks") {
			categoryIndex = 1;
		} else if (category == "deserts") {
			categoryIndex = 2;
		} loadCategory(categoryIndex, true, e.target.id);

		e.preventDefault();

	});

});