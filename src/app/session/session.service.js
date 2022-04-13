import axios from "axios";

export const login = user => {
  const bodyFormData = new FormData();

  bodyFormData.set("email", user.username);
  bodyFormData.set("password", user.password);

  return axios.post(
    `${process.env.REACT_APP_BASE_API_URL}login`,
    bodyFormData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
};

export const getCurrentUser = data => {
  return axios.get(`${process.env.REACT_APP_BASE_API_URL}user`, {
    headers: {
      Authorization: `${data.token_type} ${data.access_token}`
    }
  });
};
