import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
