import Content from 'components/Content'
import Back from 'components/Back'
import Card from 'components/Card'
import ROUTES from 'constants/urls'
import LocationType from 'types/location'
import CharacterCard from 'components/CharacterCard'
import { useCharacterQuery } from 'queries/useCharactersQuery'

type LocationCharacterProps = {
  id: string | number
}

function LocationCharacter({ id }: LocationCharacterProps) {
  const { data, isError } = useCharacterQuery(id)

  if (isError) {
    return <p>Not found character</p>
  }

  return data ? (
    <CharacterCard {...data} key={`character-location-${data.id}`} />
  ) : null
}

function Location(props: LocationType) {
  return (
    <div>
      <Content>
        <Back />
        <h1>Location: {props.name}</h1>
      </Content>

      <Content>
        <Card
          title={props.name}
          informative={props.type}
          subtitle={props.dimension}
          href={`${ROUTES.LOCATIONS}/${props.id}`}
        />
      </Content>

      <Content>
        <h1>Characters</h1>
      </Content>

      <Content>
        {props.residents.map((character: string) => {
          const characterUrlParts = character.split('/').filter(Boolean)
          const characterId = characterUrlParts[characterUrlParts.length - 1]

          return (
            <LocationCharacter
              id={characterId}
              key={`character-${characterId}`}
            />
          )
        })}
      </Content>
    </div>
  )
}

export default Location
