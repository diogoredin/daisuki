function loadCurrentOrder() {

    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));
    var i;
    var products = JSON.parse(sessionStorage.getItem('products'));

    for (i = 0; i < NoOrders; i++) {
        var properties = JSON.parse(sessionStorage.getItem(i));
        var lenght = properties.lenght;
        var state = parseInt(properties[5]);
        if (state == 0) {
            var categoryName = properties[1];
            var productId = properties[0];
            var product;


            switch (categoryName) {
                case "maincourses":
                    product = products[0].maincourses[productId];
                    break;
                case "drinks":
                    product = products[1].drinks[productId];
                    break;
                case "deserts":
                    product = products[2].deserts[productId];
                    break;
            }            
        
        

        }
    }
}