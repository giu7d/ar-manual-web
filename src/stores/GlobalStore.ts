import { makeAutoObservable } from "mobx";

interface IAccount {
  initial: string;
  token: string;
}

export const GlobalStore = () =>
  makeAutoObservable({
    // UI
    navigationBar: false,
    bottomSheet: false,
    toggleNavigationBar() {
      this.navigationBar = !this.navigationBar;
    },
    setBottomSheet(state: boolean) {
      this.bottomSheet = state;
    },
    // Account
    account: {
      initial: "",
      token: "",
    } as IAccount,
    setAccount(account: IAccount) {
      this.account = account;
    },
    // TestBench
    selectedTestBenchId: "",
    setSelectedTestBenchId(id: string) {
      this.selectedTestBenchId = id;
    },
  });
