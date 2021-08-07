import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import { baseURL } from '../constants/endpoints'

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

const api = <T>(config: AxiosRequestConfig) =>
  instance(config) as AxiosPromise<T>

export default api
