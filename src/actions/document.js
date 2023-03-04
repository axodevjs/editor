import axios from "axios";
import { API_URL } from "../config/consts";

export const getDocuments = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/api/document/all/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const createDocument = async (user, title) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/document/`,
      {
        title: title,
        users: [{ role: "Владелец", userId: user?.id }],
        commits: [],
        content: "",
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getOneDocument = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/document/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};
