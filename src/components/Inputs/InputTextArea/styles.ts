import styled, { css } from 'styled-components'

interface ContainerProps {
  $isfilled: boolean
  $isfocused: boolean
  $isErrored: boolean
}

export const Container = styled.label<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  div {
    border: 1px solid #b6bbc4;
    height: 150px;

    ${(props) =>
      (props?.$isfocused || props?.$isfilled) &&
      css`
        border: 1px solid var(--primary-color);
        transition: border 300ms ease;
      `}

    ${(props) =>
      props?.$isErrored &&
      css`
        border: 1px solid var(--error-color);
        transition: border 300ms ease;
      `}


    textarea {
      padding: 1rem;
      width: 100% !important;
      height: 100%;
      border: none;
      resize: none;
    }
  }

  label {
    margin-bottom: 0.4rem;
    margin-right: auto;
    color: #8b8c89;

    ${(props) =>
      (props?.$isfocused || props?.$isfilled) &&
      css`
        color: var(--primary-color);
        transition: color 300ms ease;
      `}
  }

  p {
    position: absolute;
    bottom: -1.1rem;
    color: var(--error-color);
    font-size: 0.9rem;
  }
`
