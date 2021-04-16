import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import ROUTES from 'constants/urls'
import { CHARACTERS } from 'constants/endpoints'
import { getCharacters, getCharactersById } from 'lib/characters'
import CharacterType from 'types/character'
import CharacterTemplate from 'templates/Character'

export async function getStaticPaths() {
  const data = await getCharacters()
  const paths = data.results?.map(
    (character: CharacterType) => `${ROUTES.CHARACTERS}/${character.id}`
  )

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  const id = params?.id as string
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(`${CHARACTERS}/${id}`, () =>
    getCharactersById(id)
  )

  return {
    props: {
      deHydratedState: dehydrate(queryClient)
    }
  }
}

function Character() {
  const router = useRouter()

  const {
    isError,
    isLoading,
    data
  } = useQuery(`${CHARACTERS}/${router.query.id}`, () =>
    getCharactersById(`${router.query?.id}`)
  )

  if (isLoading) {
    return <p>carregando...</p>
  }

  if (isError) {
    return <p>erro :/</p>
  }

  return <CharacterTemplate {...data} />
}

export default Character
