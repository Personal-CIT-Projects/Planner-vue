import axios from "axios";

axios.defaults.baseURL = "https://localhost:7050";
export default function init() {
  axios.interceptors.request.clear()
  axios.interceptors.request.use(function (conf) {
    conf.withCredentials = true
    return conf
  })
}
