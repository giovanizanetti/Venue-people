// src/axiosMock.ts
import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { mockUsers } from './users'
import type { IUser } from './users'

// Create an Axios instance
const axiosInstance = axios.create()

// Mocking function to intercept and mock responses

const mockAxios = (
  url: string,
  config?: any
): Promise<AxiosResponse<IUser[]>> => {
  if (url === '/users') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockUsers,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: config || {}
        })
      }, 1000) // Simulate a delay of 2 seconds
    })
  }

  // For other endpoints, use the actual Axios instance
  return axiosInstance(url, config)
}

// export default mockAxios

export default {
  get: mockAxios
}
