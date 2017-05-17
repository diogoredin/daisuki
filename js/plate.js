/*
*
* plate.js
*
*/

/*
*
*       INSERT PLATE
*
*/

function insertPlate() {

        if ( sessionStorage.getItem("Plate") == "off" ) {

                // Include Stylesheet
                $('head').append('<link href="css/plate.css" rel="stylesheet" />');

                // Set global State to On
                sessionStorage.setItem("Plate", "on");

                // Include Plate
                $('#page').replaceWith('<div id="page"></div>');
                $('#page').append('<div id="plate"><img src="graphics/plate.svg" /></div>').hide().fadeIn(1000);
                $('#submenu').replaceWith('<div id="submenu"></div>');
                $('#menu ul').children("li.active").trigger('click');

        }

}

/*
*
*       REMOVE PLATE
*
*/

function removePlate() {

        if ( sessionStorage.getItem("Plate") == "on" ) {

                // Remove Plate
                $('#plate').fadeOut(1000,function(){ 

                        // Include Stylesheet
                        $('link[rel=stylesheet][href~="css/plate.css"]').remove();

                        // Set global State
                        sessionStorage.setItem("Plate", "off");

                        // Remove Plate
                        $('#page').replaceWith('<div id="page"></div>');
                        $('#submenu').replaceWith('<div id="submenu"></div>');
                        $('#menu ul').children("li.active").trigger('click');
                });

        }

}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

        // Starts by Default without a Plate
        sessionStorage.setItem("Plate", "off");

        /*
	*
	*	SLIDE SIMULATION CONTROLS
	*
	*/

        $(document).on('click', ".toggle_simulation_controls", function(e) {
		$("#simulation_controls").slideToggle('fast', function() {
                        $(".toggle_simulation_controls").toggleClass('open', $(this).is(':visible'));
		});

                e.preventDefault();
        });

        // Insert Plate
        $(document).on('click', ".insert_plate", function(e) {
                $(this).addClass('open');
                $(".remove_plate").removeClass('open');
                insertPlate();

                e.preventDefault();
        });

        // Remove Plate
        $(document).on('click', ".remove_plate", function(e) {
                $(this).addClass('open');
                $(".insert_plate").removeClass('open');
                removePlate();

                e.preventDefault();
        });

        // Remove Plate
        $(document).on('click', ".enable_nfc", function(e) {
                $(".authorize_payment").replaceWith('<div class="authorize_payment"><h4 class="icon-confirm"></h4>Payment Accepted.</br> Thank you!</div>');
                $("#output").replaceWith('<div id="output"></div>');
                $(".container").fadeTo( "slow", 0.33 );
                $(".total_check").hide();
                $(".container").addClass("inactive");

                e.preventDefault();
        });

        /*
	*
	*	GO BACK FUNCTIONALITY
	*
	*/

        // Single Category
	$(document).on('click', ".go_back_menu_plate", function(e) {

                // Load the Menu
	        $('#submenu').load('menu_order.html', function(data){
                        $('#submenu').hide().fadeIn(300);
                        $('#submenu ul').children("li.active").toggleClass("active");

                        // Update Number of Orders
			var NoProductsInOrder = parseInt(sessionStorage.getItem("NoProductsInOrder"));
			var menu_item = $('#submenu ul li.order_current');
		
			menu_item.find("span").text(parseInt(NoProductsInOrder));
		        e.preventDefault();
                });
	});

        // Single Category
	$(document).on('click', ".go_back_product_plate", function(e) {

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
	$(document).on('click', ".go_back_categories_plate", function(e) {

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

        // Categories
	$(document).on('click', ".go_back_review_plate", function(e) {

		// Load the Page
		$('#submenu').load( 'order_review.html', function(data){
			$('#screen_order_review').fadeIn(300);
			loadOrderReview();
    	        });

                $(this).hide();
		e.preventDefault();
	});

});