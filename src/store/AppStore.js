import { makeAutoObservable } from "mobx";

class AppStore {
  showInvitePopup = false;

  constructor() {
    makeAutoObservable(this);
  }

  setShowInvitePopup(showInvitePopup) {
    this.showInvitePopup = showInvitePopup;
  }
}

export default new AppStore();
