import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost',
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((response) => {
  return response
})

export { request }
