import './sass/main.scss';

import refs from './js/refs';
import API from './js/fetchCountry';
import previewCountryTpl from './templates/country-list-find.hbs'
import countryTpl from './templates/country.hbs'

import debounce from 'lodash.debounce';
import { error, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const inputSearch = e => {
    const searchQuery = e.target.value.replace(/^\s+/g, '');
  

    refs.countryMrkp.innerHTML = '';

    if (searchQuery.length < 1)
    return;

    API.fetchCountries(searchQuery)
    .then(infoShow)
};


const infoShow = selectedСountry => {
    if (selectedСountry.length > 10) {
        error({
            text: 'Too many matches found. Please enter a more specific query!',
            delay: 3000,
        });
    };
    if (selectedСountry.length > 1 && selectedСountry.length < 10) {
        refs.countryMrkp.innerHTML = previewCountryTpl(selectedСountry);
    };
    if (selectedСountry.length === 1) {
        refs.countryMrkp.innerHTML = countryTpl(...selectedСountry);
    };
};
refs.search.addEventListener('input', debounce(inputSearch, 500));