import { createContext } from "react";
import { GlobalStore } from "../stores/GlobalStore";
import { ManualManagerStore } from "../stores/ManualManagerStore";

const globalStore = GlobalStore();
const manualManagerStore = ManualManagerStore();

export const StoreContext = createContext({
  globalStore,
  manualManagerStore,
});
