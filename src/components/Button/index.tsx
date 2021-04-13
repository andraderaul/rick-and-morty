import * as S from './styles'

type ButtonProps = {
  title: string
  onClick: (e: unknown) => void
  type: 'button' | 'submit' | 'reset' | undefined
}

function Button({ title, onClick, type }: ButtonProps) {
  return (
    <S.Wrapper>
      <S.Button onClick={onClick} type={type}>
        {title}
      </S.Button>
    </S.Wrapper>
  )
}

export default Button
