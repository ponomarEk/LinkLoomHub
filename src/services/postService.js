import axiosInstance from '../utils/axiosInstance';

const PostService = {
  getPostsByUserId: async userId => {
    try {
      const { data } = await axiosInstance.get(`/users/${userId}/posts`);
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }
};

export default PostService;
