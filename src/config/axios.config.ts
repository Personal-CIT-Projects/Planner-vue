import axios from "axios";

export default function init() {
  axios.interceptors.request.clear()
  axios.interceptors.request.use(function (conf) {
    conf.withCredentials = true
    return conf
  })
}
