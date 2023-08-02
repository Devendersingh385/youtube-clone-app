import axios from 'axios';

export const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

const options = {
  params: {
    maxResults: 5,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => { 
  try {
    const { data } = await axios.request(`${BASE_URL}/${url}`, options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return data;
};


// const options = {
//   method: 'GET',
//   url: 'https://youtube-v311.p.rapidapi.com/videos/',
//   params: {
//     part: 'snippet,contentDetails,statistics',
//     id: 'Q8TXgCzxEnw',
//     maxResults: '5'
//   },
//   headers: {
//     'X-RapidAPI-Key': '925703c590mshe5da20b23098726p16d4efjsn371efd673a62',
//     'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
//   }
// };