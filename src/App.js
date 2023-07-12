import React from "react";
import { Navbar, Hero, About, Services, Tours, Footer } from "./components";

function App() {
  console.log("Hello");
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
