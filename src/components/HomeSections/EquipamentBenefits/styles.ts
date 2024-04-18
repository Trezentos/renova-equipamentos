import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 1.8rem;
    max-width: 600px;
    margin: 0 auto;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2rem;
    color: #6b6b6b;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 2rem;

    h1 {
      font-size: 1.7rem;
      line-height: 1.8rem;
    }
  }
`

export const VantagesImages = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 2rem;
  width: 500px;

  @media (max-width: 768px) {
    /* display: none; */
    width: 100%;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    img {
      width: 150px;
      object-fit: contain;
    }
  }
`
