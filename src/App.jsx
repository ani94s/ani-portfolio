import React from "react";
import styles from "./style";

import { Footer, Navbar } from "./components";
import { Home, Projects, MyDetails } from "./pages"
import Skillset from "./components/skillset";


const App = () => (
  <div className="flex flex-col justify-between items-center min-h-screen h-full bg-dimBeige w-full">
        <Navbar />
        <div className={`absolute flex flex-col items-center w-full top-16 bottom-24 overflow-y-scroll`}>
          <div className={`${styles.boxWidth} flex flex-col justify-center`} >
            <Home />
            <section id="skills" className="sm:px-8 pb-8 px-4 w-full">
              <Skillset />
          </section>
            <MyDetails />
            <Projects />
            </div>
        </div>
        <Footer />
  </div>
);

export default App;
