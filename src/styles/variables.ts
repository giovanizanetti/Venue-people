export const COLOR = {
  white1: '#efefef',
  pink1: '#ffc9c9',
  purple1: '#a5a4d4',
  gree1: '#c1e0b9'
}

export const BREAKPOINTS = {
  mobile: 390,
  tablet: 600,
  desktop: 1100
}

export const TYPOGRAPHY = {
  lg: '45px',
  xxl: '70px'
} as const
export type TTypography = (typeof TYPOGRAPHY)[keyof typeof TYPOGRAPHY]
