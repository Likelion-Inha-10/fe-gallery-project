//axios 기능 import 하기
import axios from "axios";


// API 주소 입력
const request = axios.create({
  baseURL: "https://gallery.devhudi.xyz",
});

// 밖으로 보내서 나중에 API.js에서 받음.
export default request;
