import nosotrosSection from "../../../assets/nosotrosSection.jpeg";
import NosotrosAvatar from "./NosotrosAvatar";
import avatar1 from "../../../assets/avatar1.png";
import avatar2 from "../../../assets/avatar2.png";
import avatar3 from "../../../assets/avatar3.png";
import ResponsiveAvatar from "./ResponsiveAvatar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Nosotros() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="bg-[#DC580C] flex flex-col gap-3 items-center justify-start xl:py-8 py-3 h-fit">
        <h2
          className="xl:text-4xl text-3xl font-bold"
          data-aos="fade"
          data-aos-duration="3000"
        >
          Nosotros
        </h2>
        <p
          className="xl:w-[70%] xl:px-0 px-2 text-center xl:text-base text-sm"
          data-aos="fade"
          data-aos-duration="3000"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque animi
          ipsa reprehenderit voluptate reiciendis sint libero, autem molestias
          eligendi pariatur excepturi praesentium odit amet esse eveniet eos?
          Labore, rerum ut! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Cumque animi ipsa reprehenderit voluptate reiciendis sint
          libero, autem molestias eligendi pariatur excepturi praesentium odit
          amet esse eveniet eos? Labore, rerum ut! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Cumque animi ipsa reprehenderit
          voluptate reiciendis sint libero, autem molestias eligendi pariatur
          excepturi praesentium odit amet esse eveniet eos? Labore, rerum ut!
        </p>
      </div>
      <div className="relative w-full xl:h-[450px] h-[300px] flex">
        <img src={nosotrosSection} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
        <div className="flex flex-col absolute items-center justify-start xl:pt-8 py-3 xl:gap-10 gap-1 h-full w-full">
          <h2
            className="xl:text-4xl text-3xl font-bold"
            data-aos="fade"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            Nuestro Equipo
          </h2>
          <div
            className="w-[60%] xl:flex justify-between items-center hidden"
            data-aos="fade"
            data-aos-duration="3000"
            data-aos-delay="400"
          >
            <NosotrosAvatar
              name="Norma Gonzalez"
              position="Socia Fundadora"
              img={avatar1}
            />
            <NosotrosAvatar
              name="José María Izquierdo"
              position="Socio Fundadora"
              img={avatar2}
            />
            <NosotrosAvatar
              name="Cecilia Izquierdo"
              position="Gerente"
              img={avatar3}
            />
          </div>

          <div className="w-[80%] flex items-center justify-center xl:hidden">
            <ResponsiveAvatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
