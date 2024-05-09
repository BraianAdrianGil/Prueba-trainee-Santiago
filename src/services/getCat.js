import axios from 'axios';

const BASE_URL = 'https://http.cat';

export const getCat = async (statusCode) => {
  try {
    const res = await axios.get(`${BASE_URL}/${statusCode}`);

    return res.data;
  } catch (error) {
    return error.config.url;
  }
};
