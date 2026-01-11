import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';
const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

export const submitPetDetails = async (petData: any) => {

  return ; // return for now as this is a mock API

  try {
    const response = await axios.post(`${API_BASE_URL}/users`, petData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit pet details');
  }
  
};

export const fetchRandomDogImage = async () => {
  try {
    const response = await axios.get(DOG_API_URL);
    return response.data.message;
  } catch (error) {
    throw new Error('Failed to fetch dog image');
  }
};
