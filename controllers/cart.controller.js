var db = require('../db');
module.exports.addToCart = (req, res) => {
    var productID = req.params.productID;
    var sessionID = req.signedCookies.sessionID;

    if (!sessionID) {
        res.redirect('/products');
        return;
    }

    var count = db.get("sessions")
        .find({ id: sessionID })
        .get('cart.' + productID, 0)
        .value();
        
    db.get("sessions")
        .find({ id: sessionID })
        .set("cart." + productID, count + 1)
        .write();
    res.redirect("/products");
}