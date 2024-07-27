import { teamsMock } from "./teams"
import { mockUsers } from "./users"

export const getData = (mockData: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 2000) // Simulate a 2-second delay
  })
}

export const getUsers = getData(mockUsers)

export const getTeams = getData(teamsMock)


