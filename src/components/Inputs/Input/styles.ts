import styled, { css } from 'styled-components'

interface ContainerProps {
  $isfilled?: boolean
  $isfocused?: boolean
  $isErrored?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: transparent;

  div {
    border: 1px solid white;
    border-radius: 8px;
    overflow: hidden;

    ${(props) =>
      (props?.$isfocused || props?.$isfilled) &&
      css`
        border: 1px solid var(--golden-lighter);
        transition: border 300ms ease;
      `}

    ${(props) =>
      props?.$isErrored &&
      css`
        border: 1px solid var(--error-color);
        transition: border 300ms ease;
      `}


    input {
      padding: 0.6rem 0.5rem;
      width: 100% !important;
      border: none;
      border-color: white;
    }
  }

  label {
    margin-right: auto;
    color: #8b8c89;

    ${(props) =>
      (props?.$isfocused || props?.$isfilled) &&
      css`
        color: white;
        transition: color 300ms ease;
      `}
  }

  // Error message
`

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -1.7rem;
  color: var(--error-color) !important;
  font-size: 0.8rem;
`
