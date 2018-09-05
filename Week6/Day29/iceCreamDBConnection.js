var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "bootcamp",
  database: "playlist_dB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});
function afterConnection() {
  connection.query("SELECT * FROM playlist1 WHERE genre=?",["Lation Rap"], function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}