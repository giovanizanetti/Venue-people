import { expect, test, describe } from 'vitest'
import { capitalize } from '../../helpers/strings'

describe('String utils', () => {
  const lowecased = 'memorix'
  const capitalized = 'Memorix'
  
  test('capitilize word correctelly', () => {
    expect(capitalize(lowecased)).toEqual(capitalized)
  })
})
