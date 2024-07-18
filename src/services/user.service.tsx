import axios from "axios";
// console.log(import.meta.env.BASE_URL);
const USER_URL = `${import.meta.env.VITE_API_URL}/usuario`;
console.log(USER_URL);
export const login = async (username: string, password: string) => {
  console.log(username, password);
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
