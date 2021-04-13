import Link from 'next/link'
import ROUTES from 'constants/urls'
import Hero from 'components/Hero'
import Wrapper from 'components/Wrapper'

export default function Home() {
  return (
    <>
      <Hero />
      <Wrapper>
        <Link href={ROUTES.CHARACTERS}>Characters</Link>
        <Link href={ROUTES.EPISODES}>Episodes</Link>
        <Link href={ROUTES.LOCATIONS}>Locations</Link>
      </Wrapper>
    </>
  )
}
