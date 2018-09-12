const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:allcountrynames', (event) => {
    const allCountries = event.detail;
    this.populate(allCountries);
  });
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex)
  });
};

SelectView.prototype.populate = function (data) {
    data.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country;
    option.value = index;
    this.element.appendChild(option);
  });
};
module.exports = SelectView;
