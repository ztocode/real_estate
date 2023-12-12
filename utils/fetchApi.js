import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'X-RapidAPI-Key': 'ff0e09afd7mshc4e653daa0e83a2p16110cjsn4e31427af933',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}