import { QueryFunctionContext } from 'react-query'
import { character, characters } from '../mock/fixtures/characters'
import { server, rest } from '../mock/server'

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

  it('should return an error when get episodes', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    try {
      await getCharacters()
    } catch (error) {
      expect(error.isAxiosError).toBe(true)
      expect(error.response.status).toBe(500)
    }
  })

  it('should return an error when get episode', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    try {
      await getCharactersById(1)
    } catch (error) {
      expect(error.isAxiosError).toBe(true)
      expect(error.response.status).toBe(500)
    }
  })
})
