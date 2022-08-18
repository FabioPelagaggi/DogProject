import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import defaultTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
