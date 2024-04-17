import styled from 'styled-components'

export const Container2 = styled.div`
  position: relative;
  width: 100%;

  .arrow {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: black;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .arrow--left {
    left: -10px;
  }

  .arrow--right {
    left: auto;
    right: -10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;

  [class^='number-slide'],
  [class*=' number-slide'] {
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: black;
    font-weight: 500;
    height: 200px;
  }

  div.keen-slider__slide {
    /* max-width: 200px; */
    /* max-width: 300px !important; */
  }
`

export const Card = styled.div`
  width: 100%;

  img {
  }

  @media (max-width: 768px) {
    width: 95%;

    .description-card {
    }
  }
`
