//#########################################
//
// Funktionalitet här för att alltid fylla på med fem särskilda filmer vid
// omstart av databasen (server.js).
// OBS - den senaste SQL-initieringsfilen (fr 28 april) måste läsas in först!
//
//#########################################

// Använder chalk för bättre färger i consolen

const fyll_paa_med_filmer = () => {
  const connection = require("./gitignorefolder/connection");
  const mysql = require("mysql");

  //#################################################
  // Först hämtar vi allt (alla titlar) som ligger i databasen nu  - dvs GET

  const express = require("express");
  const app = express();

  //app.get("/api/filmer", (req, res) => {
  //
  let sql = "SELECT titel FROM film";
  connection.query(sql, function (err, results, fields) {
    console.table(results);

    //###################################################
    // Sedan lägger vi in nya med INSERT - använd loop för
    // att undvika de som redan ligger i databasen

    let befintliga_titlar = {};

    for (var j in results) {
      console.log(j + results[j]["titel"]);
      befintliga_titlar[results[j]["titel"]] = 1;
    }

    console.table(befintliga_titlar);

    for (let i = 0; i < en_filmlista.length; i++) {
      if (en_filmlista[i][0] in befintliga_titlar) {
        // #### Om filmtiteln redan finns med: hoppa över

        console.log(
          chalk.white.bgRed.bold(
            en_filmlista[i][0] + " ligger redan i databasen, hoppar över"
          )
        );
      } else {
        // #### Om filmen ej finns med - lägg till

        console.log(
          chalk.white.bgGreen.bold(
            en_filmlista[i][0] + " ligger ej i databasen, lägger till"
          )
        );

        let params = [
          en_filmlista[i][0],
          en_filmlista[i][1],
          en_filmlista[i][2],
          en_filmlista[i][3],
          en_filmlista[i][4],
        ];
        console.log(en_filmlista[i]);
        let sql =
          "INSERT INTO film (titel, filmKategoriId, filmHuvudrollsinnehavareId,filmLandId, filmRegissoerId) VALUES(?,?,?,?,?)";

        connection.query(sql, params, function (error, results, fields) {
          if (error) throw error;
        });
      }
    }
  });
};

var en_filmlista = [
  ["Nyckeln till frihet", 1, 13, 1, 11],
  ["Gudfadern", 1, 14, 1, 5],
  ["The Dark Knight", 5, 15, 1, 12],
  ["12 edsvurna män", 1, 16, 1, 13],
  ["Schindler's list", 1, 17, 1, 14],
];

module.exports = fyll_paa_med_filmer;

// TESTAR bara
