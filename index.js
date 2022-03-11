async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe"); //récupère le contenu d'un lien

  let data = await rep.json(); //transforme le contenu du lien en json
  let result = "";

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
