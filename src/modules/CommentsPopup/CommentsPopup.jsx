import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import CommentsStore from "../../store/CommentsStore";
import DocumentsStore from "../../store/DocumentsStore";
import Button from "../../UI/Button";
import Textarea from "../../UI/Textarea";
import Comment from "./components/Comment";
import {
  Background,
  ButtonContainer,
  CommentsList,
  Container,
  LeftText,
  RightText,
  TopText,
  Window,
} from "./Styled";
import { getComments } from "../../actions/comment";
import AppStore from "../../store/AppStore";
import { toJS } from "mobx";

const CommentsPopup = ({ socket }) => {
  const [message, setMessage] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    socket.on("acceptComment", (comment) => {
      if (CommentsStore?.commit?._id === comment?.commitId) {
        if (
          !toJS(CommentsStore.comments)?.find((x) => x?._id === comment?._id)
        ) {
          console.log(CommentsStore.comments);
          CommentsStore.setComments([...CommentsStore.comments, comment]);
        }
      } else {
        console.log(CommentsStore?.commit?._id);
        console.log(comment?.commitId);
      }
    });
  }, []);

  useEffect(() => {
    if (CommentsStore.commit?._id) {
      getComments(CommentsStore.commit?._id).then((response) => {
        CommentsStore.setComments(response.data);
      });
    }
  }, [CommentsStore.commit]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [CommentsStore.comments]);

  const onAddComment = () => {
    let comment = {
      commitId: CommentsStore.commit?._id,
      userId: AppStore.user?.id,
      email: AppStore.user?.email,
      text: message,
      date: new Date(),
    };

    socket.emit("sendComment", {
      document: DocumentsStore?.document,
      user: AppStore.user,
      comment,
    });

    setMessage("");
  };

  return (
    <>
      <Background
        onClick={() => CommentsStore.setShowModal(false)}
        show={CommentsStore.showModal}
      />
      <Window show={CommentsStore.showModal}>
        <TopText>
          <LeftText>Комментарии к изменению:</LeftText>
          <RightText>
            {CommentsStore.commit?.date?.slice(0, 10)}
            {CommentsStore.commit?.date?.slice(11, 16)} от
            {CommentsStore.commit?.email}
          </RightText>
        </TopText>
        <CommentsList>
          {CommentsStore.comments?.length > 0 &&
            CommentsStore.comments?.map((item, i) => (
              <Comment key={i} email={item?.email} text={item?.text} />
            ))}

          <div ref={bottomRef}></div>
        </CommentsList>
        {AppStore?.role === "Создатель" ||
        AppStore?.role === "Редактор" ||
        AppStore?.role === "Комментатор" ? (
          <>
            <Textarea
              margin="30px 0 0 0"
              height="70px"
              value={message}
              setValue={setMessage}
            />
            <ButtonContainer>
              <Button onClick={onAddComment} wauto margin="14px 0 0 0">
                Отправить
              </Button>
            </ButtonContainer>
          </>
        ) : (
          ""
        )}
      </Window>
    </>
  );
};

export default observer(CommentsPopup);
