import { makeAutoObservable } from "mobx";

class AppStore {
  showInvitePopup = false;
  token = null;
  channel = null;
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setShowInvitePopup(showInvitePopup) {
    this.showInvitePopup = showInvitePopup;
  }

  setToken(token) {
    this.token = token;
  }

  setUser(user) {
    this.user = user;
  }

  setChannel(channel) {
    this.channel = channel;
  }
}

export default new AppStore();
