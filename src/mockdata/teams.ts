export const teamsMock = [
  {
    id: 1,
    name: { en: 'management', nl: 'beheer' },
    color: '#ffc9c9',
    abbreviation: 'M',
    teamPermissions: ['management']
  },

  {
    id: 2,
    name: { en: 'front of house', nl: 'voorkant van het huis' },
    color: '#ffc9c9',
    abbreviation: 'F',
    teamPermissions: []
  },

  {
    id: 3,
    name: { en: 'back of house', nl: 'achterkant van het huis' },
    color: '#c1e0b9',
    abbreviation: 'B',
    teamPermissions: []
  }
]

export interface ITeam {
  id: number
  name: { en: string; nl: string }
  color: string
  abbreviation: string
  teamPermissions: string[]
}
