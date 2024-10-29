import { fetchMyRequest } from './js/pixabay-api';
import { iziToastMes } from './js//render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const searchValue = event.target.elements.search.value.trim();
  if (searchValue !== '') {   
    form.reset();
    fetchMyRequest(searchValue);
  } else {
    iziToastMes('🚫 Please fill in the search images field');
  }
}
