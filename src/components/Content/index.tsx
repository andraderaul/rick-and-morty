import * as S from './styles'

type ContentProps = {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  return <S.Content>{children}</S.Content>
}

export default Content
