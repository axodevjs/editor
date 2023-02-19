import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import DocumentsStore from "../../store/DocumentsStore";
import Title from "../../UI/Title";
import {
  Container,
  Document,
  DocumentImage,
  Documents,
  DocumentTitle,
  Wrapper,
} from "./Styled";

const DocumentsPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Title>Все документы</Title>
        <Documents>
          <Document onClick={() => navigate("/editor")}>
            <DocumentImage gray>+</DocumentImage>
            <DocumentTitle>Создать</DocumentTitle>
          </Document>
          {DocumentsStore.documents?.length > 0 &&
            DocumentsStore.documents.map((item, i) => (
              <Document onClick={() => navigate("/editor")}>
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
