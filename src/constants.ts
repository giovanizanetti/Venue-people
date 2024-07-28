export const TEAM_TYPE = {
  management: 'management',
  frontOfHouse: 'frontOfHouse',
  backOfHouse: 'backOfHouse'
} as const

export const VALIDATION = {
  number: 'number',
  prefix: 'required|number|min:2',
  phoneNumber: 'required|number|min:6',
  email: 'required|email',
  required: 'required'
} as const

export const EMIT = {
  submit: 'submit',
  cancel: 'cancel',
  click: 'click',
  remove: 'remove',
  changePhoneNumber: 'phone-number-change',
  changePrefix: 'prefix-change'
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
