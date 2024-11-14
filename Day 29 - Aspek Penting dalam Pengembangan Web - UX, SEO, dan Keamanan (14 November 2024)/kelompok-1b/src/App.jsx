import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Blog,
  Contact,
  Home,
  NotFound,
  OurServices,
  Portfolio,
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MetaDataProvider } from "./contexts/MetaDataContext";
import { SchemaProvider } from "./contexts/SchemaContext";

const App = () => {
  return (
    <MetaDataProvider>
      <SchemaProvider>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </SchemaProvider>
    </MetaDataProvider>
  );
};

export default App;
