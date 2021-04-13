import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  padding: 5rem;
  justify-content: space-between;
  height: calc(50vh - 60px);
  transition: flex-direction 0.5s ease-in-out;

  a {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  @media (max-width: 40.625em) {
    flex-direction: column;
    align-items: center;
  }
`
