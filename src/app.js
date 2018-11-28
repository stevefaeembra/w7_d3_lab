const PubSub = require("./helpers/pub-sub.js");
const CountryModel = require("./models/country_model.js");
const CountrySelectorView = require('./views/country_selector_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const countryModel = new CountryModel();
  countryModel.getData();
  countryModel.bindEvents();

  const countrySelectorView = new CountrySelectorView(document.querySelector('#countries'));
  countrySelectorView.bindEvents();
});
