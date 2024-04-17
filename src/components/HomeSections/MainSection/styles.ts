import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  h3,
  strong {
    color: white;
  }

  h3 {
    max-width: 550px;
    text-align: center;

    span {
      color: #fae17c;
      font-weight: 600;
    }
  }

  strong {
    text-align: center;
    margin-bottom: 1rem;
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
