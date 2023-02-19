import { makeAutoObservable } from "mobx";

class CommentsStore {
  showModal = false;
  comments = [
    {
      date: new Date(),
      name: "John",
      text: "lorem ipsum dolor sit amet, consectetur adip",
    },
    {
      date: new Date(),
      name: "John",
      text: "lorem ipsum dolor sit amet, consectetur adip",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setShowModal(showModal) {
    this.showModal = showModal;
  }

  setComments(comments) {
    this.comments = comments;
  }
}

export default new CommentsStore();
