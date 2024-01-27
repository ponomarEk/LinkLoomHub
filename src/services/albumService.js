import axiosInstance from '../utils/axiosInstance';

const AlbumService = {
  getAlbumsByUserId: async userId => {
    try {
      const { data } = await axiosInstance.get(`/users/${userId}/albums`);
      return data;
    } catch (error) {
      console.error('Error fetching albums:', error);
      throw error;
    }
  }
};

export default AlbumService;
