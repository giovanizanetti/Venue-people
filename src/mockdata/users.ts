import { userAddressMock } from './usersAddress'

export const avatars = ['https://xsgames.co/randomusers/assets/avatars/male/25.jpg', 'https://xsgames.co/randomusers/assets/avatars/female/45.jpg','https://xsgames.co/randomusers/assets/avatars/male/47.jpg', 'https://xsgames.co/randomusers/assets/avatars/female/78.jpg', 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg', 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg']


// generate a placeholder avatar for new forms
export const generateImage = () => avatars[Math.floor(Math.random() * avatars.length)]


const defaultData: IUser[] = [
  {
    id: 1,
    fullName: 'Staffy de Nielden',
    displayName: 'Staffy',
    initials: 'SN',
    email: 'staff_1@venue.com',
    phoneNumber: '0623383456',
    phoneCountryPrefix: '+31',
    teamIds: [1, 3],
    image: avatars[0],
    address: userAddressMock[1],
    isEmployee: true,
    xc: '1st Chef',
    userPermissions: []
  },
  {
    id: 2,
    fullName: 'Jenny Smith',
    displayName: 'Jenny',
    initials: 'JS',
    email: 'jenny_2@venue.com',
    phoneNumber: '0623383443',
    phoneCountryPrefix: '+31',
    teamIds: [2, 4],
    image: avatars[1],
    address: userAddressMock[2],
    isEmployee: true,
    xc: '2nd Chef',
    userPermissions: []
  },
  {
    id: 3,
    fullName: 'John Doe',
    displayName: 'John',
    initials: 'JD',
    email: 'john_3@venue.com',
    phoneNumber: '0626583456',
    phoneCountryPrefix: '+31',
    teamIds: [1, 2],
    image: avatars[3],
    address: userAddressMock[3],
    isEmployee: true,
    xc: '3rd Chef',
    userPermissions: []
  },
  {
    id: 4,
    fullName: 'Sarah Johnson',
    displayName: 'Sarah',
    initials: 'SJ',
    email: 'sarah_4@venue.com',
    phoneNumber: '0626583456',
    phoneCountryPrefix: '+31',
    teamIds: [3, 4],
    image: avatars[4],
    address: userAddressMock[4],
    isEmployee: true,
    xc: '4th Chef',
    userPermissions: []
  },
  {
    id: 5,
    fullName: 'Michael Brown',
    displayName: 'Michael',
    initials: 'MB',
    email: 'michael_5@venue.com',
    phoneNumber: '0626583433',
    phoneCountryPrefix: '+31',
    teamIds: [2, 3],
    image: avatars[5],
    address: userAddressMock[5],
    isEmployee: true,
    xc: '5th Chef',
    userPermissions: []
  },
  {
    id: 6,
    fullName: 'Emily Davis',
    displayName: 'Emily',
    initials: 'ED',
    email: 'emily_6@venue.com',
    phoneNumber: '0626583445',
    phoneCountryPrefix: '+31',
    teamIds: [1, 4],
    image: avatars[6],
    address: userAddressMock[6],
    isEmployee: true,
    xc: '6th Chef',
    userPermissions: []
  }
]

export interface IUser {
  id?: number
  fullName: string
  displayName: string
  initials: string
  email: string
  phoneNumber: string
  phoneCountryPrefix: string
  teamIds: number[]
  image: string
  address: (typeof userAddressMock)[6]
  isEmployee: boolean
  xc: string
  userPermissions?: string[]
}

const loadData = (): IUser[] => {
  const storedData = localStorage.getItem('users')
  if (storedData?.length) {
    return JSON.parse(storedData)
  } else return defaultData
}

export const mockUsers = loadData()
