import logo from "../assets/Group 21.png";
import { Navigate, useNavigate } from "react-router-dom";
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
    <div className="absolute top-0 left-0 w-full py-4 xl:px-0 md:px-1 px-3 z-40 flex items-center xl:justify-around justify-between bg-header-gradient">
      <button data-aos="fade" data-aos-duration="2000" data-aos-delay="200" onClick={() => navigate('/inicio')}>
        <img
          src={logo}
          className="xl:w-[300px] md:w-[200px] w-[100px] cursor-pointer"
        />
      </button>
      <div className="text-black font-semibold mt-[3%] flex xl:gap-20 md:gap-8 gap-4 xl:text-[18px] md:text-[14px] text-[12px] font-montserrat">
        <button
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="300"
          onClick={() => navigate('/inicio')}
        >
          INICIO
        </button>
        <button
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="400"
          onClick={() => navigate('/cargar')}
        >
          CARGAR
        </button>
        <button
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="500"
          onClick={() => navigate('/consultar')}
        >
          CONSULTAR
        </button>
      </div>
      <div
        className="absolute w-full flex justify-end mr-12"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="600"
      >
        <LogoutButton />
      </div>
    </div>
  );
}

export default Header;
