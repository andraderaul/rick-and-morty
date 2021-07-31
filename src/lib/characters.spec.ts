import { CHARACTERS } from '../constants/endpoints'
import { QueryFunctionContext } from 'react-query'
import { rest, server } from '../mock/server'
import { character, characters } from '../mock/fixtures/characters'
import { baseURL } from '../constants/endpoints'

import { getCharacters, getCharactersById } from './characters'

describe('characters', () => {
  beforeEach(() => {
    server.use(
      rest.get(`${baseURL}${CHARACTERS}`, (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(characters))
      }),
      rest.get(`${baseURL}${CHARACTERS}/1`, (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(character))
      })
    )
  })

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
