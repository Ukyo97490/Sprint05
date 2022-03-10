async function render() {
  let rep = await fetch("https://restcountries.com/v3.1/region/europe");
  let data = await rep.json();
  let result = "";
  for (country in data) {
    let zone = data[country].area.toLocaleString("en-US");
    let ppl = data[country].population.toLocaleString("en-US");
    result += `<tr><td class="h5 table-responsive"> ${data[country].name.official}</td>
       <td class="text-end table-responsive"> ${zone}</td> 
       <td class="text-end table-responsive "> ${ppl}</td>
       <td class="table-responsive"> ${data[country].capital}</td></tr>`;
  }
  document.getElementById("table").innerHTML = result;
}
render();
