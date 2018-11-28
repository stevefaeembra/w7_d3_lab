const PubSub = require("../helpers/pub-sub.js");
const RequestHelper = require("../helpers/request_helper.js");


const CountryModel = function () {
  this.countryData = null; // stores JSON of all countries
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
