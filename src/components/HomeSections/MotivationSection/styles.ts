import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100%;

  img {
    position: absolute;
    bottom: 0;
    right: 600px;
    height: 360px;
    object-fit: contain;
  }
`

export const Content = styled.div`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: white;
    line-height: 1.2rem;
  }

  h1 {
    color: white;
    text-align: center;
    max-width: 600px;
    font-size: 1.9rem;

    strong {
      font-weight: 600;
    }

    &:nth-child(2) {
      color: var(--golden-lighter);
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;

    h1 {
      font-size: 1.2rem;

      &:nth-child(2) {
        margin-top: 0rem;
      }
    }
  }
`

export const Cards = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 1rem;
`

export const Card = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--golden-darker);
  border-radius: 30px;

  h3,
  p {
    color: white;
  }

  h3 {
    font-size: 1.4rem;
    line-height: 1.9rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  > div {
    display: flex;
  }
`

export const Description = styled.div`
  margin-top: 3rem;
  width: 600px;
  justify-self: flex-start;
  align-self: flex-start;

  h1 {
    font-size: 1.6rem;
  }

  p {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.6rem;

    span {
      color: var(--golden-lighter);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;

    h1,
    p {
      font-size: 1rem;
    }
  }
`
