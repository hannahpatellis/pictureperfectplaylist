var path = require("path");

module.exports = function(app) {
  
  app.get("/play", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/play.html"));
  });
  app.get("/upload", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/upload.html"));
  });
  app.get("/myaccount", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/history.html"));
  });
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/create.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public", req.url));
  });

};
