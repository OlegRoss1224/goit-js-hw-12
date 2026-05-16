import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loaderContainer = document.querySelector('.loader-container');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images, gallery, isAppend = false) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img 
              class="gallery-image" 
              src="${webformatURL}" 
              alt="${tags}" 
              title="${tags}"             />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${likes}</p>
            <p class="info-item"><b>Views:</b> ${views}</p>
            <p class="info-item"><b>Comments:</b> ${comments}</p>
            <p class="info-item"><b>Downloads:</b> ${downloads}</p>
          </div>
        </li>
      `
    )
    .join('');
  if (isAppend) {
    gallery.insertAdjacentHTML('beforeend', markup);
  } else {
    gallery.innerHTML = markup;
  }
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loaderContainer.classList.remove('hidden');
}
export function hideLoader() {
  loaderContainer.classList.add('hidden');
}
export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
