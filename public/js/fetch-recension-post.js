// Den här fetch för att posta till MongoDB (lägga till recension) utgår från
// exemplet "fetch-book-post.js"

const formu = document.querySelector("#recensionsformulaeret");

function cl(X) {
  console.log(X);
}

function nyrecension(event) {
  event.preventDefault();

  let id = String(new Date()).substring(0, 27);
  let filmtitel = g_filmtitel; //
  let recensionsrubrik = document.querySelector("#rrubrik").value;
  let recensionsfoerfattare = document.querySelector("#rnamn").value;
  let recensionsdatum = String(new Date()).substring(0, 17);
  let recensionstext = document.querySelector("#rt").value;
  let recensionsbetyg = document.querySelector("#rbetyg").value;

  // cl(id);
  // cl(filmtitel);
  // cl(recensionsrubrik);
  // cl(recensionsfoerfattare);
  // cl(recensionsdatum);
  // cl(recensionstext);
  // cl(recensionsbetyg);

  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({
        id: String(new Date()).substring(0, 27),
        filmtitel: g_filmtitel, //
        recensionsrubrik: document.querySelector("#rrubrik").value,
        recensionsfoerfattare: document.querySelector("#rnamn").value,
        recensionsdatum: String(new Date()).substring(0, 17),
        recensionstext: document.querySelector("#rt").value,
        recensionsbetyg: document.querySelector("#rbetyg").value,

        // app.post("/api/laegg_till_recension", (req, res) => {
        //   let i = req.body.id;
        //   let ft = req.body.filmtitel;
        //   let rr = req.body.recensionsrubrik;
        //   let rf = req.body.recensionsfoerfattare;
        //   let rd = req.body.recensionsdatum;
        //   let rtxt = req.body.recensionstext;
        //   let b = req.body.recensionsbetyg;
      }), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  postData("http://localhost:3000/api/laegg_till_recension").then((data) => {
    console.log(data); // JSON data parsed by `response.json()` call
  });
}

formu.addEventListener("submit", nyrecension, false);
