import Link from 'next/link'

import * as S from './styles'

type CardProps = {
  title: string
  informative: string
  subtitle: string
  href: string
}

function Card({ title, informative, subtitle, href }: CardProps) {
  return (
    <S.Card aria-label="card">
      <S.ContentTitle>
        <h2>
          <Link href={href}>{title}</Link>
        </h2>
        - <span>{informative}</span>
      </S.ContentTitle>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Card>
  )
}

export default Card
