import axios from "axios";

const USER_URL = import.meta.env.NODE_ENV === "prod" ? `${import.meta.env.VITE_API_URL_PROD}/usuario` : `${import.meta.env.VITE_API_URL}/usuario`;

export const login = async (username: string, password: string) => {
  try {
    const res = await axios.post(
      `${USER_URL}/login`,
      { username, password },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const res = await axios.post(
      `${USER_URL}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
