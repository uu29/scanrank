import { css, jsx, Global } from "@emotion/react";

const GlobalStyle = (props) => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Noto Sans KR";
          font-style: light;
          font-weight: 300;
          font-display: fallback;
          src: local("Noto Sans KR Light"),
            url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap") format('otf');
        }
        @font-face {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 400;
          font-display: fallback;
          src: local("Noto Sans KR Regular"),
            url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap") format('otf');
        }
        @font-face {
          font-family: "Noto Sans KR";
          font-style: bold;
          font-weight: 600;
          font-display: fallback;
          src: local("Noto Sans KR Medium"),
            url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@600&display=swap") format('otf');
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

        body,
        div,
        span {
          font-size: 1rem;
          font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "맑은 고딕", "Malgun Gothic", sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyle;
