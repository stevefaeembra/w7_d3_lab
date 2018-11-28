const PubSub = require('../helpers/pub-sub.js');

const CountrySelectorView = function () {

};

CountrySelectorView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-list', (event) => {
    PubSub.signForDelivery(this, event);
  });

};

module.exports = CountrySelectorView;
