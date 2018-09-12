const PubSub = require('../helpers/pub_sub.js')

const CountryView = function (container) {
  this.container = container;
};

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selectedCountry', (event) => {
    this.render(event.detail);
  })
};

CountryView.prototype.render = function (country) {
  this.container.innerHTML = "";
  const title = document.createElement('h1');
  title.textContent = country.name;
  this.container.appendChild(title);

  const image = document.createElement('img');
  image.src = country.flag;
  image.alt = `${country.name} flag`;
  image.classList.add('flagImage');
  this.container.appendChild(image);

  const regionHeading = document.createElement('h3');
  regionHeading.textContent = `Region:`
  this.container.appendChild(regionHeading);

  const region = document.createElement('p');
  region.textContent = country.region;
  this.container.appendChild(region);

  const languageHeading = document.createElement('h3');
  languageHeading.textContent = `Language:`
  this.container.appendChild(languageHeading);

  const languageslist = document.createElement('ul');
  this.container.appendChild(languageslist);

  country.languages.forEach( (language) => {
    const languages = document.createElement('li');
    languages.textContent = language.name;
    languageslist.appendChild(languages);
  })
};

module.exports = CountryView;
