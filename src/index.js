import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
let userInput = null;

const inputFormRef = document.querySelector('input#search-box');

inputFormRef.addEventListener(
  'input',
  debounce(handleInputForm, DEBOUNCE_DELAY)
);

function handleInputForm() {
  userInput = inputFormRef.value.trim();
  if (!userInput) {
    return;
  }
  fetchCountries(userInput).then(data => {
    console.log(data);
  });
}

function addMarkup() {}
