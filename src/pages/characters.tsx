import { useMemo } from 'react'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getCharacters } from 'lib/characters'
import { CHARACTERS } from 'constants/endpoints'
import CharacterType from 'types/character'
import Content from 'components/Content'
import CharacterCard from 'components/CharacterCard'
import Button from 'components/Button'
import Back from 'components/Back'
import { useCharactersQuery } from 'queries/useCharactersQuery'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(CHARACTERS, getCharacters)

  return {
    props: {
      deHydratedState: dehydrate(queryClient)
    }
  }
}

function Characters() {
  const { isError, isLoading, data, hasNextPage, fetchNextPage } =
    useCharactersQuery()

  const renderData = useMemo(
    () =>
      data?.pages?.reduce<Array<CharacterType>>(
        (acc, page) => [...acc, ...page?.results],
        []
      ),
    [data?.pages]
  )

  if (isLoading) {
    return <p>carregando...</p>
  }

  if (isError) {
    return <p>erro :/</p>
  }

  return (
    <>
      <Content>
        <Back />
        <h1>Characters</h1>
      </Content>
      <Content>
        {renderData?.map((character: CharacterType) => (
          <CharacterCard {...character} key={character.id} />
        ))}
      </Content>
      {hasNextPage && (
        <Button
          title="See more"
          type="button"
          onClick={() => fetchNextPage()}
        />
      )}
    </>
  )
}

export default Characters
