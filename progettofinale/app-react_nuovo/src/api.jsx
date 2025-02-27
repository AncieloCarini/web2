import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8080';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const fetchAbsences = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/assenze`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

