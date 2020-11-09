import { createContext } from "react";
import { GlobalStore } from "../stores/GlobalStore";

const globalStore = GlobalStore();

export const StoreContext = createContext({
  globalStore,
});
