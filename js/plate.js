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
                $('#page').append('<div id="plate"><img src="graphics/plate.svg" /></div>').hide().fadeIn(1000);

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
                        $('#plate').replaceWith();

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
		        $("img.toggle_simulation_icon").toggleClass('open', $(this).is(':visible'));
                        $(".toggle_simulation_controls").toggleClass('open', $(this).is(':visible'));
		});

                e.preventDefault();
        });

        // Insert Plate
        $(document).on('click', ".insert_plate", function(e) {
                insertPlate();

                e.preventDefault();
        });

        // Remove Plate
        $(document).on('click', ".remove_plate", function(e) {
                removePlate();

                e.preventDefault();
        });

});