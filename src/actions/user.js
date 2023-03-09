import axios from "axios";
import { API_URL } from "../config/consts";

export const auth = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/auth/auth`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (e) {
    localStorage.removeItem("token");
  }
};

export const loginAction = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);

    return response;
  } catch (e) {
    alert("Аккаунт не найден");
  }
};

export const registrationAction = async (email, password) => {
  const response = await axios
    .post(`${API_URL}/api/auth/registration`, { email, password })
    .catch(function (error) {
      alert(error.response.data.message);
    });

  return response;
};

export const addUser = async (email, role, documentId) => {
  const response = await axios
    .post(
      `${API_URL}/api/document/addUser/${documentId}`,
      {
        email,
        role,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    .catch(function (error) {
      console.log(error.response);
    });

  return response;
};

export const logout = () => {
  localStorage.removeItem("token");
};
