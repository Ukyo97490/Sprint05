async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe");
  let data = await rep.json();
  let result = "";
  for (country in data) {
    let zone = data[country].area.toLocaleString("en-US");
    let ppl = data[country].population.toLocaleString("en-US");
    result += `<tr><td class="h5"> ${data[country].name.official}</td>
       <td> ${zone}</td> 
       <td> ${ppl}</td>
       <td> ${data[country].capital}</td></tr>`;
  }
  document.getElementById("table").innerHTML = result;
}
render();
