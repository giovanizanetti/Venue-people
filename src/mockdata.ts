export const userAddressMock = {
  iri: '/api/user_address/1',
  id: 1,
  addressLineOne: 'Fake Street 1',
  addressLineTwo: 'Apt up',
  city: 'Amsterdam',
  country: 'NL',
  postalCode: '1010TD',
  state: null
}

export const mockUser = {
  iri: '/api/staff/1000',
  id: 1000,
  fullName: 'Staffy de Nielden',
  displayName: 'Staffy',
  initials: 'SN',
  email: 'staff_1@venue.com',
  phoneNumber: '68872901',
  phoneCountryPrefix: '+31',
  teamIds: [1, 3],
  image: 'image.png',
  address: userAddressMock,
  isEmployee: true,
  functionName: '1st Chef',
  userPermissions: []
}

const teamMock = {
  iri: '/api/teams/1',
  id: 1,
  name: 'Front-enders',
  color: '#C1E0B9',
  abbreviation: 'F',
  teamPermissions: []
}
