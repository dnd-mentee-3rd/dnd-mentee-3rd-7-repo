import axios from "axios";
import { setInterceptors } from "./common/interceptors";

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL
  });
}

// 액시오스 초기화 함수
function createInstanceWithAuth(url: string) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
export const sign = createInstanceWithAuth("sign");

// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}