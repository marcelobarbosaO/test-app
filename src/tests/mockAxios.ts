import axiosInstance from '#Services/api';
import MockAdapter from 'axios-mock-adapter';

export default new MockAdapter(axiosInstance, { onNoMatch: 'throwException' });
