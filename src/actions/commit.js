import axios from "axios";
import { API_URL } from "../config/consts";

export const getCommits = async (documentId) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/commit/all/${documentId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};
