import { renderHook } from '@testing-library/react-hooks'
import { wrapper } from '../../mock/queryClientProvider'
import { characters, character } from '../../mock/fixtures/characters'
import { useCharacterQuery, useCharactersQuery } from './index'

describe('Queries characters', () => {
  describe('useCharacterQuery', () => {
    it('should be loading character', async () => {
      const { result } = renderHook(() => useCharacterQuery(1), { wrapper })
      expect(result.current.isLoading).toBe(true)
    })

    it('should be return character', async () => {
      const { result, waitFor } = renderHook(() => useCharacterQuery(1), {
        wrapper
      })
      await waitFor(() => result.current.isSuccess)
      expect(result.current.data).toEqual(character)
    })
  })

  describe('useCharactersQuery', () => {
    it('should be loading characters', async () => {
      const { result } = renderHook(useCharactersQuery, { wrapper })
      expect(result.current.isLoading).toBe(true)
    })
    it('should be return characters', async () => {
      const { result, waitFor } = renderHook(useCharactersQuery, { wrapper })
      await waitFor(() => result.current.isSuccess)
      expect(result.current.data?.pages).toEqual([characters])
    })
  })
})
