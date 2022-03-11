async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe"); //récupère le contenu d'un lien

  let data = await rep.json(); //transforme le contenu du lien en json
  let result = "";
  // for (country in data) {
  //   result += `<li> ${data[country].name.official} </li>`;
  // }
  console.log(rep);
  if ((rep.ok = true)) {
    for (country in data) {
      result += `<li> ${data[country].name.official} </li>`;
    }
  } else {
    rep.catch((error) => alert("Erreur : " + error));
  }

  document.getElementById("list").innerHTML = result; //rajouter l'élément dans une liste
}
render();

const reloadUsingLocationHash = () => {
  window.location.hash = "reload";
};
window.onload = reloadUsingLocationHash();
// async function render() {
//   let rep = await fetch("https://restcountries.com/v3.1/region/europe");
//   let data = await rep.json();
//   let result = "";
//   for (pays in data) {
//     result += `<li> ${data[pays].name.official} </li>`;
//   }
//   document.getElementById("list").innerHTML = result;
// }
// render();
