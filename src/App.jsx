import "./App.css";
import Founder from "./components/Founder";
import BrandWork from "./components/BrandWork";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Process from "./components/Process";
// import Cards from "./components/Cards";
import GlowingCard from "./components/GlowingCard";
// import VerticalCards from "./components/VerticalCards";

function App() {
  return (
    <div className="App">
      <Navbar />

      <HeroSection />
      {/* <VerticalCards /> */}
      <Services />
      <BrandWork />
      <Process />
      {/* <Cards /> */}
      <GlowingCard />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;
