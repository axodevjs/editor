import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import CommentsStore from "../../store/CommentsStore";
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

const CommentsPopup = () => {
  const [message, setMessage] = useState("");
  const bottomRef = useRef(null);

  const onAddComment = () => {
    CommentsStore.setComments([
      ...CommentsStore.comments,
      {
        date: new Date(),
        name: "Алексей",
        text: message,
      },
    ]);

    setMessage("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [CommentsStore.comments]);

  return (
    <>
      <Background
        onClick={() => CommentsStore.setShowModal(false)}
        show={CommentsStore.showModal}
      />
      <Window show={CommentsStore.showModal}>
        <TopText>
          <LeftText>Комментарии к изменению:</LeftText>
          <RightText>2022-10-10 15:30 от Алексей</RightText>
        </TopText>
        <CommentsList>
          {CommentsStore.comments?.length > 0 &&
            CommentsStore.comments?.map((item, i) => (
              <Comment key={i} name={item?.name} text={item?.text} />
            ))}

          <div ref={bottomRef}></div>
        </CommentsList>
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
      </Window>
    </>
  );
};

export default observer(CommentsPopup);
