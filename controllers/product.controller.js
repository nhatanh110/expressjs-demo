var Product = require('../models/product.model');

module.exports.index = async (req, res) => {
    // var page = parseInt(req.query.page) || 1;
    // var perPage = 8; // x
    // var start = (page - 1) * perPage;
    // var end = page * perPage;
    // res.render('products/index', {
    //     products: db.get('products').value().slice(start, end)
    // });
    var products = await Product.find();
    res.render('products/index', {
        products: products
    });
} 

