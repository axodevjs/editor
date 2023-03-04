import { makeAutoObservable } from "mobx";

class DocumentsStore {
  documents = [];

  document = {};

  constructor() {
    makeAutoObservable(this);
  }

  setDocuments(documents) {
    this.documents = documents;
  }

  setDocument(document) {
    this.document = document;
  }
}

export default new DocumentsStore();
