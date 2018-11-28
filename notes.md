Plan of Attack
==============

- [Model] CountryModel
  - ~~getListOfCountries() -- using API /all method, store~~
      ~~publish Country:country-list~~
  - lookupCountry(name)
  subscribe CountrySelectorView:selected-country
    lookupCountry(nameCountry)
    publish Country:country-info

- [View] CountrySelectorView
  - ~~subscribe change on #countries select~~
    - publish CountrySelectorView:selected-country
  - ~~subscribe to Country:country-list~~
    - ~~add option to select~~
  - publish selected result (change on select #countries)

- [View] CountryInfoView
  - subscribe to Country:country-info
    put info onto DOM in #country
