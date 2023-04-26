import React from "react";
import styles from "./style";

import { Footer, Home, Navbar, Resume, Contact, Projects } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => (
  <div className="flex flex-col justify-between h-screen bg-primary w-[100%] text-white overflow-hidden">
    <BrowserRouter>
      <Navbar />

      <div className={`${styles.paddingX} ${styles.flexCenter} w-full flex-1`}>
        <div className={`${styles.boxWidth} h-full`}>
          <Routes>
            <Route path="/ani-portfolio/" element={<Home />} />
            <Route path="/ani-portfolio/me" element={<Resume />} />
            <Route path="/ani-portfolio/my-works" element={<Projects />} />
            <Route path="/ani-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
