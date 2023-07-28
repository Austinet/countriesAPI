// Fetch data from API
let url = "https://restcountries.com/v3.1/all"
let data = [];
async function getData(url) {
  let response = await fetch(url)
  data = await response.json()
  displayCountry()
}

getData(url)

//display country
function displayCountry() {
    let singleCountry = localStorage.getItem('viewCountry')
    singleCountry = JSON.parse(singleCountry)
    let country = singleCountry[0]

    // currencies
    let currencies = country.currencies
    currencies = Object.values(currencies)

    let currenciesList = []
    for (let i = 0; i < currencies.length; i++) {
      currenciesList.push(currencies[i]["name"])
    }
    currencies = currenciesList.join(", ")

    // languages
    let languages = Object.values(country.languages)
    languages = languages.join(", ")

    //native name
    let nativeName =  Object.values(country.name.nativeName)
    nativeName = nativeName[0].common

    //borders
    let borders = country.borders?.map(element => {
      let borderName  = data.filter(country => country.cca3 == element)
        return (`<a class="btn" onclick="viewBorderCountry('${borderName[0].name.common}')">${borderName[0].name.common}</a>`)
    }).join("")

    //country entry point
    let renderCountry = `
    <div class="country-container">
    <div class="country-image">
       <img src="${country.flags.png}" alt="${country.name.common} flag">
    </div>
    <div class="country-details-container">
        <h2>${country.name.common}</h2>
        <div class="country-details">
            <div>
                <p><span class="prop-name">Native Name:</span> <span class="prop-value">${nativeName}</span></p>
                <p><span class="prop-name">Population:</span> <span class="prop-value">${country.population}</span></p>
                <p><span class="prop-name">Region:</span> <span class="prop-value">${country.region}</span></p>
                <p><span class="prop-name">Sub Region:</span> <span class="prop-value">${country.subregion}</span></p>
                <p><span class="prop-name">Capital:</span> <span class="prop-value">${country.capital}</span></p>
            </div>
            <div>
                <p><span class="prop-name">Top Level Domain:</span> <span class="prop-value">${country.tld}</span></p>
                <p><span class="prop-name">Currencies:</span> <span class="prop-value">${currencies}</span></p>
                <p><span class="prop-name">Languages:</span> <span class="prop-value">${languages}</span></p>
            </div>
        </div>
        <div class="border-countries">
            <p>Border Countries: </p>
            <div class="borders">
                ${borders ? borders : "No Border"}
            </div>
        </div>
    </div>
</div>`
    document.getElementById('country').innerHTML = renderCountry
}


//view border country
function viewBorderCountry(name) {
    let country = data.filter(country => country.name.common == name)
    localStorage.setItem('viewCountry', JSON.stringify(country))
    window.location.href = `country.html`
}