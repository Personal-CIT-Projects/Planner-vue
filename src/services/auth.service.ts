import axios from "axios";
import {ref} from "vue";

axios.defaults.baseURL = "https://localhost:7050";

const AUTH_INFO_KEY = "AUTH_INFO"

const user = ref<UserInfo|null>(null)

setInterval(() => {
  refreshUserInfo()
}, 5000)

export function refreshUserInfo() {
  axios.get<AuthenticatedResponse>("/auth")
    .then(res => storeUserInfo(res.data))
    .catch(err => console.log(err))
}

function storeUserInfo(val:AuthenticatedResponse) {
  console.log("storing info", val)
  user.value = val.user ?? null
  if(!val.authenticated) localStorage.removeItem(AUTH_INFO_KEY)
  else localStorage.setItem(AUTH_INFO_KEY, JSON.stringify(val))
}

export default function isAuthenticated() {
  return getUserInfo() !== null
}

export function getUserInfo() {
  return user.value ?? null
}

export function getNameFromUser(user:UserInfo|null) {
  if(user === null) return ''
  return `${user.firstname} ${user.lastname}`
}

interface AuthenticatedResponse {
  authenticated: boolean
  roles: string[]
  user:UserInfo|null
}

interface UserInfo {
  id: string
  username: string
  avatar: string|null
  firstname:string
  lastname:string
}
