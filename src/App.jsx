import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residency from "./components/Residencies/Residency";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div style={{minHeight:"100vh"}}>
        <div className="white-gradient" />
        <Header />
        <Hero />
       </div>
       <Companies/>
       <Residency/>
       <Values/>
       <Contact/>
       <GetStarted/>
       <Footer/>
    </div>
  );
}

export default App;
