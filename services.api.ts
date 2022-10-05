import axios from 'axios';

const api = axios.create({
  baseURL: ' https://sick-flight.codedamn.app:1337',
});

export { api };
