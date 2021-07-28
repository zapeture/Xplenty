import GlobalStyles from '../styles/globalStyles';
import React from 'react';
import './_app.css';
import Router from 'next/router';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const showLoader = () => {
      setLoading(true);
    };

    const removeLoader = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', showLoader);
    Router.events.on('routeChangeComplete', removeLoader);
    Router.events.on('routeChangeError', removeLoader);

    return () => {
      Router.events.off('routeChangeStart', showLoader);
      Router.events.off('routeChangeComplete', removeLoader);
      Router.events.off('routeChangeError', removeLoader);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
