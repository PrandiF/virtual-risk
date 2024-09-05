import imgLandingVR from "../../../assets/imgLandingVR.jpeg";
import Button4 from "../../../commons/Button4";
import TypeWriter from "./TypeWriter";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function LandingHome() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative w-full xl:h-[700px] flex">
      <img src={imgLandingVR} className="w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-300 to-white opacity-50"></div>
      <div className="flex flex-col absolute xl:items-start justify-center xl:gap-5 gap-2 h-full  ml-[30px] xl:ml-[150px]">
        <div
          className="flex flex-col xl:text-6xl text-3xl font-bold"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <p className="xl:flex hidden">Sentirse seguro es saber</p>
          <p className="xl:flex hidden">que estas bien asesorado.</p>

          <p className="xl:hidden flex">Sentirse seguro</p>
          <p className="xl:hidden flex">es saber que</p>
          <p className="xl:hidden flex">estas bien asesorado.</p>
        </div>

        <div className="flex flex-col justify-center xl:text-base text-sm">
          {/* <p>Virtual Risk S.A. de José María Izquierdo.</p>
          <p>Más de 40 años como profesionales en seguros.</p> */}{" "}
          <TypeWriter />
        </div>
        <Link
          to="CONTACT"
          smooth={true}
          duration={500}
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          <Button4 text="Contactanos" />
        </Link>
      </div>
    </div>
  );
}

export default LandingHome;
