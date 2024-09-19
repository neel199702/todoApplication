import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// Function to fetch todos with a limit parameter

export const fetchTodos = async (limit: number = 10, page: number = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}?_limit=${limit}&_page=${page}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  };
  