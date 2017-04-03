// Product Object

function Product(name, price, type, time) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.time = time;
    this.numberOfReviews = 0;
    this.totalClassification = 0;
    this.reviews = [];

    this.getName = function () {
        return this.name;
    }

    this.getPrice = function () {
        return this.price;
    }
    
    this.getType = function () {
        return this.type;
    }

    this.getTime = function () {
        return this.time;
    }

    this.getClassification = function () {
        return this.totalClassification / this.numberOfReviews;
    }

    this.getNumberOfReviews = function () {
        return this.numberOfReviews;
    }

    this.getReviews = function () {
        return this.reviews;
    }

    this.addClassification = function (classification) {
        this.totalClassification += classification;
        this.numberOfReviews ++;
    }

    this.addReview = function (review) {
        this.reviews.push(review);
    }
}