import axios from "axios";
import { API_URL } from "../config/consts";

export const getComments = async (commitId) => {
  try {
    const response = await axios.get(`${API_URL}/api/comment/all/${commitId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};
