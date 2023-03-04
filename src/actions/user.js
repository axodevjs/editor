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

export const loginAction = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);

    return response;
  } catch (e) {
    alert("Аккаунт не найден");
  }
};

export const registrationAction = async (username, email, password) => {
  const response = await axios
    .post(`${API_URL}/api/auth/registration`, { username, email, password })
    .catch(function (error) {
      alert(error.response.data.message);
    });

  return response;
};

export const logout = () => {
  localStorage.removeItem("token");
};
