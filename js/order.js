// Order Object

function Order() {
    this.creationTime = $.now();
    this.status = "Order Placed";

    this.getStatus = function () {
        return this.status;
    }
}

