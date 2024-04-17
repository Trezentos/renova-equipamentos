import { css, styled } from 'styled-components'
import { darken } from 'polished'

interface ButtonProps {
  $typeStyle: 'form' | undefined
  size: 'small' | undefined
}

export const Container = styled.button<ButtonProps>`
  background-color: var(--golden-default); /* Azul Escuro */
  color: #ffffff; /* Branco */
  border-radius: 10px;
  padding: 0.2rem 1rem;
  border: none;
  background-image: radial-gradient(
    at center center,
    'var(--golden-lighter)' 0%,
    'var(--golden-darker)' 100%
  );
  box-shadow: 0px 0px 10px -1px var(--golden-lighter);
  font-size: 1.2rem;
  font-weight: 600;
  transition: 200ms transform;

  &:disabled {
    background-color: #b6bbc4;
    color: white;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  ${(props) =>
    props.$typeStyle === 'form' &&
    css`
      background-image: none;
      background-color: var(--golden-darker);
      box-shadow: none;
      border-radius: 20px;
      font-size: 1rem;
      font-weight: 400;
      transition: background-color 150ms;

      &:hover {
        transform: scale(1);
        background-color: ${darken(0.05, '#8d6c2a')};
      }
    `}
`
