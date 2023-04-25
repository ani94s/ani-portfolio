import React from "react";
import styles from "./style";

import { Footer, Home, Navbar, Resume, Contact, Projects } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => (
  <div className="flex flex-col justify-between min-h-screen bg-primary w-[100%] text-white overflow-hidden">
    <BrowserRouter>
      <Navbar />

      <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/ani-portfolio/" element={<Home />} />
            <Route path="/ani-portfolio/resume" element={<Resume />} />
            <Route path="/ani-portfolio/projects" element={<Projects />} />
            <Route path="/ani-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
