/*
*
* app.js
*
*/

$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "data/products.json",
        dataType: "json",
        success: function(data) {storeData("products", data);}
     });

	 function storeData(name, data) {
		localStorage.setItem(name, JSON.stringify(data));
	 }

     localStorage.setItem("NoOrders", "0");

});