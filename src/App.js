import React from "react";
import { FaqsContainer } from "./containers/faqs";
import { FooterContainer } from "./containers/footer";
// import Jumbotron from "./components/jumbotron";
import { JumbotronContainer } from "./containers/jumbotron";
// import jumboData from "./fixtures/jumbo.json";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
