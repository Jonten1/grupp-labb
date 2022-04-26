function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const a = document.getElementById("film");
const url = "http://localhost:3000/api/filmer";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
    console.log("Visa första i json-objektet: " + data[0].titel);
    let film = data;
    return film.map(function (data) {
      let li = createNode("li");
      li.innerHTML = data.titel;
      append(a, li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
