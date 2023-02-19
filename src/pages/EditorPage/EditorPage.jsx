import React, { useRef, useState } from "react";
import Header from "../../modules/Header/Header";
import Sidebar from "../../modules/Sidebar/Sidebar";
import Button from "../../UI/Button";
import { Container, Content, EditorContainer, InnerContent } from "./Styled";
import JoditEditor from "jodit-react";
import CommentsPopup from "../../modules/CommentsPopup/CommentsPopup";
import InvitePopup from "../../modules/InvitePopup/InvitePopup";

const EditorPage = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <Container>
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
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </EditorContainer>
        </InnerContent>
      </Content>
      <Sidebar />
    </Container>
  );
};

export default EditorPage;
