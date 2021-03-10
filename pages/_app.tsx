import { AppProps } from "next/app";
import wrapper from "../store";
import GlobalStyles from "../components/styled/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
