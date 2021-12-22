import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:5000/api",
  header: {
    // json-server의 데이터 type
    "Content-Type": "application/json",
  },
});

export const imageClient = axios.create({
  baseURL: "http://localhost:5000/api/image",
  header: {
    // json-server의 데이터 type
    "Content-Type": "multipart/form-data",
  },
});
