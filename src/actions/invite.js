import axios from "axios";
import { API_URL } from "../config/consts";

export const createInvite = async (documentId, email, role) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/invite`,
      {
        documentId,
        role: role,
        email,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    console.log(response);

    return response;
  } catch (e) {
    alert("Аккаунт не найден");
  }
};

export const activateInvite = async (id) => {
  try {
    const response = await axios.post(`${API_URL}/api/invite/use/${id}`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    localStorage.setItem("token", response.data.token);

    console.log(response);

    return response;
  } catch (e) {
    alert("Приглашение не найдено");
  }
};
