import styled from 'styled-components'
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline'

export const WrapperBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3px;
  transition: transform 0.3s ease-in-out;

  cursor: pointer;

  & :hover {
    transform: scale(1.2, 1.2);
  }
`

export const Back = styled(ArrowIosBackOutline)`
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  height: 30px;
  transition: colors 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`
