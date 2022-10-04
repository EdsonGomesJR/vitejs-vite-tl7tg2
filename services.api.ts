import axios from 'axios';

const api = axios.create({
  baseURL: 'https://feature-path.codedamn.app:1337',
});

export { api };
