import React, { useMemo } from 'react'
import { QueryClient, useInfiniteQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getEpisodes } from 'lib/episodes'
import { EPISODES } from 'constants/endpoints'
import EpisodeType from 'types/episode'
import Content from 'components/Content'
import Card from 'components/Card'
import ROUTES from 'constants/urls'
import Button from 'components/Button'
import Back from 'components/Back'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(EPISODES, getEpisodes)

  return {
    props: {
      deHydratedState: dehydrate(queryClient)
    }
  }
}

function Episodes() {
  const {
    isError,
    isLoading,
    data,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery(EPISODES, getEpisodes, {
    getNextPageParam: (lastPage) =>
      lastPage.info.next ? lastPage.info.next.split('?')[1] : null
  })

  const renderData = useMemo(
    () =>
      data?.pages?.reduce<Array<EpisodeType>>(
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
        <h1>Episodes</h1>
      </Content>
      <Content>
        {renderData?.map((episode: EpisodeType) => (
          <Card
            key={episode.id}
            title={episode.name}
            informative={episode.episode}
            subtitle={episode.air_date}
            href={`${ROUTES.EPISODES}/${episode.id}`}
          />
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

export default Episodes
