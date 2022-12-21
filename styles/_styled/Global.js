import { createGlobalStyle } from 'styled-components';
import Typography from './globals/Typography';

const GlobalStyles = createGlobalStyle`
  ${Typography}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    html {
      height: 100%;
    }

    html {
      font-size: 16px;
    }

    body {
      -webkit-backface-visibility: hidden;
      position: relative;
      min-width: 360px;
      min-height: 100vh;
      @include font-weight(light);
      color: #0b0d17;
      background-color: ${({ theme }) => theme.colors.body};
      font-family: 'Poppins' sans-serif;
      font-size: 100%;
      line-height: 1.15;
      text-rendering: optimizeSpeed;
    }

    /* Figure element reset */
    figure {
      display: block;
      margin: 0;
    }

    /* Images */
    img,
    svg,
    picture {
      display: block;
      max-width: 100%;
    }

    img[width] {
      width: auto; // Defer to max-width
    }

    img[width][height] {
      height: auto; // Preserve aspect ratio
    }

    // Let SVG scale without boundaries
    svg,
    img[src$=".svg"] {
      width: 100%;
      max-width: none;
      height: auto;
    }

    iframe {
      border: 0;
    }
  }
`

export default GlobalStyles;