import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pound-declared.codedamn.app:1337',
});

export { api };
