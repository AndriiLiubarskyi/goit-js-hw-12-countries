const BASE_URL = 'https://restcountries.eu/rest/v2';

const fetchCountries = async searchQuery => {
    const response = await fetch(`${BASE_URL}/name/${searchQuery}`);
    return await response.json();
}

export default { fetchCountries };