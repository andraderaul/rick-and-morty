import { QueryFunctionContext } from 'react-query'
import api from '../services/api'
import { CHARACTERS } from '../constants/endpoints'
import CharacterType from 'types/character'
import InfoType from 'types/info'
import { GET } from 'constants/verbs'

type ResponseCharacters = {
  info: InfoType
  results: CharacterType[]
}

export async function getCharacters(
  context?: QueryFunctionContext
): Promise<ResponseCharacters> {
  try {
    const params = context?.pageParam ? `?${context?.pageParam}` : ''

    const { data } = await api<ResponseCharacters>({
      method: GET,
      url: `${CHARACTERS}${params}`
    })

    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getCharactersById(
  id: number | string
): Promise<CharacterType> {
  try {
    const { data } = await api<CharacterType>({
      method: GET,
      url: `${CHARACTERS}/${id}`
    })

    return data
  } catch (error) {
    return Promise.reject(error)
  }
}
