import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3006',
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  console.dir(config);
  // 按照后端的格式要求拼接token
  // config.headers.token = localStorage.getItem('TOKEN')
  return config
})

request.interceptors.response.use((response) => {
  return response
})

export { request }
