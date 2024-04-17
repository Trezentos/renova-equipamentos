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
  margin-top: 3rem;
  margin-bottom: 3rem;
  /* gap: 1rem; */

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
  /* width: 350px; */
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #dfdfdf;
  border-radius: 30px;

  h3,
  p {
    color: black;
  }

  h3 {
    font-size: 1.4rem;
    line-height: 1.9rem;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  > div {
    display: flex;
  }

  @media (max-width: 768px) {
    width: 95%;

    padding: 1rem;

    .description-card {
    }
  }
`
