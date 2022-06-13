import '../styles/globals.css';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Footer from './Components/PageLayout/Footer';
import Header from './Components/PageLayout/Header';

function MyApp({ Component, pageProps }) {
  const cookie = Cookies.get('products')
    ? JSON.parse(Cookies.get('products'))
    : 0;
  const selectedQuantity = cookie;
  function count() {
    let currentCookie = Cookies.get('products')
      ? JSON.parse(Cookies.get('products'))
      : 0;
    let basket = 0;
    // setSelectedQuantity(currentCookie);
    if (currentCookie !== 0) {
      for (let i = 0; i < currentCookie.length; i++) {
        basket += currentCookie[i].quantity;
      }
    }

    currentCookie = currentCookie ? basket : 0;
    return parseInt(currentCookie);
  }
  const [clickAmount, setClickAmount] = useState();
  // console.log(selectedQuantity);
  useEffect(() => {
    setClickAmount(count());
  }, []);

  const increment = function (c) {
    setClickAmount(clickAmount + parseInt(c));
  };
  const deincrement = function (c) {
    setClickAmount(clickAmount - parseInt(c));
  };
  return (
    <>
      <Header {...pageProps} clickAmount={clickAmount} />

      <Component
        {...pageProps}
        clickAmount={clickAmount}
        increment={increment}
        deincrement={deincrement}
        selectedQuantity={selectedQuantity}
      />

      <Footer />
    </>
  );
}

export default MyApp;
