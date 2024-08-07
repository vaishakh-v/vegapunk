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
import Doctor from "./components/Doctor";
import Patient from "./components/Patient"
import Questions from "./components/Questions";
import Admin from "./components/Admin/Admin"

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <Route path="/doctor" element={<Doctor />}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/questions" element={<Questions/>}></Route>
        <Route path="/Admin" element={<Admin/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
