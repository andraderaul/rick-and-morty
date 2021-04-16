import { useMemo } from 'react'
import { QueryClient, useInfiniteQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getLocations } from 'lib/location'
import { LOCATIONS } from 'constants/endpoints'
import LocationType from 'types/location'
import Content from 'components/Content'
import Card from 'components/Card'
import ROUTES from 'constants/urls'
import Button from 'components/Button'
import Back from 'components/Back'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(LOCATIONS, getLocations)

  return {
    props: {
      deHydratedState: dehydrate(queryClient)
    }
  }
}

function Locations() {
  const {
    isError,
    isLoading,
    data,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery(LOCATIONS, getLocations, {
    getNextPageParam: (lastPage) =>
      lastPage.info.next ? lastPage.info.next.split('?')[1] : null
  })

  const renderData = useMemo(
    () =>
      data?.pages?.reduce<Array<LocationType>>(
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
        <h1>Locations</h1>
      </Content>
      <Content>
        {renderData?.map((location: LocationType) => (
          <Card
            key={location.id}
            title={location.name}
            informative={location.type}
            subtitle={location.dimension}
            href={`${ROUTES.LOCATIONS}/${location.id}`}
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

export default Locations
