import GlobalStyle from "@/theme/GlobalStyle";
import type { AppProps } from "next/app";
import theme from "@/theme/theme";
import { ThemeProvider } from "styled-components";
import Layout from "@/components/templates/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
