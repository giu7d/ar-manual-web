import { useStores } from "./useStores";

export const useToken = () => {
  const { globalStore } = useStores();

  const token = localStorage.getItem("token") || globalStore.account.token;

  const setToken = (token: string) => {
    try {
      const { initial } = globalStore.account;

      globalStore.setAccount({ initial, token });
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("setToken", "error", error);
    }
  };

  const clearToken = () => {
    try {
      globalStore.setAccount({ initial: "", token: "" });
      localStorage.clear();
    } catch (error) {
      console.log("setToken", "error", error);
    }
  };

  return {
    token,
    setToken,
    clearToken,
  };
};
