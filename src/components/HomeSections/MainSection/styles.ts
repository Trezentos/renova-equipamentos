import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: radial-gradient(
    circle at 50% 130%,
    #827a58 4%,
    rgba(0, 0, 0, 1) 50%
  );

  h3 {
    max-width: 550px;
    text-align: center;
    color: white;

    span {
      color: #fae17c;
      font-weight: 600;
    }
  }

  strong {
    text-align: center;
    margin-bottom: 1rem;
    color: white;
  }

  > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 2rem;

    img {
      object-fit: contain;
      width: 200px;
      height: fit-content;
      margin-top: 1rem;
    }

    > div {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-size: 1.1rem;
  }
`
