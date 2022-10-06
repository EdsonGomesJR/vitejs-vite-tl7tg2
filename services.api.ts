import axios from 'axios';

const api = axios.create({
  baseURL: 'https://master-die.codedamn.app:1337',
});

export { api };
