import "./App.css";
import ScrollVideo from "./components/Scrollvideo";
import AppleCarousel from "./components/Carousel";
import Visual from "./components/Visual";
import Mask from "./components/mask";
import Info from "./components/Info";
import Footer from "./components/Footer";
import SafetyFeatures from "./components/Inner";
import IpadComparison from "./components/Info02";

function App() {
  return (
    <>
      <ScrollVideo className="m-0" />

      <AppleCarousel />
      <Visual />
      <Info />
      <Mask />
      <SafetyFeatures />
      <IpadComparison />
      <Footer />
    </>
  );
}

export default App;
