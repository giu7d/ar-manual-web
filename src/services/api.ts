import Axios, { AxiosRequestConfig } from "axios";

const {
  REACT_APP_API_URL,
  REACT_APP_USERNAME,
  REACT_APP_PASSWORD,
} = process.env;

export const API = Axios.create({
  baseURL: REACT_APP_API_URL,
});

export const login = () => {
  API.post("/accounts/auth", {
    email: REACT_APP_USERNAME,
    password: REACT_APP_PASSWORD,
  })
    .then(({ data }) => {
      API.defaults.headers["Authorization"] = `Bearer ${data.token}`;
    })
    .catch((error) => console.error(error));
};

export const fetcher = (url: string, configs?: AxiosRequestConfig) =>
  API.get(url, configs).then((res) => res.data);
