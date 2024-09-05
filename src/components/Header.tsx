import logo from "../assets/logoVR.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LogoutButton from "../commons/LogoutButton";
function Header() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full py-4 xl:px-8 md:px-8 px-3 z-40 flex items-center justify-between xl:gap-0 md:gap-2 gap-3 bg-header-gradient">
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
        <button
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="300"
          onClick={() => navigate("/virtualNet/inicio")}
        >
          Inicio
        </button>
        <button
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="400"
          onClick={() => navigate("/virtualNet/cargar")}
        >
          Cargar
        </button>
        <button
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="500"
          onClick={() => navigate("/virtualNet/consultar")}
        >
          Consultar
        </button>
        <div data-aos="fade" data-aos-duration="2000" data-aos-delay="600">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
