import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-btn');

let userFlower = '';
let currentPage = 1;

searchForm.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function handleSubmit(event) {
  event.preventDefault();
  userFlower = event.currentTarget.elements['search-text'].value.trim();
  currentPage = 1;

  if (userFlower === '') {
    clearGallery(gallery);
    hideLoadMoreButton();
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery(gallery);
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(userFlower, currentPage);

    if (data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits, gallery, false);

    if (data.totalHits > 15) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
    searchForm.reset();
  }
}

async function onLoadMore() {
  currentPage++;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(userFlower, currentPage);

    createGallery(data.hits, gallery, true);
    const totalPages = Math.ceil(data.totalHits / 15);

    if (currentPage >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
    const card = document.querySelector('.gallery-item');
    if (card) {
      const cardHeight = card.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'Failed to load more images!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
