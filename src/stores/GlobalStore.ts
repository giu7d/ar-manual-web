import { makeAutoObservable } from "mobx";

export const GlobalStore = () =>
  makeAutoObservable({
    navigationBar: false,
    toggleNavigationBar() {
      this.navigationBar = !this.navigationBar;
    },
  });
