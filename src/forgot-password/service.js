import axios from "axios";

export const sendEmail = email => {
  const data = {
    email: email
  };

  return axios.post(
    `${process.env.REACT_APP_BASE_API_URL}passwords/email`,
    data,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
