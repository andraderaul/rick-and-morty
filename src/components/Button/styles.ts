import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`

export const Button = styled.button`
  width: 8rem;
  height: 3rem;
  background-color: transparent;
  color: white;
  border: 0.2rem solid white;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.orange};
    border-color: ${({ theme }) => theme.colors.orange};
  }

  &:focus {
    outline: none;
  }
`
