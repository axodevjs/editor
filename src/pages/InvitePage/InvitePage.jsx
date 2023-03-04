import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activateInvite } from "../../actions/invite";
import AppStore from "../../store/AppStore";

const InvitePage = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    activateInvite(id).then((r) => {
      if (r?.status === 200) {
        AppStore.setUser(r.data?.user);

        navigate(`/editor/${r?.data?.document?._id}`);
      }
    });
  }, []);

  return <div></div>;
};

export default InvitePage;
