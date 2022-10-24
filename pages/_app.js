import { useEffect, useState } from 'react';
import ContextApp from '../components/AppContext';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);
  const [products, setProducts] = useState();

  useEffect(() => {
    setShowing(true);
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(res => setProducts(res))
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ContextApp.Provider value={{products, setProducts}}>
      <Component {...pageProps} />
      </ContextApp.Provider>
    );
  }
}

export default MyApp;
