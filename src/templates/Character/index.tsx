import { useQuery } from 'react-query'
import CharacterCard from 'components/CharacterCard'
import Card from 'components/Card'
import CharacterType from 'types/character'
import { EPISODES } from 'constants/endpoints'
import { getEpisodesById } from 'lib/episodes'
import ROUTES from 'constants/urls'
import Content from 'components/Content'
import Back from 'components/Back'

type CharacterEpisodesProps = {
  id: string | number
}

function CharacterEpisodes({ id }: CharacterEpisodesProps) {
  const { data, isError } = useQuery(`${EPISODES}/${id}`, () =>
    getEpisodesById(id)
  )
  if (isError) {
    return null
  }

  return data ? (
    <Card
      key={`character-episodes-${data.id}`}
      title={data.name}
      informative={data.episode}
      subtitle={data.air_date}
      href={`${ROUTES.EPISODES}/${data.id}`}
    />
  ) : (
    <div />
  )
}

function Character(props: CharacterType) {
  return (
    <div>
      <Content>
        <Back />
        <h1>{props.name}</h1>
      </Content>

      <Content>
        <CharacterCard {...props} />
      </Content>

      <Content>
        <h1>Episodes</h1>
      </Content>

      <Content>
        {props.episode.map((episode: string) => {
          const episodeUrlParts = episode.split('/').filter(Boolean)
          const episodeId = episodeUrlParts[episodeUrlParts.length - 1]

          return (
            <CharacterEpisodes id={episodeId} key={`episode-${episodeId}`} />
          )
        })}
      </Content>
    </div>
  )
}

export default Character
