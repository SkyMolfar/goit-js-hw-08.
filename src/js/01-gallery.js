// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

// Change code below this line
function generateGalleryItem(item) {
  let template = `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
  </li>`;
  return template;
}

const gallery = document.querySelector('.gallery');
console.log(gallery);

const galleryMarkup = galleryItems.map(generateGalleryItem).join('');
gallery.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

