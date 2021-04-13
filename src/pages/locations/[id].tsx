import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import ROUTES from 'constants/urls'
import { LOCATIONS } from 'constants/endpoints'
import { getLocations, getLocationsById } from 'lib/location'
import LocationType from 'types/location'

export async function getStaticPaths() {
  const data = await getLocations()
  const paths = data.results?.map(
    (location: LocationType) => `${ROUTES.LOCATIONS}/${location.id}`
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

  await queryClient.prefetchQuery(`${LOCATIONS}/${id}`, () =>
    getLocationsById(id)
  )

  return {
    props: {
      deHydratedState: dehydrate(queryClient)
    }
  }
}

function Location() {
  const router = useRouter()

  const {
    isError,
    isLoading,
    data
  } = useQuery(`${LOCATIONS}/${router.query.id}`, () =>
    getLocationsById(`${router.query?.id}`)
  )

  if (isLoading) {
    return <p>carregando...</p>
  }

  if (isError) {
    return <p>erro :/</p>
  }

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.dimension}</p>
    </div>
  )
}

export default Location
