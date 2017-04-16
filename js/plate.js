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
                $('#menu ul').children("li.active").toggleClass("active");

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
                        $('#menu ul').children("li.active").toggleClass("active");

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

});