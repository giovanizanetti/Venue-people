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
  save: 'save'
} as const
