/*
*
* check.js
*
*/

$(document).ready(function() {

    var count = 0;
    $(document).on('click', ".digit", function(e) {

        var num = ($(this).clone().children().remove().end().text());
        if (count < 11) {
            $("#output").append('<span>' + num.trim() + '</span>');
            count++;
        }

        e.preventDefault();
    });

    $(document).on('click', ".clear", function(e) {
        $('#output span:last-child').remove();
        count--;

        e.preventDefault();
    });

});