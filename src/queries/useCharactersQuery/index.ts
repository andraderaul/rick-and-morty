import { CHARACTERS } from 'constants/endpoints'
import { getCharacters, getCharactersById } from 'lib/characters'
import { useQuery, useInfiniteQuery } from 'react-query'

export function useCharacterQuery(id: string | number) {
  return useQuery(`${CHARACTERS}/${id}`, () => getCharactersById(id))
}

export function useCharactersQuery() {
  return useInfiniteQuery(CHARACTERS, getCharacters, {
    getNextPageParam: (lastPage) =>
      lastPage.info.next ? lastPage.info.next.split('?')[1] : null
  })
}
