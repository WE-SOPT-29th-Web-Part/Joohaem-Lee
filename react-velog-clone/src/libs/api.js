import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000",
  header: {
    // json-server의 데이터 type
    "Content-Type": "application/json",
  },
});
