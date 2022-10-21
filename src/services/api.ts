import axios from 'axios';

const BaseUrl = 'https://jsonplaceholder.typicode.com/';

export default axios.create({
  baseURL: BaseUrl,
});
