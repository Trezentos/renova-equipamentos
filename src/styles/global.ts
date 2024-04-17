import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    body{
        .ident-content {
            max-width: 1100px;
            margin: 0 auto;
        }
    }

    :root {
        --golden-darker: #8d6c2a;
        --golden-default: #c29935;
        --golden-lighter: #fae17c;
        --error-color: #ff6347;
        }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        &::-moz-selection {
        }

        &::selection {
        }
    }

    h1, h2, h3, p, label, span, button, a {
        font-family: 'Poppins';
        font-weight: 400;
        line-height: 2.2rem;
    }


    strong {
        font-family: 'Poppins';
    }

    button, a {
      cursor: pointer;
    }

    a {
        font-style: none;
    }


    h3 {
        font-size: 2rem;
    }

    

    @media (max-width: 768px) {
        h3 {
            font-size: 1.4rem;

        }
    }   
`
