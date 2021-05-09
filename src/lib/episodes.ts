import { QueryFunctionContext } from 'react-query'
import { EPISODES } from '../constants/endpoints'
import { GET } from '../constants/verbs'
import EpisodeType from 'types/episode'
import InfoType from 'types/info'
import api from '../services/api'

type ResponseEpisode = {
  info: InfoType
  results: EpisodeType[]
}

export async function getEpisodes(
  context?: QueryFunctionContext
): Promise<ResponseEpisode> {
  const params = context?.pageParam ? `?${context?.pageParam}` : ''

  const { data } = await api({
    method: GET,
    url: `${EPISODES}${params}`
  })

  return data
}

export async function getEpisodesById(
  id: number | string
): Promise<EpisodeType> {
  const { data } = await api({
    method: GET,
    url: `${EPISODES}/${id}`
  })

  return data
}
