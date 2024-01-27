import axiosInstance from '../utils/axiosInstance';

const UserService = {
  getUsers: async () => {
    try {
      const { data } = await axiosInstance.get('/users');
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
};

export default UserService;
