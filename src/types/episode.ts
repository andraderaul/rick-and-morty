import Character from './character'

type Episode = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Character[]
  url: string
}

export default Episode
