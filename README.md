# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode 

### Screenshot

- ![Homepage Large Screen](screenshots/homepageLargeScreen.jpg)
- ![Homepage Large Screen Dark Mode](screenshots/homePageLargeScreenDarkMode.jpg)
- ![Home page Medium Screen](screenshots/mediumScreen.jpg)
- ![Home page Small Screen](screenshots/smallScreen.jpg)
- ![Single Country Large Screen](screenshots/singleCountry.jpg)
- ![Single Country Large Screen Dark Mode](screenshots/singleCountryDarkMode.jpg)
- ![Single Country Small Screen](screenshots/smallScreenSingleCountry.jpg)
- ![Search Feature](screenshots/searchFeature.jpg)
- ![Filter Feature](screenshots/filterFeature.jpg)

### Links
- [Solution URL](https://github.com/Austinet/countriesAPI.git)
- [Live site URL](https://austinet.github.io/countriesAPI/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- Vanilla Javascript
- [REST API](https://restcountries.com/v3.1/all) 


### What I learned

I learnt a lot while working on this challenge, especially on APIs. I also implemented the search and filter feature beautifully, i was amazed.

Code snippets i was amazed about:

```js
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

let region = document.getElementById("region")
region.addEventListener("input", () => {
  let regionValue = region.value
  let selectedRegion = data.filter(country => country.region == regionValue)
  renderDB(selectedRegion)
})
```

### Continued development

I've gotten a lot of experience while working with web based technologies like HTML, CSS, Bootstrap, and JavaScript. It's time to take on a JavaScript framework/library, and ReactJS it is.

### Useful resources

- [ Youtube](https://www.Youtube.com) 
- [Google  ](https://www.Google.com) 

## Author

- Website - [Udhe Austine Ogaga](https://Austinet.github.io/portfolio)
- Frontend Mentor - [@austinet](https://www.frontendmentor.io/profile/austinet)
- Twitter - [@yourusername](https://www.twitter.com/austineudhe)


## Acknowledgments

I will like to acknowledge God for giving me the grace to be patient with myself while going through the huddles of carrying out this project. And also Frontend mentor, KodeCamp team for this tasks where i got to consume data from APIs.
This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.