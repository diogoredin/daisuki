// Backup

var maincourses = [];
var drinks = [];
var desserts = [];
var orders = [];

    $.ajax({
        type: "GET",
        url: "data/mainCourses.txt",
        dataType: "text",
        success: function(data) {productsCreation(data, maincourses, "products_maincourses");}
     }); 

    $.ajax({
        type: "GET",
        url: "data/drinks.txt",
        dataType: "text",
        success: function(data) {productsCreation(data, drinks, "products_drinks");}
     });

    $.ajax({
        type: "GET",
        url: "data/desserts.txt",
        dataType: "text",
        success: function(data) {productsCreation(data, orders, "products_deserts");}
     });

	 function productsCreation(data, array, name) {
		var lines = data.split(/\r\n|\n/);
		var noLines = lines.length;
		var i;

		for (i = 0; i < noLines; i++) {
			var properties = lines[i].split(',');
			var product = new Product(
				properties[0],
				properties[1],
				properties[2],
				properties[3],
				properties[4],
				properties[5]
			);

			array.push(product);
		}

// Product Object

function Product(name, price, type, time, ingredients, calories, imgSrc) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.time = time;
    this.ingredients = ingredients;
    this.calories = calories;
    this.imgSrc = imgSrc;
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

    this.getIngredients = function () {
        return this.ingredients;
    }

    this.getCalories = function () {
        return this.calories;
    }

    this.getImgSrc = function () {
        return this.imgSrc;
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