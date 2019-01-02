require("dotenv").config();

var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// Mongoose
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/user.router');
var authRoute = require("./routes/auth.router");
var productRoute = require("./routes/product.router");
var cartRoute = require("./routes/cart.router");
var transferRoute = require("./routes/transfer.router");

var middleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
var csrfProtection = csrf({ cookie: true });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    });
});
app.use("/users", middleware.requireAuth, userRoute);
app.use("/auth", authRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/transfer", middleware.requireAuth, csrfProtection, transferRoute);

app.listen(3000, () => {
    console.log('App listening on port 3000!!!!!!');
});