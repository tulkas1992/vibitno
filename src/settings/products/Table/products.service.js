import axios from "axios";
import { getUserToken } from "../../../app/utils/auth";

const token = getUserToken();

export const getProducts = accountId => {
  return axios.get(
    `${process.env.REACT_APP_BASE_API_URL}accounts/${accountId}/products`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const nextPage = (accountId, page) => {
  return axios.get(
    `${
      process.env.REACT_APP_BASE_API_URL
    }accounts/${accountId}/products?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const previousPage = (accountId, page) => {
  return axios.get(
    `${
      process.env.REACT_APP_BASE_API_URL
    }accounts/${accountId}/products?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};
