import { useMemo, useCallback } from 'react'
import { useQuery } from 'react-query'
import { EPISODES } from '../../constants/endpoints'
import { getEpisodesById } from '../../lib/episodes'
import ROUTES from '../../constants/urls'
import Link from 'next/link'
import CharacterType from 'types/character'

import * as S from './styles'

type CharacterCardProps = Omit<
  CharacterType,
  'origin' | 'gender' | 'type' | 'url'
>

type InfoTitleProps = {
  id: string | number
  name: string
  status: string
  species: string
}

type InfoDescriptionProps = {
  label: string
  name: string
  url: string
}

function InfoTitle({ id, name, status, species }: InfoTitleProps) {
  return (
    <S.InfoTitle status={status}>
      <h2>
        <Link href={`${ROUTES.CHARACTERS}/${id}`}>{name}</Link>
      </h2>
      <span>
        <span />
        {status} - {species}
      </span>
    </S.InfoTitle>
  )
}

function InfoDescription({ label, name, url }: InfoDescriptionProps) {
  return (
    <S.Info>
      <span>{label}:</span>
      <Link href={url}>{name}</Link>
    </S.Info>
  )
}

function CharacterCard({
  id,
  name,
  status,
  species,
  image,
  location,
  episode
}: CharacterCardProps) {
  const split = useCallback((value: string) => {
    const parts = value.split('/')
    return parts[parts.length - 1]
  }, [])

  const idEp = useMemo(() => split(episode[0]), [episode, split])

  const idLoc = useMemo(() => split(location.url), [location.url, split])

  const { data: fullEpisode } = useQuery(`${EPISODES}/${idEp}`, () =>
    getEpisodesById(idEp)
  )

  return (
    <S.Card aria-label="character">
      <S.Figure>
        <img src={image} alt={name} />
      </S.Figure>
      <S.ContentCard>
        <InfoTitle id={id} name={name} status={status} species={species} />
        <InfoDescription
          label="Last known location"
          name={location?.name}
          url={`${ROUTES.LOCATIONS}/${idLoc}`}
        />
        <InfoDescription
          label="First seen in"
          name={fullEpisode?.name || '-'}
          url={`${ROUTES.EPISODES}/${idEp}`}
        />
      </S.ContentCard>
    </S.Card>
  )
}

export default CharacterCard
