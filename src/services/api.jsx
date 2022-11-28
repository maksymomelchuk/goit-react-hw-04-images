import axios from 'axios';

const Api = async (value, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=30739905-a485bdf08a4bd9d2aabc1774e&q=${value}&safesearch=true&orientation=horizontal&per_page=20&page=${page}`
    )
    .then(response => response.data);
};

export { Api };
