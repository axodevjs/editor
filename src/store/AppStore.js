import { makeAutoObservable } from "mobx";

class AppStore {
  showInvitePopup = false;
  token = null;
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setShowInvitePopup(showInvitePopup) {
    this.showInvitePopup = showInvitePopup;
  }

  setToken(token) {
    this.token = token
  }

  setUser(user) {
    this.user = user
  }
}

export default new AppStore();
