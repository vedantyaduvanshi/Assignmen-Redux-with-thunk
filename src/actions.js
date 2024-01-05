import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_START' }); // Signal loading state
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error });
  }
};
