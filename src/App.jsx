import "./App.css";
import Founder from "./components/Founder";
import BrandWork from "./components/BrandWork";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Services />
      <BrandWork />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;
