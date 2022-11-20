import React from "react";
import AOS from 'aos';


import { Header } from "./Components/Header";
import { Main } from './Components/Main';
import { Footer } from "./Components/Footer";

import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
