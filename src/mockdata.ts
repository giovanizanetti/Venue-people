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
  url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F145908%2Fraw%2F52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg&f=1&nofb=1&ipt=91ca6ab4989b155567f4425fdf0ad685bb4daa71b0601a1188ff0ff7ed50754c&ipo=images',
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
