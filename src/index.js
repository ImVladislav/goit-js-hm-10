import './css/styles.css';
// import prewiewMarkup from './markup';

const searchInput = document.querySelector('#search-box');

searchInput.addEventListener('input', onInput)

function onInput(e) {
  console.log(e);
  
}

const DEBOUNCE_DELAY = 300;

// function fetchCountries(name) {
//   return fetch('https://restcountries.com/v3.1/name/Sweden').then(
// response => {
//     console.log(response)
//     return response.json();
//     })
//     .then(country => {
//     console.log(country);
//   })
// } 


fetch('https://restcountries.com/v3.1/name/Sweden')
  .then(response => {
    // console.log(response)
    return response.json();
  })
  .then(country => {
    console.log(country);
    const markup = country.map(prewiewMarkup).join('');
    console.log(markup);
  })



// https://restcountries.com/v2/all?fields=name,capital,currencies



function prewiewMarkup({ population }) {
  return `<div> population ${population}</div>`;;
}







































// import './css/styles.css';
// import Notiflix from 'notiflix';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import API from './countries';
// import { prewiewMarkup, singleCountryMarkup } from './markup';

// const debounce = require('lodash.debounce');

// const DEBOUNCE_DELAY = 300;

// const refs = {
//   searchInput: document.querySelector('#search-box'),
//   countryList: document.querySelector('.country-list'),
//   countryInfo: document.querySelector('.country-info'),
// };

// let searchCountry = '';

// refs.searchInput.addEventListener(
//   'input',
//   debounce(onSearchInput, DEBOUNCE_DELAY)
// );

// function onSearchInput(evt) {
//   clearMarkup();

//   searchCountry = evt.target.value.trim();

//   if ((!searchCountry && !evt.data) || (!searchCountry && evt.data === ' ')) {
//     return;
//   } else {
//     API(searchCountry)
//       .then(data => {
//         if (data.length === 1) {
//           renderSingleCountry(data);
//         } else if (data.length >= 2 && data.length <= 10) {
//           renderCountryList(data);
//         } else {
//           onTooManyResults();
//         }
//       })
//       .catch(error => {
//         onIncorrectInput();
//         console.log(error);
//       });
//   }
// }

// function renderCountryList(list) {
//   const markup = list.map(prewiewMarkup).join('');
//   refs.countryList.innerHTML = markup;
// }

// function renderSingleCountry(country) {
//   const markup = country.map(singleCountryMarkup).join('');
//   refs.countryInfo.innerHTML = markup;
// }

// function onIncorrectInput() {
//   return Notiflix.Notify.failure('Oops, there is no country with that name');
// }

// function onTooManyResults() {
//   return Notiflix.Notify.info(
//     'Too many matches found. Please enter a more specific name.'
//   );
// }

// function clearMarkup() {
//   refs.countryInfo.textContent = '';
//   refs.countryList.textContent = '';
// }
