import styled from 'styled-components'

export const Container = styled.footer`
  height: 20rem;
  width: 100%;
  background-color: black;
  padding: 2rem 4rem;

  p {
    color: gray;
    font-size: 0.6rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 4rem;

    height: fit-content;
  }
`
