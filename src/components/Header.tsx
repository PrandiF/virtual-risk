import logo from "../assets/Group 21.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Header() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full py-4 xl:px-0 md:px-1 px-3 z-40 flex items-center xl:justify-around justify-between bg-header-gradient">
      <a
        href="/inicio"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <img
          src={logo}
          className="xl:w-[300px] md:w-[200px] w-[100px] cursor-pointer"
        />
      </a>
      <div className="text-black font-semibold mt-[3%] flex xl:gap-20 md:gap-8 gap-4 xl:text-[18px] md:text-[14px] text-[12px] font-montserrat">
        <a
          href="/inicio"
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          INICIO
        </a>
        <a
          href="/cargar"
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          CARGAR
        </a>
        <a
          href="/consultar"
          className="cursor-pointer hover:underline"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          CONSULTAR
        </a>
      </div>
    </div>
  );
}

export default Header;
