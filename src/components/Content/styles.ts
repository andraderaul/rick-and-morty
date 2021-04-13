import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  max-width: 1920px;
  min-height: 140px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }
`
