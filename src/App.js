import { React, useState, useEffect } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import mobileProductImg from './images/image-product-mobile.jpg';
import desktopProductImg from './images/image-product-desktop.jpg';
import cartIcon from './images/icon-cart.svg';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  //Is used to update the screen width, when changed
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/*displays site properly based on user's device*/}
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <title>Frontend Mentor | Product preview card component</title>
      </Helmet>
      <main>
        <div className="productCard">
          <img src={width < 768 ? mobileProductImg : desktopProductImg} alt="Gabrielle Chanel" />
          <div className="productCardContainer">
            <h6>PERFUME</h6>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p className="productCardContainerDesc">A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="productCardPrices">
              <span className="currentPrice">$149.99</span>
              <span className="oldPrice">$169.99</span>
            </div>
            <button><img src={cartIcon} alt="Cart icon" />Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
