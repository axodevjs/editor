import { makeAutoObservable } from "mobx";

class DocumentsStore {
  documents = [
    {
      title: "Document 1",
      users: [
        {
          id: 1011,
          name: "John",
          role: "editor",
        },
        {
          id: 1012,
          name: "Alex",
          role: "comment",
        },
      ],
      commits: [
        {
          id: 1015,
          date: new Date(),
          before: "sdfsdfsdf",
          after: "sdfsdfsdf",
          status: "waiting",
        },
        {
          id: 1014,
          date: new Date(),
          before: "sdfsdfsdf",
          after: "sdfsdfsdf",
          status: "accepted",
        },
      ],
    },
    {
      title: "Document 2",
      users: [
        {
          id: 1011,
          name: "John",
          role: "editor",
        },
        {
          id: 1012,
          name: "Alex",
          role: "comment",
        },
      ],
      commits: [
        {
          id: 1015,
          date: new Date(),
          before: "sdfsdfsdf",
          after: "sdfsdfsdf",
          status: "waiting",
        },
        {
          id: 1014,
          date: new Date(),
          before: "sdfsdfsdf",
          after: "sdfsdfsdf",
          status: "accepted",
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setDocuments(documents) {
    this.documents = documents;
  }
}

export default new DocumentsStore();
