import logo from "../assets/logoVR.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

function HeaderLanding() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" w-full py-4 xl:px-8 md:px-8 px-3 z-40 flex justify-between xl:gap-0 md:gap-2 gap-3 bg-white">
      <button
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="200"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          className="xl:w-[200px] md:w-[140px] w-[85px] cursor-pointer"
        />
      </button>
      <div className="text-black font-semibold flex xl:gap-20 md:gap-12 gap-3 xl:text-[18px] md:text-[18px] text-[12px] font-montserrat items-end">
        <Link
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="300"
          to="HOME"
          smooth={true}
          duration={500}
        >
          Inicio
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="400"
          to="NOSOTROS"
          smooth={true}
          duration={500}
        >
          Nosotros
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="500"
          to="CONTACT"
          smooth={true}
          duration={500}
        >
          Contacto
        </Link>
        <button
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="500"
          onClick={() => navigate("/virtualNet/login")}
        >
          VirtialNet
        </button>
      </div>
    </div>
  );
}

export default HeaderLanding;
