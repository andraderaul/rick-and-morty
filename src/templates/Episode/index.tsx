import { useQuery } from 'react-query'
import Content from 'components/Content'
import Back from 'components/Back'
import Card from 'components/Card'
import ROUTES from 'constants/urls'
import EpisodeType from 'types/episode'
import { CHARACTERS } from 'constants/endpoints'
import CharacterCard from 'components/CharacterCard'
import { getCharactersById } from 'lib/characters'

type EpisodesCharacterProps = {
  id: string | number
}

function EpisodesCharacter({ id }: EpisodesCharacterProps) {
  const { data, isError } = useQuery(`${CHARACTERS}/${id}`, () =>
    getCharactersById(id)
  )
  if (isError) {
    return null
  }

  return data ? (
    <CharacterCard {...data} key={`character-episodes-${data.id}`} />
  ) : (
    <div />
  )
}

function Episode(props: EpisodeType) {
  return (
    <div>
      <Content>
        <Back />
        <h1>{props.name}</h1>
      </Content>

      <Content>
        <Card
          title={props.name}
          informative={props.episode}
          subtitle={props.air_date}
          href={`${ROUTES.EPISODES}/${props.id}`}
        />
      </Content>

      <Content>
        <h1>Characters</h1>
      </Content>

      <Content>
        {props.characters.map((character: string) => {
          const characterUrlParts = character.split('/').filter(Boolean)
          const characterId = characterUrlParts[characterUrlParts.length - 1]

          return (
            <EpisodesCharacter
              id={characterId}
              key={`character-${characterId}`}
            />
          )
        })}
      </Content>
    </div>
  )
}

export default Episode
