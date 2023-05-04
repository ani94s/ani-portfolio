import React from "react";
import styles from "./style";

import { Footer, Navbar } from "./components";
import { Home, Contact, Projects, MyDetails } from "./pages"
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => (
  <div className="flex flex-col justify-between items-center min-h-screen h-full bg-primary w-full text-dimWhite">
    <BrowserRouter>
        <Navbar />
        <div className={`${styles.boxWidth} absolute w-full top-16 bottom-24 overflow-y-scroll`}>
          <Routes>
            <Route path="/ani-portfolio/" element={<Home />} />
            <Route path="/ani-portfolio/me" element={<MyDetails />} />
            <Route path="/ani-portfolio/my-works" element={<Projects />} />
            <Route path="/ani-portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  </div>
);

export default App;
