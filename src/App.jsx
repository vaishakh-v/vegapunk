import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MoreAbout from "./components/MoreInfo/MoreAbout";
import MoreFeatures from "./components/MoreInfo/MoreFeatures";
import HowitWorks from "./components/HowitWorks";
import SelectionPage from "./components/SelectionPage";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<MoreAbout />} />
        <Route path="/features" element={<MoreFeatures />} />
        <Route path="/howitworks" element={<HowitWorks />} />
        <Route path="/selection" element={<SelectionPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
