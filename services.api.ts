import axios from 'axios';

const api = axios.create({
  baseURL: 'https://unknown-create.codedamn.app:1337',
});

export { api };
