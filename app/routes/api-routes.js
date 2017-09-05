var path = require("path");

module.exports = function (app, passport) {

    app.post('/signup', passport.authenticate('local-signup',
        {
            successRedirect: '/upload',
            failureRedirect: '/signup'
        }
    ));
    app.post('/signin', passport.authenticate('local-signin',
        {
            successRedirect: '/upload',
            failureRedirect: '/signin'
        }
    ));
    app.post('/upload', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/play.html"));
    });
}