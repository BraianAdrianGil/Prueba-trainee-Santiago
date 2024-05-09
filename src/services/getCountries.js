import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';

export const getCountries = async () => {
  try {
    const res = await axios.get(BASE_URL);
    if (res.statusText !== 'OK')
      throw {
        error: res,
        customError: 'Something went wrong with the res fetch',
      };
    const data = res.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};
