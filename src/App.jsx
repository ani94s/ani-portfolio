import React from "react";
import styles from "./style";

import { Footer, Home, Navbar, Resume, Contact, Projects } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => (
  <div className="bg-primary w-[100%] text-white overflow-hidden">
    <BrowserRouter>
      <Navbar />

      <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
