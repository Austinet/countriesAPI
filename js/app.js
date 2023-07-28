// Fetch data from API
let url = "https://restcountries.com/v3.1/all"
let data = []

async function getData(url) {
  let response = await fetch(url)
  data = await response.json()
  renderDB(data)
}
getData(url)


//display countries
let countries = document.getElementById('countries')
function renderDB(data) {
    let dataDB = ""
    data.forEach(element => {
        dataDB += `
        <div class="cards" onclick="viewSingleCountry('${element.name.common}')">
        <!-- <img src="img/Germany.JPG" alt="German flag"> -->
         <img src="${element.flags.png}" alt="${element.name.common} flag"> 
        <div class="card-details" >
            <h2>${element.name.common}</h2>
            <p><span class="prop-name">Population:</span> <span class="prop-value">${element.population}</span></p>
            <p><span class="prop-name">Region:</span> <span class="prop-value">${element.region}</span></p>
            <p><span class="prop-name">Capital:</span> <span class="prop-value">${element.capital}</span></p>
        </div>
    </div>`
    })
    countries.innerHTML = dataDB
}


//view single countries on a separate page
function viewSingleCountry(name) {
  let country = data.filter(country => country.name.common == name)
  localStorage.setItem('viewCountry', JSON.stringify(country))
  window.location.href = `country.html`
}


//Search feature
let searchInput = document.getElementById('search')
searchInput.addEventListener('input', () => {
  let searchValue = searchInput.value.toUpperCase()
  let cardsDB = document.querySelectorAll(".cards");

  for(let i = 0; i < cardsDB.length; i++) {
    let countryName = cardsDB[i].querySelector('h2').innerHTML
    if (countryName.toUpperCase().indexOf(searchValue) > -1) {
      cardsDB[i].style.display = ""
    } else {
      cardsDB[i].style.display = "none"
    }
  }
})

//filter feature
let region = document.getElementById("region")
region.addEventListener("input", () => {
  let regionValue = region.value
  let selectedRegion = data.filter(country => country.region == regionValue)
  renderDB(selectedRegion)
})