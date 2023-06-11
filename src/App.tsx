import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { initVenomConnect } from './venom-connect/configure';
import VenomConnect from 'venom-connect';
import Main from './main';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchorRegister from './components/SearchorRegister';
import Work from './components/Work';
import Footer from './components/Footer';


function App() {
  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
    console.log(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className=" bg-[#0F1116] font-primary">
      <Navbar venomConnect={venomConnect} />
      <Hero />
      <SearchorRegister />
      <Work />
      <Footer />
      {/* <p>{venomConnect}</p> */}
      {/* <Main venomConnect={venomConnect} /> */}
    </div>
  );
}

export default App;