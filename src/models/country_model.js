const PubSub = require("../helpers/pub-sub.js");
const RequestHelper = require("../helpers/request_helper.js");


const CountryModel = function () {
  this.countryData = null; // stores JSON of all countries
};

CountryModel.prototype.lookupCountry = function (countrySelected) {
  const countrySelectedData = this.countryData.find((country) => {
    return country.name === countrySelected;
  })
  return countrySelectedData;
};

CountryModel.prototype.bindEvents = function () {
  PubSub.subscribe("CountrySelectorView:selected-country", (event) => {
    const countrySelected = event.detail;
    const countryData = this.lookupCountry(countrySelected);
    PubSub.publish("Country:country-info", countryData);
  })
};

CountryModel.prototype.getData = function () {
  const requestHelper = new RequestHelper("https://restcountries.eu/rest/v2/all");
  requestHelper.getData((data) => {
    this.countryData = data;
    console.log("Country Data");
    console.dir(this.countryData);
    const countryNameList = data.map((country) => {
      return country.name;
    });
    PubSub.publish("Country:country-list", countryNameList.sort());
  })
};

module.exports = CountryModel;
