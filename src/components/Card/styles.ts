import styled from 'styled-components'

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.card};
  width: 400px;
  height: 120px;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;

  &:hover {
    transition: background 0.4s ease-in-out;
    background: ${({ theme }) => theme.colors.cardHover};
  }
`

export const ContentTitle = styled.div`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem;
  align-items: center;

  > h2 {
    margin-right: 0.5rem;
  }

  > span {
    margin-left: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`

export const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  padding: 0.75rem;
`
