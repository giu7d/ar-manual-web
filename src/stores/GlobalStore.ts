import { makeAutoObservable } from "mobx";

export const GlobalStore = () =>
  makeAutoObservable({
    navigationBar: false,
    bottomSheet: true,
    toggleNavigationBar() {
      this.navigationBar = !this.navigationBar;
    },
    setBottomSheet(state: boolean) {
      this.bottomSheet = state;
    },
  });
