/**************************
        LAND - hämtar för att fylla dropdownmenyer mm.
      **************************/
fetch("http://localhost:3000/api/get_laender")
  .then((resp) => resp.json())
  .then(function (data) {
    console.log("#data#" + data);
    console.log(data[0]);
    console.log("¤¤¤¤Visa första i json-objektet för LAND: " + data[0].landId);
    let laender = data;
    let ll = document.querySelector("#landlista");
    for (var i in laender) {
      console.log(" ######" + laender[i].landNamn);
      let op = document.createElement("option");
      op.innerHTML = laender[i].landNamn;
      ll.appendChild(op);

      // Lägg i objekt för att kunna slå upp id från land vid POST
      indexobjekt_land[laender[i].landNamn] = laender[i].landId;
    }
    indexobjekt_land["NAESTA_INDEX"] = Object.keys(indexobjekt_land).length + 1;
  });

/**************************
        REGISSÖRER - hämtar för att fylla dropdownmenyer mm.
      **************************/
fetch("http://localhost:3000/api/get_regissoerer")
  .then((resp) => resp.json())
  .then(function (data) {
    console.log("#data#" + data);
    console.log(data[0]);
    // console.log(
    //   "¤¤¤¤Visa första i json-objektet för LAND: " + data[0].landId
    // );
    let regs = data;
    let rl = document.querySelector("#regissörlista");
    for (var i in regs) {
      //console.log(" ######"+ rl[i].regissoerNamn);
      let op = document.createElement("option");
      op.innerHTML = regs[i].regissoerNamn;
      rl.appendChild(op);

      // Lägg i objekt för att kunna slå upp id från land vid POST
      indexobjekt_regissoer[regs[i].regissoerNamn] = regs[i].regissoerId;
    }
    indexobjekt_regissoer["NAESTA_INDEX"] =
      Object.keys(indexobjekt_regissoer).length + 1;
  });

/**************************
        HUVUDROLLSINNEHAVARE - hämtar för att fylla dropdownmenyer mm.
      **************************/
fetch("http://localhost:3000/api/get_huvudrollsinnehavare")
  .then((resp) => resp.json())
  .then(function (data) {
    console.log("#data#" + data);
    console.log(data[0]);

    let huvs = data;
    let hl = document.querySelector("#huvudrolllista");
    for (var i in huvs) {
      let op = document.createElement("option");
      op.innerHTML = huvs[i].huvudrollNamn;
      hl.appendChild(op);

      // Lägg i objekt för att kunna slå upp id från land vid POST
      indexobjekt_huvudroll[huvs[i].huvudrollNamn] = huvs[i].huvudrollId;
    }
    indexobjekt_huvudroll["NAESTA_INDEX"] =
      Object.keys(indexobjekt_huvudroll).length + 1;
  });

/**************************
        FILMKATEGORI - hämtar för att fylla dropdownmenyer mm.
      **************************/
fetch("http://localhost:3000/api/get_kategorier")
  .then((resp) => resp.json())
  .then(function (data) {
    console.log("#data#" + data);
    console.log(data[0]);

    let kats = data;
    let kl = document.querySelector("#kategorilista");
    for (var i in kats) {
      let op = document.createElement("option");
      op.innerHTML = kats[i].kategoriNamn;
      kl.appendChild(op);

      // Lägg i objekt för att kunna slå upp id från land vid POST
      indexobjekt_kategori[kats[i].kategoriNamn] = kats[i].kategoriId;
    }
    indexobjekt_kategori["NAESTA_INDEX"] =
      Object.keys(indexobjekt_kategori).length + 1;
  });
