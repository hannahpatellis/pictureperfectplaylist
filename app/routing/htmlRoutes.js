var path = require("path");

module.exports = function(app) {
  
  app.get("/play", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/play.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public", req.url));
  });

};
