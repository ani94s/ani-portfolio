import React from "react";
import styles from "./style";

import { Footer, Navbar } from "./components";
import { Home, Projects, Experiences, AboutMe } from "./pages"
import Skillset from "./components/skillset";


const App = () => (
  <div className="flex flex-col justify-between items-center min-h-screen h-full bg-dimBeige w-full">
        <Navbar />
        <div className={`absolute flex flex-col items-center w-full top-16 bottom-[52px] overflow-y-scroll`}>
          <div className={`${styles.boxWidth} flex flex-col justify-center`} >
            <Home />
            <AboutMe />
            <Projects />
            <Skillset />
            <Experiences />
          </div>
        </div>
        <Footer />
  </div>
);

export default App;
