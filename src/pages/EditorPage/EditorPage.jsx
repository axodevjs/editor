import React, { useEffect, useRef, useState } from "react";
import Header from "../../modules/Header/Header";
import Sidebar from "../../modules/Sidebar/Sidebar";
import Button from "../../UI/Button";
import {
  Container,
  Content,
  EditingOverlay,
  EditorContainer,
  InnerContent,
  OverlayText,
} from "./Styled";
import JoditEditor from "jodit-react";
import CommentsPopup from "../../modules/CommentsPopup/CommentsPopup";
import InvitePopup from "../../modules/InvitePopup/InvitePopup";
import { useParams } from "react-router-dom";
import { getOneDocument } from "../../actions/document";
import DocumentsStore from "../../store/DocumentsStore";
import io from "socket.io-client";
import AppStore from "../../store/AppStore";
import { toJS } from "mobx";

const socket = io("http://localhost:7000");

const EditorPage = () => {
  let { id } = useParams();
  // let navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayText, setOverlayText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // if (!AppStore.user) {
    //   navigate("/login");
    // }

    getOneDocument(id).then((response) => {
      if (response?.status === 200) {
        DocumentsStore.setDocument(response?.data);
        setContent(response?.data?.content || "");

        // socket
        socket.emit("joinChannel", {
          document: toJS(DocumentsStore.document),
          user: AppStore.user,
        });

        socket.on("updateChannel", (channel) => {
          AppStore.setChannel(channel);
          console.log("update channel");

          if (
            channel?.users?.find(
              (x) => x?.editing === true && x?.userId !== AppStore.user.id
            )
          ) {
            setShowOverlay(true);
            setOverlayText("Кто то делает правки");
          }
        });
      } else {
        setError("Document not found");
      }
    });
  }, []);

  const onChange = (newContent) => {
    setContent(newContent);
  };

  const startEdit = () => {
    socket.emit("startEdit", {
      document: toJS(DocumentsStore.document),
      user: AppStore.user,
    });
    setIsEditing(true);
  };

  const sendEdit = () => {
    socket.emit("sendEdit", {
      document: toJS(DocumentsStore.document),
      user: AppStore.user,
    });
    setIsEditing(true);
  };

  const cancelEdit = () => {};

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
                {isEditing ? (
                  <>
                    <Button onClick={sendEdit} wauto margin="21px 0 0 0">
                      Отправить на проверку
                    </Button>
                    <Button onClick={cancelEdit} wauto margin="21px 0 0 0">
                      Отменить редактирование
                    </Button>
                  </>
                ) : (
                  !showOverlay && (
                    <Button onClick={startEdit} wauto margin="21px 0 0 0">
                      Начать редактирование
                    </Button>
                  )
                )}
              </div>

              <EditorContainer>
                {showOverlay && (
                  <EditingOverlay>
                    <svg
                      width="61"
                      height="60"
                      viewBox="0 0 61 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2498 55C13.8519 55 12.6556 54.5108 11.661 53.5325C10.6647 52.5525 10.1665 51.375 10.1665 50V25C10.1665 23.625 10.6647 22.4475 11.661 21.4675C12.6556 20.4892 13.8519 20 15.2498 20H17.7915V15C17.7915 11.5417 19.031 8.59333 21.51 6.155C23.9872 3.71833 26.9839 2.5 30.4998 2.5C34.0158 2.5 37.0133 3.71833 39.4923 6.155C41.9695 8.59333 43.2082 11.5417 43.2082 15V20H45.7498C47.1478 20 48.3449 20.4892 49.3412 21.4675C50.3359 22.4475 50.8332 23.625 50.8332 25V50C50.8332 51.375 50.3359 52.5525 49.3412 53.5325C48.3449 54.5108 47.1478 55 45.7498 55H15.2498ZM30.4998 42.5C31.8978 42.5 33.0949 42.0108 34.0912 41.0325C35.0859 40.0525 35.5832 38.875 35.5832 37.5C35.5832 36.125 35.0859 34.9475 34.0912 33.9675C33.0949 32.9892 31.8978 32.5 30.4998 32.5C29.1019 32.5 27.9056 32.9892 26.911 33.9675C25.9147 34.9475 25.4165 36.125 25.4165 37.5C25.4165 38.875 25.9147 40.0525 26.911 41.0325C27.9056 42.0108 29.1019 42.5 30.4998 42.5ZM22.8748 20H38.1248V15C38.1248 12.9167 37.3835 11.1458 35.9009 9.6875C34.4182 8.22917 32.6179 7.5 30.4998 7.5C28.3818 7.5 26.5814 8.22917 25.0988 9.6875C23.6162 11.1458 22.8748 12.9167 22.8748 15V20Z"
                        fill="white"
                      />
                    </svg>
                    <OverlayText>{overlayText}</OverlayText>
                  </EditingOverlay>
                )}

                <JoditEditor
                  styles={{ minHeight: "100vh" }}
                  disabled={true}
                  ref={editor}
                  value={content}
                  tabIndex={1} // tabIndex of textarea
                  // onBlur={onBlur} preferred to use only this option to update the content for performance reasons
                  onChange={onChange}
                  config={{
                    readonly: disabled,
                  }}
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
