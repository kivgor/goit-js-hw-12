// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(data) {
  const gallery = document.querySelector('.gallery');
  let markup = '<span class="loader">Loading</span>';
  gallery.innerHTML = markup;

  if (data.total != 0) {   
    markup = data.hits
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
    
    // setTimeout(() => {      
    //   gallery.innerHTML = markup;
    // }, 1000);
    
    gallery.innerHTML = markup;

    let myGallery = new SimpleLightbox('.gallery a', {
      /* options */
      overlayOpacity: 0.9,
      captionsData: 'alt',
      captionDelay: 250,
    });
    myGallery.refresh();
  } else {
    iziToastMes(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    markup = '';
    gallery.innerHTML = markup;    
  }
}

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export function iziToastMes(message) {
  iziToast.show({
    icon: 'icon-person',
    message: message,
    color: 'red',
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    transitionIn: 'bounceInDown', // bounceInLeft, bounceInRight, bounceInUp, bounceInDown, fadeIn, fadeInDown, fadeInUp, fadeInLeft, fadeInRight or flipInX
    transitionOut: 'flipOutX', // fadeOut, fadeOutUp, fadeOutDown, fadeOutLeft, fadeOutRight, flipOutX
    closeOnClick: true,
    displayMode: 'replace', // once, replace
    timeout: 3000,
  });
}
