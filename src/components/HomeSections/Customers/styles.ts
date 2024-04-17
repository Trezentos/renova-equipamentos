import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    background-color: white;
    padding: 2rem;
    height: 100%;
  }

  h1 {
    text-align: center;
  }

  footer {
    height: 20rem;
    background-color: #827a58;

    > div {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    h3,
    strong {
      color: white;
      text-align: center;
    }

    p {
      margin-top: 1rem;
      font-size: 1.8rem;
      text-align: center;

      strong {
        color: var(--golden-lighter);
      }
    }

    @media (max-width: 768px) {
      padding: 2rem 1rem;

      h3 {
        /* font-size: 2rem; */
      }

      p {
        font-size: 1.4rem;
      }
    }
  }
`
