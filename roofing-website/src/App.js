import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

