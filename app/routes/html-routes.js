var path = require("path");
module.exports = function (app, passport) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

    app.get('/signup', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get('/signin', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });

    app.get('/upload', isLoggedIn, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/upload.html"));
    });

    app.get('/play', isLoggedIn, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/play.html"));
    });

    app.get('/history', isLoggedIn, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/history.html"));
    });

    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/');
        });
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public", req.url));
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}