import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import { ThemeProvider } from '../context/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import '../style/dark.scss'


export default () => {
  const { title, lang, description } = headData;

  const [theme, setTheme] = useState(() => window ? window.__theme : 'light');
  const value = { theme, setTheme };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <ThemeProvider value={value}>
        <App />
      </ThemeProvider>
    </>
  );
};
