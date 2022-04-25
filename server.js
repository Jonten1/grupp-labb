const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./gitignorefolder/connection");

const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
let db;

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    // Namnet på collection tror jag
    db = client.db("?");
    books = db.collection("?");
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.static("public"));
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/***********************
PUT
**********************/
app.put("/api/movies", (req, res) => {
  // Samma "problem" som i post, just nu måste man välja mellan det som finns
  let sql =
    "UPDATE bok SET titel = ?, filmKategoriId = ?, filmHuvudrollsinnehavareId = ?,filmLandId = ?, filmRegissoerId = ? WHERE filmId = ?";
  let params = [
    req.body.titel,
    req.body.filmKategoriId,
    req.body.filmHuvudrollsinnehavareId,
    req.body.filmLandId,
    req.body.filmRegissoerId,
    req.body.filmId,
  ];
  connection.query(sql, params, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

/***********************
POST
**********************/

app.post("/api/nyfilm", (req, res) => {
  //res.send('Här ska det komma in data om en ny film som lagts till')

  /*
  INSERT INTO film (titel, filmKategoriId, filmHuvudrollsinnehavareId,filmLandId, filmRegissoerId)
  VALUES ('Hajen', 7, 1, 1, 2);
  */

  let sql =
    "INSERT INTO film (titel, filmKategoriId, filmHuvudrollsinnehavareId,filmLandId, filmRegissoerId) VALUES(?,?,?,?,?)";

  let params = ["Min nya film", 5, 3, 2, 2];
  connection.query(sql, params, function (error, results, fields) {
    if (error) throw error;
    //res.json(results)
    res.send("FILM TILLAGD");
  });
});

// filmId INT NOT NULL AUTO_INCREMENT,
// titel VARCHAR(50) NOT NULL ,
// filmKategoriId INT NOT NULL ,
// filmLandId INT NOT NULL,
// filmHuvudrollsinnehavareId INT NOT NULL,
// filmRegissoerId INT, NOT NULL,

/***********************
GET för ALLA filmer (utan JOIN), dvs visar bara index för värdena i andra tabeller
**********************/

app.get("/api/filmer", (req, res) => {
  //res.send('Här ska vi visa våra skivor')
  let sql = "SELECT * FROM film";
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    res.json(results);
  });
});

/*
/api/get_laender
/api/get_regissoerer
/api/get_huvudrollsinnehavare
/api/get_kategorier
*/
/***********************
GET för de andra tabellerna
**********************/
// ## LÄNDER
app.get("/api/get_laender", (req, res) => {
  let sql = "SELECT * FROM land";
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    res.json(results);
  });
});
// ## REGISSÖRER
app.get("/api/get_regissoerer", (req, res) => {
  let sql = "SELECT * FROM regissoer";
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    res.json(results);
  });
});
// ## HUVUDROLLSINNEHAVARE
app.get("/api/get_huvudrollsinnehavare", (req, res) => {
  let sql = "SELECT * FROM huvudrollsinnehavare";
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    res.json(results);
  });
});
// ## KATEGORIER
app.get("/api/get_kategorier", (req, res) => {
  let sql = "SELECT * FROM kategori";
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    res.json(results);
  });
});
