import styled from 'styled-components'

export const Container = styled.div`
  @keyframes pulse {
    0% {
      transform: scale(1); /* Começa com o tamanho original */
    }
    50% {
      transform: scale(1.1); /* Aumenta para 110% do tamanho */
    }
    100% {
      transform: scale(1); /* Retorna ao tamanho original */
    }
  }
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  cursor: pointer;

  img {
    animation: pulse 2s infinite;
  }

  @media (max-width: 768px) {
    bottom: 0rem;
    right: 1rem;

    img {
      width: 50px;
      object-fit: contain;
    }
  }
`
