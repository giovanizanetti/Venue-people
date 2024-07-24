export const TEAM_TYPE = {
  management: 'management',
  frontOfHouse: 'frontOfHouse',
  backOfHouse: 'backOfHouse'
} as const

export const VALIDATION = {
  phoneNumber: 'required|^(0[1-9]d{1,4}[s-]?d{6,8}|06[s-]?d{8})$',
  countryCode: 'required|^+?d{1,3}$',
  email: 'required|email'
}
