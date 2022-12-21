import { css } from 'styled-components';
import { Poppins } from '@next/font/google';
import { fontClamp } from './Mixins';

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600', '700'],
  display: 'swap',
  fallback: ['sans-serif'],
});

const poppins = poppinsFont.style.fontFamily;

const Typography = css`
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${poppins};
    margin: 0 0 10px;
  }

  .h1 {
    ${fontClamp(40, 7.2, 60)}
  }

  .h2 {
    ${fontClamp(28, 5.6, 50)}
  }

  .h3 {
    ${fontClamp(22, 4.4, 33)}
  }

  .h4 {
    ${fontClamp(20, 4, 25)}
  }

  .h5 {
    ${fontClamp(18, 3.6, 22)}
  }

  .h6 {
    ${fontClamp(10, 2.6, 13)}
  }

  p {
    font-family: ${poppins};
  }

  ul,
  ol {
    list-style: none;
  }
`

export default Typography;