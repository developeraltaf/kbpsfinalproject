import axios from "axios";

const api = axios.create({
  baseURL: "https://kbpsschooladmin.herokuapp.com",
});

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default api;

export const domainName= "https://kbpsschooladmin.herokuapp.com/";
