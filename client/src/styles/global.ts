'use client';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Medium'),
        url('/fonts/poppins-v15-latin-500.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins Bold'), local('Poppins-Bold'),
        url('/fonts/poppins-v15-latin-700.woff2') format('woff2');
  }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ${({ theme }) => css`
      body {
        font-family: ${theme.font.family};
        background-color: gray;
      }
      h1 {
        font-size: 42px;
      }

      h3 {
        font-size: 14px;
        font-weight: 500;
      }
    `}
`;

export default GlobalStyles;
