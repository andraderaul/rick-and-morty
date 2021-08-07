import { EPISODES } from 'constants/endpoints'
import { getEpisodes, getEpisodesById } from 'lib/episodes'
import { useQuery, useInfiniteQuery } from 'react-query'

export function useEpisodeQuery(id: string | number) {
  return useQuery(`${EPISODES}/${id}`, () => getEpisodesById(id))
}

export function useEpisodesQuery() {
  return useInfiniteQuery(EPISODES, getEpisodes, {
    getNextPageParam: (lastPage) =>
      lastPage.info.next ? lastPage.info.next.split('?')[1] : null
  })
}
