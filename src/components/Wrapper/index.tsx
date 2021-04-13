import * as S from './styles'

type WrapperProps = {
  children: React.ReactNode
}

function Wrapper({ children }: WrapperProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Wrapper
