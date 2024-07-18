import Title from "../../commons/Title";
import Button1 from "../../commons/Button1";
import InputText from "../../commons/InputText";
import InputPsw from "../../commons/InputPsw";
import HeaderLogin from "../HeaderLogin";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Login() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex w-full h-screen items-center justify-center z-20">
      <HeaderLogin />
      <div
        className="flex relative flex-col bg-[#EAA788] bg-opacity-25 backdrop-blur-sm z-20 xl:w-[30%] md:w-[60%] w-[90%] px-5 items-center gap-10 py-16 m-auto rounded-lg"
        data-aos="fade"
        data-aos-duration="2200"
        data-aos-delay="200"
      >
        <div data-aos="fade" data-aos-duration="2000" data-aos-delay="400">
          <Title text="Bienvenido/a" />
        </div>

        <form className="xl:w-[60%] flex flex-col gap-6">
          <div data-aos="fade" data-aos-duration="2000" data-aos-delay="600">
            <InputText placeholder="Usuario" width="full" />
          </div>
          <div data-aos="fade" data-aos-duration="2000" data-aos-delay="600">
            <InputPsw />
          </div>
        </form>
        <a
          href="/inicio"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="700"
        >
          <Button1 text="Iniciar Sesión" />
        </a>
      </div>
    </div>
  );
}

export default Login;
