import Axios, { AxiosRequestConfig } from "axios";

const { REACT_APP_API_URL } = process.env;

export const API = Axios.create({
  baseURL: REACT_APP_API_URL,
});

export const fetcher = (url: string, configs?: AxiosRequestConfig) =>
  API.get(url, configs).then((res) => res.data);

export const authenticateAccount = async (email: string, password: string) => {
  try {
    const { data } = await API.post("/accounts/auth", {
      email,
      password,
    });

    API.defaults.headers["Authorization"] = `Bearer ${data.token}`;

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchLatestTestBench = async () => {
  try {
    const { data } = await API.get("/testbenches");

    return data[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};
