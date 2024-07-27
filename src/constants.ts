export const TEAM_TYPE = {
  management: 'management',
  frontOfHouse: 'frontOfHouse',
  backOfHouse: 'backOfHouse'
} as const

export const VALIDATION = {
  phoneNumber: 'matches:/^0?[1-9]([-. ]?[0-9]{2}){4}$/',
  countryCode: 'required|^+?d{1,3}$',
  email: 'required|email'
} as const

export const EMIT = {
  submit: 'submit',
  cancel: 'cancel',
  click: 'click',
  remove: 'remove'
} as const

export const ROUTE = {
  contactList: 'contact-list',
  addUser: 'add-user',
  contactEditor: 'contact-editor',
  home: 'home',
  notFound: '404'
}

export const LOCAL_STORAGE_PROPS = {
  users: 'users'
} as const
