import Axios, { AxiosRequestConfig } from "axios";

const { REACT_APP_API_URL } = process.env;

export const API = Axios.create({
  baseURL: REACT_APP_API_URL,
});

export const fetcher = (url: string, configs?: AxiosRequestConfig) =>
  API.get(url, configs).then((res) => res.data);

// Account
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

// TestBench
export const fetchLatestTestBench = async () => {
  try {
    const { data } = await API.get("/testbenches");

    return data[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchTestBench = async (id: string) => {
  const { data } = await API.get<IShowTestBenchResponse>(`/testbenches/${id}`);

  return data;
};

export const createTestBench = async (payload: any) => {
  try {
    await API.post(`/testbenches`, payload);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const editTestBench = async (id: string, payload: any) => {
  try {
    await API.put(`/testbenches/${id}`, payload);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteTestBench = async (id: string) => {
  try {
    await API.delete(`/testbenches/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Files
export const uploadFiles = async (
  type: "instructions" | "failures" | "thumbnails",
  files: File[]
) => {
  try {
    const payload = new FormData();

    files.forEach((file) => payload.append("files", file));

    const { data } = await API.post(`/upload/form/${type}`, payload);

    return data as {
      type: string;
      url: string;
      oldName: string;
      newName: string;
    }[];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// API
export const setAuthorizationHeader = async (token: string) => {
  API.defaults.headers["Authorization"] = `Bearer ${token}`;
};
