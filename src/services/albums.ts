import API from './api';

export const getAlbums = async () => {
  try {
    const response = await API.get<Response[]>(`/albums`);

    return { data: response.data, status: true };
  } catch (err) {
    const {
      status,
      data: { message },
    } = err.response;

    return { message: message, status: false, code: status };
  }
};
