import { QueryFunctionContext } from 'react-query'
import { character, characters } from '../mock/fixtures/characters'

import { getCharacters, getCharactersById } from './characters'

describe('characters', () => {
  it('should return all characters', async () => {
    const data = await getCharacters()
    expect(data).toEqual(characters)
  })

  it('should return all characters page 2', async () => {
    const data = await getCharacters({ pageParam: 2 } as QueryFunctionContext)
    expect(data).toEqual(characters)
  })

  it('should return a character', async () => {
    const data = await getCharactersById(1)
    expect(data).toEqual(character)
  })
})
