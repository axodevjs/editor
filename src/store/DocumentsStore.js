import { makeAutoObservable } from "mobx";

class DocumentsStore {
  documents = [];

  commits = [];

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

  setCommits(commits) {
    this.commits = commits;
  }
}

export default new DocumentsStore();
