import { useEffect } from "react";
import { useStores } from "./useStores";
import { setAuthorizationHeader } from "../services/api";

export const useAccount = () => {
  const { globalStore } = useStores();

  useEffect(() => {
    const token = localStorage.getItem("token") || undefined;
    globalStore.setToken(token);
    setAuthorizationHeader(token || "");
  });

  const setAccount = (initial: string, token: string) => {
    globalStore.setInitial(initial);
    globalStore.setToken(token);
    localStorage.setItem("token", token);
    setAuthorizationHeader(token || "");
  };

  const logoutAccount = () => {
    globalStore.setInitial("");
    globalStore.setToken(undefined);
    localStorage.clear();
    setAuthorizationHeader("");
  };

  return {
    token: globalStore.token,
    setAccount,
    logoutAccount,
  };
};
