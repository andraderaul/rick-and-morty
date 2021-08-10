import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import ROUTES from 'constants/urls'
import { EPISODES } from 'constants/endpoints'
import { getEpisodes, getEpisodesById } from 'lib/episodes'
import EpisodeType from 'types/episode'
import EpisodeTemplate from 'templates/Episode'

export async function getStaticPaths() {
  const data = await getEpisodes()
  const paths = data.results?.map(
    (episode: EpisodeType) => `${ROUTES.EPISODES}/${episode.id}`
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

  await queryClient.prefetchQuery(`${EPISODES}/${id}`, () =>
    getEpisodesById(id)
  )

  return {
    props: {
      deHydratedState: dehydrate(queryClient)
    }
  }
}

function Episode() {
  const router = useRouter()

  const { isError, isLoading, data } = useQuery(
    `${EPISODES}/${router.query.id}`,
    () => getEpisodesById(`${router.query?.id}`)
  )

  if (isLoading) {
    return <p>carregando...</p>
  }

  if (isError) {
    return <p>erro :/</p>
  }

  return data && <EpisodeTemplate {...data} />
}

export default Episode
