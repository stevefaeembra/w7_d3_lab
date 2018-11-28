const PubSub = require('../helpers/pub-sub.js');

const CountrySelectorView = function (element) {
  this.element = element;
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

  this.element.addEventListener("change", (event) => {
    PubSub.publish("CountrySelectorView:selected-country",this.element.value);
  })

};

module.exports = CountrySelectorView;
