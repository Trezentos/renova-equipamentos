import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: radial-gradient(
    circle at 50% 130%,
    #827a58 4%,
    rgba(0, 0, 0, 1) 50%
  );

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
    padding: 2rem 1rem;

    h1 {
      font-size: 1.7rem;
      line-height: 1.8rem;

      &:nth-child(2) {
        margin-top: 0rem;
      }
    }
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

export const Footer = styled.footer`
  z-index: 2;
  height: 12rem;
  background-color: #827a58 !important;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    p {
      line-height: 1rem;
      max-width: 700px;
      color: white;
    }

    a {
      background-color: #24cb06;
      text-decoration: none;
      color: white;
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    p {
      text-align: center;
    }

    div {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
  }
`
