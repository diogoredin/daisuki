// Order Object

function Order(product) {
    this.creationTime = $.now();
    this.status = "Order Placed";
    this.product = product;
    this.classification = 0;

    this.getStatus = function () {
        return this.status;
    }

    this.setStatus = function (status) {
        // SEE IF THE ARGUMENT IS VALID
        if (true) {
            this.status = status;
        }
    }

    this.getRemainingTime = function () {
        if (this.status == "Served") { 
            return 0;         
        }
        else {
            var diff = this.creationTime - $.now();
            return this.product.getTime() + Math.floor(diff / 1000);
        }
    }

    this.getClassification = function () {
        return this.classification;
    }

    this.setClassification = function (classification) {
        if (Number.isInteger(classification)) {
            if (classification > 0 && classification <= 5) {
                this.classification = classification;
                this.product.addClassification(classification);
            }
        }
    }

    this.addReview = function (review) {
        this.product.addReview(review);
    }

    this.getPrice = function () {
        return this.product.getPrice();
    }

    this.getName = function () {
        return this.product.getName();
    }

    this.getAverageClassification = function () {
        return this.product.getClassification();
    }
 
    this.getReviews = function () {
        return this.product.getReviews();
    }
}