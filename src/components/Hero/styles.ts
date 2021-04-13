import styled from 'styled-components'

export const Hero = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: calc(50vh - 60px);
  text-align: center;
  position: relative;
  padding-top: 10px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};

  > h1 {
    margin: 0px;
    color: rgb(32, 35, 41);
    border: none;
    font-weight: 900;
    z-index: 1;
    font-size: 5.625rem;
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    > svg {
      width: 100%;
      height: 100%;
      fill: rgb(245, 245, 245);
    }
  }
`
