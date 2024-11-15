import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://673769f3aafa2ef22233c026.mockapi.io/tasks',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
