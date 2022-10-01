import axios from "axios";

const api = axios.create({
  baseURL: "https://town-back.codedamn.app:1337",
});

export { api };