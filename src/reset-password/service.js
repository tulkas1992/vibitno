import axios from "axios";

export const changePassword = data => {
  return axios.post(
    `${process.env.REACT_APP_BASE_API_URL}passwords/reset`,
    data,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
