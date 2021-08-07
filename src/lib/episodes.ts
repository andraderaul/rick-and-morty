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
  try {
    const params = context?.pageParam ? `?${context?.pageParam}` : ''

    const { data } = await api<ResponseEpisode>({
      method: GET,
      url: `${EPISODES}${params}`
    })

    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getEpisodesById(
  id: number | string
): Promise<EpisodeType> {
  try {
    const { data } = await api<EpisodeType>({
      method: GET,
      url: `${EPISODES}/${id}`
    })
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}
