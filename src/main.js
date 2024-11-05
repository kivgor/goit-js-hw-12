import { fetchMyRequest } from './js/pixabay-api';
import { iziToastMes } from './js//render-functions';

let previousSearchValue = '';
let page = 1;

const btnMore = document.querySelector('.btn-more');
btnMore.addEventListener('click', handleBtnMoreClick);

function handleBtnMoreClick() {
  page++;
  fetchMyRequest(previousSearchValue, page)
    .then(() => {
      const gallery = document.querySelector('.gallery');      
      window.scrollBy(
        0,
        gallery.children[0].getBoundingClientRect().height * 2
      );
    })
    .catch(error => console.log(error));
}

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const currentSearchValue = event.target.elements.search.value.trim();

  if (currentSearchValue !== '') {
    if (previousSearchValue === currentSearchValue) {      
      page++;
    } else {      
      const gallery = document.querySelector('.gallery');
      gallery.innerHTML = '';
      page = 1;
      previousSearchValue = currentSearchValue;
    }
    fetchMyRequest(currentSearchValue, page);
  } else {
    iziToastMes('🚫 Please fill in the search images field');
  }
}
