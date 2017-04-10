function loadCurrentOrder() {

    var NoOrders = parseInt(sessionStorage.getItem("NoOrders"));
    var i;

    console.log("OLA")

    for (i = 0; i < NoOrders; i++) {
        var properties = JSON.parse(sessionStorage.getItem(i));
        var lenght = properties.lenght;
        var state = parseInt(properties[5]);
        console.log(properties);
    }

    $('ul.order_products')
}