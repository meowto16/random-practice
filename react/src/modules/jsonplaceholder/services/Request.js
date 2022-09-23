import axios from 'axios'

export const Request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
})