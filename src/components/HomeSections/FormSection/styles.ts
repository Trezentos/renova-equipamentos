import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 650px;
    margin: 0 auto;
    gap: 1rem;

    > h1,
    > p {
      color: white;
      text-align: center;
    }

    > p {
      line-height: 1rem;
      font-size: 0.9rem;

      strong {
        color: var(--golden-lighter);
      }
    }
  }

  h1 {
    /* font-weight: 700; */
    font-size: 2.3rem;
  }

  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  form button {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;

    > div {
      padding: 2rem 2rem;
    }

    form {
      width: 100%;
    }
  }

  footer {
    height: 7rem;
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
  }
`
