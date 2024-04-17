import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 4rem;

  > div {
    > div {
      > div {
        background-color: #e9e9e9;
        border-radius: 15px;
        /* height: 180px; */
        padding: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
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
    h1 {
      font-size: 1.4rem;
      line-height: 1.4rem;
      margin-bottom: 1rem;
    }
  }
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div:nth-child(1),
  > div:nth-child(2) {
    width: 49%;
  }

  > div:last-child {
    margin-top: 1.4rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;

    > div {
      width: 100% !important;
    }

    > div:last-child {
      margin-top: 0;
    }
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    padding: 0.5rem 0.5rem;
  }

  h3 {
    font-size: 1.4rem;
    line-height: 1.9rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 600;
    }

    p {
      font-size: 0.8rem;
      margin-top: 0.5rem;
    }

    > div {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`

export const VantagesImages = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 2rem;
  width: 500px;

  @media (max-width: 768px) {
    display: none;
  }
`
