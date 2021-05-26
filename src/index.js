import './sass/main.scss';

import countryCard from './templates/country-cards.hbs';

fetch('https://restcountries.eu/rest/v2/name/Albania')
    .then(response => {
        return response.json();
    })
    .then(country => {
        console.log(country);
        const markup = countryCard(country);
        console.log(markup);
    })
    .catch (error => {
        console.log(error);
});

