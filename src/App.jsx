import Topbar from "./componenrs/topbar/Topbar";
import Intro from "./componenrs/intro/Intro";
import Testimonials from "./componenrs/testimonials/Testimonials";
import Contact from "./componenrs/contact/Contact";
import Works from "./componenrs/works/Works";
import Portfolio from "./componenrs/portfolio/Portfolio";
import "./app.scss"
import { useState } from "react";
import Menu from "./componenrs/menu/Menu";
// import DemoComponent from "./componenrs/DemoComponent";

function App() {
  const[menuOpen, setMenuOpen,] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section"  >
        <Intro />
        <Works />
        <Testimonials />
        <Contact />
        <Portfolio />
        {/* <DemoComponent/> */}
      </div>
    </div>
  );
}

export default App;



