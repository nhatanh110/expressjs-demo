var db = require('../db');
var shortid = require("shortid");

module.exports.create = (req, res, next) => {
    res.render("transfer/create", {
        csrfToken: req.csrfToken()
    });
    
}

module.exports.postCreate = (req, res, next) => {
    req.body.id = shortid.generate();
    req.body.amount = parseInt(req.body.amount);
    req.body.userID = req.signedCookies.userID;
    db.get('transfer').push(req.body).write();
    res.redirect('/transfer/create');
}