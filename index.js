async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe");
  let data = await rep.json();
  let result = "";
  for (pays in data) {
    result += `<li> ${data[pays].name.official} </li>`;
  }
  document.getElementById("list").innerHTML = result;
}
render();
