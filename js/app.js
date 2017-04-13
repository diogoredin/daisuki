/*
*
* app.js
*
*/

$(document).ready(function() {

        $.ajax({
                type: "GET",
                url: "./data/products.json",
                dataType: "json",
                success: function(data) {storeData("products", data);}
        });

        function storeData(name, data) {
                sessionStorage.setItem(name, JSON.stringify(data));
	}

     sessionStorage.setItem("NoOrders", "0");
     sessionStorage.setItem("NoProductsInOrder", "0");

});