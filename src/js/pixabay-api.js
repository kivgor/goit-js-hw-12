import { createGallery, iziToastMes } from './render-functions.js';

export function fetchMyRequest(searchValue) {
  const searchParams = new URLSearchParams({
    key: `46676876-9d0aaf878b11d8c614d2fd644`,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  });

  const fetchURL = `https://pixabay.com/api/?${searchParams}`;

  fetch(fetchURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      createGallery(data);
    })
    .catch(error => console.log(error));
}
