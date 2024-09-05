import Footer from "../Footer";
import HeaderLanding from "../HeaderLanding";
import Contacto from "./Contact/Contacto";
import LandingHome from "./Home/LandingHome";
import Nosotros from "./Nosotros/Nosotros";

function Landing() {
  return (
    <div className="relative z-20 flex flex-col bg-white">
      <HeaderLanding />
      <div id="HOME">
        <LandingHome />
      </div>
      <div id="NOSOTROS">
        <Nosotros />
      </div>
      <div className="CONTACT">
        <Contacto />
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
