import React from "react";
import styles from "./style";

import { Footer, Home, Navbar, Contact, Projects, MyDetails } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => (
  <div className="flex flex-col justify-between items-center min-h-screen h-full bg-primary w-[100%] text-white">
    <BrowserRouter>
      <div className={`${styles.boxWidth} flex flex-col h-full`}>
        <Navbar />
        <div className="absolute w-full top-16 bottom-24">
          <Routes>
            <Route path="/ani-portfolio/" element={<Home />} />
            <Route path="/ani-portfolio/me" element={<MyDetails />} />
            <Route path="/ani-portfolio/my-works" element={<Projects />} />
            <Route path="/ani-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
