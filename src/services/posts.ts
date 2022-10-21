import API from './api';

export const getPosts = async () => {
  try {
    const response = await API.get<PostResponse[]>('/posts');

    return { data: response.data, status: true };
  } catch (err) {
    const {
      status,
      data: { message },
    } = err.response;

    return { message: message, status: false, code: status };
  }
};
