import type { TEAM_TYPE } from './constants'
export type TeamType = (typeof TEAM_TYPE)[keyof typeof TEAM_TYPE]
