import React, { useEffect, useRef, useState } from "react";
import Header from "../../modules/Header/Header";
import Sidebar from "../../modules/Sidebar/Sidebar";
import Button from "../../UI/Button";
import { Container, Content, EditorContainer, InnerContent } from "./Styled";
import JoditEditor from "jodit-react";
import CommentsPopup from "../../modules/CommentsPopup/CommentsPopup";
import InvitePopup from "../../modules/InvitePopup/InvitePopup";
import { useParams } from "react-router-dom";
import { getOneDocument } from "../../actions/document";
import DocumentsStore from "../../store/DocumentsStore";

const EditorPage = () => {
  let { id } = useParams();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    getOneDocument(id).then((response) => {
      if (response?.status === 200) {
        DocumentsStore.setDocument(response?.data);
        setContent(response?.data?.content || "");
      } else {
        setError("Document not found");
      }
    });
  }, []);

  useEffect(() => {
    console.log(content);
  }, [content]);

  // const onBlur = (newContent) => {
  //   setContent(newContent);
  // };

  const onChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <Container>
      {error ? (
        error
      ) : (
        <>
          <CommentsPopup />
          <InvitePopup />
          <Content>
            <InnerContent>
              <Header />
              <div>
                <Button wauto margin="21px 0 0 0">
                  Начать редактирование
                </Button>
              </div>

              <EditorContainer>
                <JoditEditor
                  disabled={true}
                  ref={editor}
                  value={content}
                  tabIndex={1} // tabIndex of textarea
                  // onBlur={onBlur} preferred to use only this option to update the content for performance reasons
                  onChange={onChange}
                  config={{ readonly: disabled }}
                />
              </EditorContainer>
            </InnerContent>
          </Content>
          <Sidebar />
        </>
      )}
    </Container>
  );
};

export default EditorPage;
