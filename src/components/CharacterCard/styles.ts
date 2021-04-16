import styled from 'styled-components'

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.card};
  width: 600px;
  height: 220px;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;

  &:hover {
    transition: background 0.4s ease-in-out;
    background: ${({ theme }) => theme.colors.cardHover};
  }

  @media (max-width: 40.625em) {
    flex-direction: column;
    height: initial;
    width: 100%;
  }
`

export const Figure = styled.figure`
  flex: 2 1 0%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;

    @media (max-width: 40.625em) {
      height: 300px;
    }
  }
`
export const ContentCard = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;

  @media (max-width: 40.625em) {
    pointer-events: none;
  }
`

export const Info = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;

  > span {
    color: ${({ theme }) => theme.colors.gray};
    margin: 0.5rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`

type InfoTitle = {
  status?: string
}

export const InfoTitle = styled(Info)<InfoTitle>`
  > span {
    display: flex;
    color: ${({ theme }) => theme.colors.white};
    align-items: center;
    text-transform: capitalize;

    > span {
      height: 0.5rem;
      width: 0.5rem;
      margin-right: 0.375rem;
      background: ${({ theme, status }) =>
        status === 'Alive' ? theme.colors.green : theme.colors.red};
      border-radius: 50%;
    }
  }
`
