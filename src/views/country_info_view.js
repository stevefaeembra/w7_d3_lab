const PubSub = require('../helpers/pub-sub.js');

const CountryInfoView = function (element) {
  this.element = element;
};

CountryInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-info', (event) => {
    this.render(event.detail);
  });
};

CountryInfoView.prototype.render = function (data) {
  const countryInfoDiv = document.querySelector('#country');

  const name = document.createElement('h2');
  name.textContent = data.name;

  const flag = document.createElement('img');
  flag.setAttribute('src', data.flag);

  const region = document.createElement('h3');
  region.textContent = data.region;

  countryInfoDiv.appendChild(name);
  countryInfoDiv.appendChild(flag);
  countryInfoDiv.appendChild(region);
};

module.exports = CountryInfoView;
