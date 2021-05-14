import { useCallback } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'

function Back() {
  const router = useRouter()

  const goBack = useCallback(() => {
    router?.back()
  }, [router])

  return (
    <S.WrapperBack onClick={goBack} data-testid="back">
      <S.Back />
    </S.WrapperBack>
  )
}

export default Back
