const PubSub = require("./helpers/pub-sub.js");
const CountryModel = require("./models/country_model.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const countryModel = new CountryModel();
  countryModel.getData();
});
