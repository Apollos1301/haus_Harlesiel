import { useState, useRef } from "react";
import Navbar from "./components/pages/Navbar";
import StartPage from "./components/pages/StartPage";
import EinleitungPage from "./components/pages/EinleitungPage";
import Information1Page from "./components/pages/Information1Page";
import GaleriePage from "./components/pages/GaleriePage";
import Information2Page from "./components/pages/Information2Page";
import PreisPage from "./components/pages/PreisPage";
import KontaktPage from "./components/pages/KontaktPage";
import Footer from "./components/pages/Footer";
import Datenschutz from "./components/single_comps/footer/Datenschutz";
import Impressum from "./components/single_comps/footer/Impressum";
function App() {
  const startRef = useRef(null);
  const galerieRef = useRef(null);
  const infoRef = useRef(null);
  const preisRef = useRef(null);
  const kontaktRef = useRef(null);
  const [datenschutz, setDatenschutz] = useState(false);
  const [impressum, setImpressum] = useState(false);
  const controlDatenschutz = (currState) => {
    setDatenschutz(currState);
  };
  const controlImpressum = (currState) => {
    setImpressum(currState);
  };
  const navBarButtons = (sectionID) => {
    switch (sectionID) {
      case 1:
        window.scrollTo({
          top: startRef.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scrollTo({
          top: galerieRef.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case 3:
        window.scrollTo({
          top: infoRef.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case 4:
        window.scrollTo({
          top: preisRef.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case 5:
        window.scrollTo({
          top: kontaktRef.current.offsetTop,
          behavior: "smooth",
        });
        break;
      default:
        break;
    }
  };
  if (datenschutz) {
    return (
      <div className="App">
        <Datenschutz setState={controlDatenschutz} />
      </div>
    );
  } else if (impressum) {
    return (
      <div className="App">
        <Impressum setState={controlImpressum} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar navClick={navBarButtons} />
        <StartPage myRef={startRef} buttonClick={navBarButtons} />
        <EinleitungPage />
        <Information1Page />
        <GaleriePage myRef={galerieRef} />
        <Information2Page myRef={infoRef} />
        <PreisPage myRef={preisRef} />
        <KontaktPage myRef={kontaktRef} />
        <Footer
          setDatenschutz={controlDatenschutz}
          setImpressum={controlImpressum}
        />
      </div>
    );
  }
}

export default App;
