// src/axiosMock.ts
import axios from 'axios'
import type {
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import { mockUsers } from './users'
import { teamsMock } from './teams'
import type { IUser } from './users'

const axiosInstance = axios.create()
const generaterId = () => Math.floor(Math.random() * 1000000001)
const generateTeam = () => Math.floor(Math.random() * 3)

// Mocking function to intercept and mock responses

interface IConfig {
  data: IUser[]
  status: number
  statusText: string
  headers: AxiosRequestHeaders
  config: InternalAxiosRequestConfig
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
      }, 1000)
    })
  }

  return axiosInstance(url, config)
}

const put = (
  url: string,
  data: any,
  config?: IConfig
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
            status: 201,
            statusText: 'OK',
            headers: {},
            config: config || {}
          })
        }, 750)
      })
    }
  }
  return axiosInstance(url, config)
}

const post = (
  url: string,
  data: any,
  config?: IConfig
): Promise<AxiosResponse<IUser>> => {
  if (url && url.startsWith('/users/new')) {
    const id = generaterId()
    const teams = [generateTeam()]
    const user = { ...data, id }
    mockUsers.splice(0, 0, user)

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data,
          status: 201,
          statusText: 'OK',
          headers: {},
          config: config || {}
        })
      }, 500)
    })
  }
  return axiosInstance(url, config)
}

const remove = (
  url: string
): Promise<AxiosResponse<{ message: string; status: string }>> => {
  if (url && url.startsWith('/users/')) {
    const id = parseInt(url.split('/').pop() || '')
    const index = mockUsers.findIndex((record) => record.id === id)
    if (index !== -1) {
      mockUsers.splice(index, 1)

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              message: 'Resource deleted successfully',
              status: 'success'
            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
          })
        }, 500)
      })
    }
  }
  return axiosInstance(url)
}

export default {
  get,
  put,
  delete: remove,
  post
}
