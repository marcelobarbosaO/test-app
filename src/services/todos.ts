import API from './api';

export const getTodos = async () => {
  try {
    const response = await API.get<TodoResponse[]>('/todos');

    return { data: response.data, status: true };
  } catch (err) {
    const {
      status,
      data: { message },
    } = err.response;

    return { message: message, status: false, code: status };
  }
};
