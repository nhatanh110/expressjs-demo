const shortid = require("shortid");
var db = require('../db');

module.exports = (req, res, next) => {
    if(!req.signedCookies.sessionID) {
        var sessionID = shortid.generate();
        res.cookie("sessionID", sessionID, { 
            signed: true 
        });
        db.get("sessions").push({ 
            id: sessionID,
        })
          .write();
    }
    next();
}