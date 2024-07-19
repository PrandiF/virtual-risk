import BackButton from "../../commons/BackButton";
import InputDate from "../../commons/InputDate";
import InputText from "../../commons/InputText";
import SearchButton from "../../commons/SearchButton";
import Title from "../../commons/Title";
import Header from "../Header";
import TablaConsulta from "./TablaConsulta";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Consulta() {
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
   
        <div className="relative flex w-full h-screen items-start z-20 pt-[8%]">
          <Header />
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-5 py-8 xl:px-0 px-4 mx-auto items-center">
              <div
                className="w-full"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <BackButton />
              </div>
              <div
                className="flex text-center"
                data-aos="fade"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <Title text="Consulta de pólizas" />
              </div>
              <div className="flex flex-col xl:flex-row gap-5 w-full xl:w-auto">
                <div
                  className="flex  items-center gap-5 w-full "
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-delay="600"
                >
                  <InputText placeholder="Asegurado" width="full" />
                  <InputText placeholder="Compañía" width="full" />
                </div>
                <div
                  className="flex items-center  gap-5 w-full "
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-delay="600"
                >
                  <InputText placeholder="Detalle/Patente" width="full" />
                  <InputText placeholder="Estado" width="full" />
                </div>
                <div
                  className="flex items-center  gap-5 w-full "
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-delay="600"
                >
                  <div className="flex flex-col justify-center mb-2 w-full">
                    <p className="text-sm text-start text-orange1 font-semibold ml-1 mt-[-13px]">
                      Vigencia
                    </p>
                    <div className="flex gap-5 items-center w-full">
                      <InputDate placeholder="Desde" width="full" />
                      <InputDate placeholder="Hasta" width="full" />
                    </div>
                  </div>
                </div>
                <div
                  className="xl:w-fit md:w-fit w-[30%] flex mx-auto items-center"
                  data-aos="fade"
                  data-aos-duration="2000"
                  data-aos-delay="600"
                >
                  <SearchButton />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <TablaConsulta />
            </div>
          </div>
        </div>
      
  );
}

export default Consulta;
