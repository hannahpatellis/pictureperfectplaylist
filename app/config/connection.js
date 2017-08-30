var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ozibzks0wsd0s9gx",
  password: "qj78jsdsfxgouxgr",
  database: "pictureperfectplaylist"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
