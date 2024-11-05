import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let myGallery = new SimpleLightbox('.gallery a', {
      overlayOpacity: 0.9,
      captionsData: 'alt',
      captionDelay: 250,
    });

export function createGallery(data) {
  const gallery = document.querySelector('.gallery');  

  if (data.total != 0) {
    let markup = data.hits
      .map(
        image => `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              data-source="${image.largeImageURL}"
              alt="${image.tags}"
            />
          </a>          
          <ul class='gallery-stat-list'>
            <li class='gallery-stat-item'><p class='item-caption'>Likes</p><p class="item-value">${image.likes}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Views</p><p class="item-value">${image.views}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Comments</p><p class="item-value">${image.comments}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Downloads</p><p class="item-value">${image.downloads}</p></li>
          </ul>          
        </li>`
      )
      .join('');

    gallery.insertAdjacentHTML('beforeend', markup);  
    myGallery.refresh();      
  } 
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function iziToastMes(message, color='red') {
  iziToast.show({
    icon: 'icon-person',
    message: message,
    color: color,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    transitionIn: 'bounceInDown', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX
    transitionOut: 'flipOutX', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
    closeOnClick: true,
    displayMode: 'replace', // once, replace
    timeout: 3000,
  });
}
