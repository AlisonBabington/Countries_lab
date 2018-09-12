const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Countries = function () {
  this.countries = null;
  this.names = null;
};

Countries.prototype.bindEvents = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all')
  request.get((data) => {
    this.countries = data;
    this.names = data.map ((country) => {
      return country.name
    });
    PubSub.publish('Countries:allcountrynames', this.names)
  });
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishSelectedCountry(selectedIndex);
  });
};


Countries.prototype.publishSelectedCountry = function (selectedIndex) {
  const selectedCountry = this.countries[selectedIndex];
  console.log(selectedCountry);
  PubSub.publish('Countries:selectedCountry', selectedCountry);
};

module.exports = Countries;
