import CharacterCard from 'components/CharacterCard'
import Card from 'components/Card'
import CharacterType from 'types/character'
import ROUTES from 'constants/urls'
import Content from 'components/Content'
import Back from 'components/Back'
import { useEpisodeQuery } from 'queries/useEpisodesQuery'

type CharacterEpisodesProps = {
  id: string | number
}

function CharacterEpisodes({ id }: CharacterEpisodesProps) {
  const { data, isError } = useEpisodeQuery(id)

  if (isError) {
    return <p>Not found episodes</p>
  }

  return data ? (
    <Card
      key={`character-episodes-${data.id}`}
      title={data.name}
      informative={data.episode}
      subtitle={data.air_date}
      href={`${ROUTES.EPISODES}/${data.id}`}
    />
  ) : null
}

function Character(props: CharacterType) {
  return (
    <div>
      <Content>
        <Back />
        <h1>Character: {props.name}</h1>
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
