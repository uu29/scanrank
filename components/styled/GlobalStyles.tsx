import { css, Global } from "@emotion/react";

const GlobalStyle = (props) => {
  return (
    <Global
      styles={css`
        /* montserrat-100 - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 100;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100.woff") format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-100italic - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: italic;
          font-weight: 100;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100italic.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100italic.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100italic.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100italic.woff")
              format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100italic.ttf")
              format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-100italic.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-300 - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 300;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300.woff") format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-300italic - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: italic;
          font-weight: 300;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300italic.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300italic.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300italic.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300italic.woff")
              format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300italic.ttf")
              format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-300italic.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-500 - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500.woff") format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-500italic - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: italic;
          font-weight: 500;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500italic.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500italic.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500italic.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500italic.woff")
              format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500italic.ttf")
              format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-500italic.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-700 - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 700;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700.woff") format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-700italic - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: italic;
          font-weight: 700;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700italic.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700italic.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700italic.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700italic.woff")
              format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700italic.ttf")
              format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-700italic.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-900 - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 900;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900.woff") format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900.ttf") format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }
        /* montserrat-900italic - latin */
        @font-face {
          font-family: "Montserrat";
          font-style: italic;
          font-weight: 900;
          src: url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900italic.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900italic.eot?#iefix") format("embedded-opentype"),
            /* IE6-IE8 */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900italic.woff2") format("woff2"),
            /* Super Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900italic.woff")
              format("woff"),
            /* Modern Browsers */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900italic.ttf")
              format("truetype"),
            /* Safari, Android, iOS */ url("/fonts/montserrat-v15-latin/montserrat-v15-latin-900italic.svg#Montserrat")
              format("svg"); /* Legacy iOS */
        }

        * {
          padding: 0;
          margin: 0;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        *:focus {
          outline: 0;
          outline: none;
        }
        a {
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        button {
          background-color: transparent;
          color: inherit;
          border-width: 0;
          padding: 0;
          cursor: pointer;
          border-radius: 2px;
        }
        a:hover,
        a:active,
        button:hover,
        button:active {
          // 메인 컬러 정하기
          // color: #33c1ff;
        }
        figure {
          margin: 0;
        }
        input::-moz-focus-inner {
          border: 0;
          padding: 0;
          margin: 0;
        }

        ul,
        ol,
        dd,
        li,
        dt {
          font-size: inherit;
          font-weight: inherit;
          font-family: inherit;
          list-style: none;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          font-size: inherit;
          font-weight: inherit;
          font-family: inherit;
        }

        cite {
          font-style: normal;
        }
        fieldset {
          border-width: 0;
          padding: 0;
          margin: 0;
        }

        html,
        body {
          font-size: 1rem;
          font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "맑은 고딕", "Malgun Gothic", sans-serif;
        }

        div,
        span,
        input,
        textarea,
        button {
          font-family: inherit;
        }
      `}
    />
  );
};

export default GlobalStyle;
