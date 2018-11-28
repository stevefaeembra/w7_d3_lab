const PubSub = require('../helpers/pub-sub.js');

const CountrySelectorView = function () {

};

CountrySelectorView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-list', (event) => {
    // PubSub.signForDelivery(this, event);

    const countryPullDown = document.querySelector('#countries');
    event.detail.forEach((item) => {
      const listOption = document.createElement('option');
      listOption.setAttribute('value', item);
      listOption.textContent = item;

      countryPullDown.appendChild(listOption);
    });
  });

};

module.exports = CountrySelectorView;
