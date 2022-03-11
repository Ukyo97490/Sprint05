let data = await rep.json();
let result = "";
console.log(rep);
if ((rep.ok = true)) {
  for (country in data) {
    result += `<li> ${data[country].name.official} </li>`;
  }
} else {
  rep.catch((error) => alert("Erreur : " + error));
}
document.getElementById("list").innerHTML = result;

render();
const reloadUsingLocationHash = () => {
  window.location.hash = "reload";
};
window.onload = reloadUsingLocationHash();
