import { makeAutoObservable } from "mobx";

interface IGlobalStore {
  navigationBar: boolean;
  toggleNavigationBar(): void;

  bottomSheet: boolean;
  setBottomSheet(state: boolean): void;

  initial: string;
  setInitial(initial: string): void;

  token?: string;
  setToken(token: string | undefined): void;

  selectedTestBenchId?: string;
  setSelectedTestBenchId(id: string): void;
}

export const GlobalStore = () =>
  makeAutoObservable<IGlobalStore>({
    navigationBar: false,
    toggleNavigationBar() {
      this.navigationBar = !this.navigationBar;
    },

    bottomSheet: false,
    setBottomSheet(state) {
      this.bottomSheet = state;
    },

    initial: "",
    setInitial(initial) {
      this.initial = initial;
    },

    token: undefined,
    setToken(token) {
      this.token = token;
    },

    selectedTestBenchId: undefined,
    setSelectedTestBenchId(id) {
      this.selectedTestBenchId = id;
    },
  });
