import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState } from "react";

import Footer from "../components/Footer";
import GlobalStyle from '../styles/global';
import defaultTheme from '../styles/theme';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  
  function handleToggle(): void {
    setIsOpen(!isOpen);
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header
        isOpen={isOpen}
        onToggle={handleToggle}
      />
      <Sidebar
        isOpen={isOpen}
        onToggle={handleToggle}
      />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
