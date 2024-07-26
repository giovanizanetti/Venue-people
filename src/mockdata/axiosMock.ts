// src/axiosMock.ts
import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { mockUsers } from './users'
import type { IUser } from './users'

// Create an Axios instance
const axiosInstance = axios.create()

// Mocking function to intercept and mock responses

interface IConfig {
  data: IUser[]
  status: number
  statusText: string
  header: object
  config: any
}

const get = (
  url: string,
  config?: IConfig
): Promise<AxiosResponse<IUser[]>> => {
  if (url === '/users') {
    return new Promise((resolve, reject) => {
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

const put = (
  url: string,
  data: any,
  config?: IConfig,
): Promise<AxiosResponse<IUser>> => {
  if (url && url.startsWith('/users/')) {

    const id = parseInt(url.split('/').pop() || '')
    const index = mockUsers.findIndex((record) => record.id === id)
    if (index !== -1) {
      mockUsers[index] = { ...mockUsers[index], ...data }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: mockUsers[index],
            status: 200,
            statusText: 'OK',
            headers: {},
            config: config || {}
          })
        }, 1000) // Simulate a delay
      })
    }
  }
  return axiosInstance(url, config)
}

// export default mockAxios

export default {
  get,
  put
}
