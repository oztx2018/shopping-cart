var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true })

var products = [
    new Product({
        imagePath: 'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/6045301_dtlet8152.jpg?itok=p8e70RY3',
        title: 'Fajitas',
        description: 'Taqueria sauce, fajita chicken, sauteed red pepper, green pepper, onion, cilantro and mozzarella',
        price: 9.99
    }),
    new Product({
        imagePath: 'https://pinchofyum.com/wp-content/uploads/Best-Easy-Pasta-Salad-Recipe.jpg',
        title: 'Pasta Salad',
        description: 'Steak, Bell Pepper, Green Beans, Tomatoes, Carrot',
        price: 6.99
    }),
    new Product({
        imagePath: 'https://www.chelseasmessyapron.com/wp-content/uploads/2014/02/Best-Tomato-Basil-Soup5.jpg',
        title: 'Creamy Tomato Soup',
        description: 'Tomato, heavy cream, water, crutons, basil',
        price: 4.99
    }),
    new Product({
        imagePath: 'https://www.seriouseats.com/recipes/images/2013/04/040313-246922-Sunday-Supper-Jamaican-Beef-StewB.jpg',
        title: 'Beef Stew with Rice',
        description: 'Beef, tomato sauce, rice, vegetable oil',
        price: 12.99
    }),
    new Product({
        imagePath: 'https://www.thespruceeats.com/thmb/fy-qx3qHgOCqC1WTzPWEih-9RFE=/2048x1365/filters:no_upscale():max_bytes(150000):strip_icc()/southern-oven-fried-chicken-3058647-5_preview-5b0ec6ecba61770036491ed7.jpeg',
        title: 'Fried Chicken',
        description: 'Chicken',
        price: 9.99
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Brocoli_and_cheddar_soup_with_focaccia.jpg',
        title: 'Brocolli Chedar Soup',
        description: 'Brocolli, chedar, olive oil',
        price: 4.99
    }),
    new Product({
        imagePath: 'https://food-images.files.bbci.co.uk/food/recipes/how_to_make_sourdough_08213_16x9.jpg',
        title: 'Sourdough Bread',
        description: 'flour, vegetable oil, sourdough yeast,',
        price: 12
    }),
    new Product({
        imagePath: '',
        title: 'Chocolate Chips Cookie',
        description: 'Butter, sugar, eggs, vanilla extract, flour',
        price: 6.99
    }),
    new Product({
        imagePath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg',
        title: 'Fruit Salad',
        description: 'Blackberry, strawberry, grapes, kiwii, watermelon',
        price: 6.99
    }),
    new Product({
        imagePath: 'https://www.google.com/search?q=homemade+tortilla+chips&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjx0dyTw_vfAhUSKa0KHSa1A30Q_AUIECgD&biw=1099&bih=656#imgrc=pTMNkSPYtyI9WM:',
        title: 'Tortilla Chips',
        description: 'Corn Tortillas, Canola Oil, Salt',
        price: 4.99
    }),
    new Product({
        imagePath: 'https://www.google.com/search?q=tuna+salad&safe=active&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiGqP37w_vfAhVNEawKHYCcB-wQ_AUIDigB&biw=1099&bih=656#imgrc=Kka1e7HxQUpuhM:',
        title: 'Tuna Salad',
        description: 'Tuna, carrot, avacado, mayonnaise',
        price: 6.99
    }),
    new Product({
        imagePath: 'https://www.google.com/search?q=banana+bread&safe=strict&hl=en&authuser=0&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjG-pDBxfvfAhXeAWMBHaeTCxEQ_AUIDygC&biw=1099&bih=656#imgrc=vU4uRJMz0aHQmM:',
        title: 'Banana bread',
        description: 'flour, baking soda, butter, brown sugar, salt',
        price: 7.99
    }),
]; 

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done;
        if (done===products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
