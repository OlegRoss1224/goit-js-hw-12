import axios from 'axios';

const API_KEY = '49135563-3e7c108cd0494cefc8419da61';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const per_page = 15;
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
      },
    });

    return data;
  } catch (error) {
    console.log('Error:', error.message);
    throw error;
  }
}
