import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import CommentsStore from "../../../../store/CommentsStore";
import User from "../../../../UI/User";
import {
  ActionIcon,
  Actions,
  CommentIcon,
  Date,
  Left,
  Right,
  Sides,
  StyledCommit,
  Votes,
} from "./Styled";
import { toJS } from "mobx";
import DocumentsStore from "../../../../store/DocumentsStore";
import AppStore from "../../../../store/AppStore";

const Commit = (props) => {
  const [voted, setVoted] = useState(false);

  const onCommentClick = () => {
    CommentsStore.setShowModal(true);
    console.log(CommentsStore.showModal);
  };

  const onAccept = () => {
    props?.socket?.emit("actionCommit", {
      document: toJS(DocumentsStore.document),
      user: AppStore.user,
      commit: props?.commit,
      type: "accept",
    });
    setVoted(true);
  };

  const onReject = () => {
    props?.socket?.emit("actionCommit", {
      document: toJS(DocumentsStore.document),
      user: AppStore.user,
      commit: props?.commit,
      type: "reject",
    });
    setVoted(true);
  };

  return (
    <StyledCommit>
      <Sides>
        <Left onClick={props?.onClick}>
          <User
            name="Алексей"
            color={
              (props?.status === "waiting" && "#E3A400") ||
              (props?.status === "accepted" && "#2FA0F2") ||
              (props?.status === "rejected" && "red")
            }
          />
          <Date>2022-10-10 &nbsp; 15:30</Date>
        </Left>
        <Right>
          <CommentIcon
            onClick={onCommentClick}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 22L18 18H2V2H22V22Z" fill="#333333" />
          </CommentIcon>
        </Right>
      </Sides>

      {!voted && (
        <Actions>
          <ActionIcon
            onClick={onAccept}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0303 26.75L5.71777 18.4375L7.7959 16.3594L14.0303 22.5938L27.4105 9.21356L29.4886 11.2917L14.0303 26.75Z"
              fill="black"
            />
          </ActionIcon>
          <ActionIcon onClick={onReject}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.8122 9.84794L25.7559 7.79169L17.6038 15.9438L9.45176 7.79169L7.39551 9.84794L15.5476 18L7.39551 26.1521L9.45176 28.2084L17.6038 20.0563L25.7559 28.2084L27.8122 26.1521L19.6601 18L27.8122 9.84794Z"
                fill="black"
              />
            </svg>
          </ActionIcon>
        </Actions>
      )}

      <Votes>
        Приняли:
        {props?.votesAccept.map((item, i) => (
          <span key={i}>&nbsp; {item?.username}</span>
        ))}
      </Votes>
      <Votes>
        Отклонили:
        {props?.votesReject.map((item, i) => (
          <span key={i}>&nbsp; {item?.username}</span>
        ))}
      </Votes>
    </StyledCommit>
  );
};

export default observer(Commit);
