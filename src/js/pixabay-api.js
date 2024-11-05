import axios from 'axios';
import { createGallery, iziToastMes } from './render-functions.js';
const loading = document.querySelector('.loader');
const btnMore = document.querySelector('.btn-more');
const per_page = 15;

export async function fetchMyRequest(searchValue, page) {
  loading.classList.add('is-active');
  btnMore.classList.remove('is-active');
  await axios
    .get('https://pixabay.com/api/?', {
      params: {
        key: `46676876-9d0aaf878b11d8c614d2fd644`,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: per_page,
        page,
      },
    })
    .then(response => {
      if (response.data.totalHits > 0) {
        const totalPages = Math.ceil(response.data.totalHits / per_page);
        const imagesLeft = response.data.totalHits - per_page * page;
        console.log('totalPages:' + totalPages);
        console.log('current page:' + page);
        console.log(`Images left: ${imagesLeft}`);

        if (page > totalPages) {
          btnMore.classList.remove('is-active');
          loading.classList.remove('is-active');
          iziToastMes(
            `We're sorry, but you've reached the end of search results.`,
            'green'
          );
        } else {

          createGallery(response.data);
          loading.classList.remove('is-active');
          if (imagesLeft > 0) {
            btnMore.classList.add('is-active');
          } else {
            btnMore.classList.remove('is-active');
            iziToastMes(
              `We're sorry, but you've reached the end of search results.`,
              'green'
            );
          }          
          
        }
      } else {
        console.log('Ничего не найдено' + response.data.totalHits);
        loading.classList.remove('is-active');
        iziToastMes(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
    })
    .catch(error => console.log(error));
}
