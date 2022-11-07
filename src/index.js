import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
let userInput = null;

const refs = {
  input: document.querySelector('input#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(handleInputForm, DEBOUNCE_DELAY));

function handleInputForm(e) {
  e.preventDefault();
  resetMarkup();

  userInput = refs.input.value.trim();
  fetchCountries(userInput)
    .then(data => {
      console.log(data);
      if (data.length === 1) {
        const langObj = data[0].languages;
        const languages = Object.values(langObj);
        createMarkupCard(data[0], languages);
      }
      if (data.length >= 2 && data.length <= 10) {
        data.forEach(function (country) {
          createMarkupList(country);
        });
      }
      if (data.length > 10) {
        console.log(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(() => console.log('Oops, there is no country with that name'));
}

function createMarkupCard(country, languages) {
  refs.info.innerHTML = `<div class="country-info__wrapper">
  <img src="${
    country.flags.svg
  }" alt="Counrty flag" width="60" height="60" class="country-info__img">
  <h2 class="country-info__tittle">${country.name.common}</h2>
  </div>
  <p><span class="bold">Capital:</span> ${country.capital}</p>
  <p><span class="bold">Population:</span> ${country.population}</p>
  <p><span class="bold">Languages:</span> ${[...languages].join(', ')}</p>`;
}

function createMarkupList(country) {
  refs.list.insertAdjacentHTML(
    'beforeend',
    `<li class="country-list__wrapper">
    <img src="${country.flags.svg}" alt="Country flag" width="60" height="60" class="country-list__img"/>
    <h2 class="country-list__tittle">${country.name.common}</h2>
  </li>`
  );
}

function resetMarkup() {
  refs.list.innerHTML = '';
  refs.info.innerHTML = '';
}
