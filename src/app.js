const Countries = require('./models/countries.js');
const SelectView = require('./views/select-view.js');
const CountryView = require('./views/country-view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countries = new Countries();
  countries.bindEvents();

  const element = document.querySelector('select#countries')
  const selectView = new SelectView(element);
  selectView.bindEvents();

  const container = document.querySelector('div#country')
  const countryView = new CountryView(container);
  countryView.bindEvents();
});
