import axios from "axios";

const api = axios.create({
  baseURL: "https://direction-tonight.codedamn.app:1337",
});

export { api };