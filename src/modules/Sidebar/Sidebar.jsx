import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../UI/Title";
import Commit from "./components/Commit/Commit";
import { StyledSidebar } from "./Styled";
import { observer } from "mobx-react-lite";
import DocumentsStore from "../../store/DocumentsStore";
import CommentsStore from "../../store/CommentsStore";

const Sidebar = ({ socket }) => {
  const navigate = useNavigate();

  return (
    <StyledSidebar>
      <Title margin="40px 0 0 40px">Изменения</Title>
      {DocumentsStore?.commits?.length > 0 &&
        DocumentsStore?.commits
          ?.slice()
          ?.reverse()
          ?.map((item, i) => (
            <Commit
              key={i}
              commit={item}
              status={item?.status}
              onClick={() => {
                CommentsStore.setCommit(item);
                CommentsStore.setShowDiff(true);
              }}
              socket={socket}
              votesAccept={item?.votesAccept}
              votesReject={item?.votesReject}
            />
          ))}
    </StyledSidebar>
  );
};

export default observer(Sidebar);
