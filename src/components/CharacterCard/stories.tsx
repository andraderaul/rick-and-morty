import { withKnobs, text, number, array, object } from '@storybook/addon-knobs'
import CharacterCard from './index'

export default {
  component: CharacterCard,
  title: 'Components/CharacterCard',
  decorators: [withKnobs]
}

export const Default = () => {
  const id = number('id', 1)
  const name = text('name', 'Rick Sanchez')
  const species = text('species', 'Human')
  const status = text('status', 'Alive')
  const image = text(
    'image',
    'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  )
  const episode = array('episode', [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2'
  ])
  const location = object('location', {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20'
  })

  return (
    <CharacterCard
      id={id}
      name={name}
      species={species}
      status={status}
      episode={episode}
      image={image}
      location={location}
    />
  )
}
