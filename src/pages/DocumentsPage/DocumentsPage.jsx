import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DocumentsStore from "../../store/DocumentsStore";
import Title from "../../UI/Title";
import {
  Container,
  Document,
  DocumentImage,
  Documents,
  DocumentTitle,
  Header,
  Logout,
  Wrapper,
} from "./Styled";
import { logout } from "../../actions/user";
import AppStore from "../../store/AppStore";
import { createDocument, getDocuments } from "../../actions/document";

const DocumentsPage = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    AppStore.setUser(null);
  };

  const onCreate = () => {
    let documentName = prompt("Имя документа: ");

    if (documentName?.length > 0) {
      createDocument(AppStore.user, documentName).then((response) => {
        if (response?.status === 200) {
          navigate(`/editor/${response?.data?._id}`);
        }
      });
    }
  };

  useEffect(() => {
    getDocuments(AppStore?.user?.id).then((documents) =>
      DocumentsStore.setDocuments(documents)
    );
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Все документы</Title>
          <Logout onClick={onLogout}>Выйти</Logout>
        </Header>

        <Documents>
          <Document onClick={onCreate}>
            <DocumentImage gray>+</DocumentImage>
            <DocumentTitle>Создать</DocumentTitle>
          </Document>
          {DocumentsStore.documents?.length > 0 &&
            DocumentsStore.documents.map((item, i) => (
              <Document
                key={i}
                onClick={() => navigate(`/editor/${item?.documentId}`)}
              >
                <DocumentImage></DocumentImage>
                <DocumentTitle>{item.title}</DocumentTitle>
              </Document>
            ))}
        </Documents>
      </Container>
    </Wrapper>
  );
};

export default observer(DocumentsPage);
