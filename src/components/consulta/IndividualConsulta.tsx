import BackButton from "../../commons/BackButton";
import Button1 from "../../commons/Button1";
import Button2 from "../../commons/Button2";
import Button3 from "../../commons/Button3";
import Header from "../Header";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function IndividualConsulta() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative flex w-full h-screen items-center z-20 ">
      <Header />
      <div className="flex w-full items-start flex-col gap-8 xl:pt-0 pt-[30%] xl:pb-0 pb-[10%]">
        <div
          className="flex flex-col relative bg-[#EAA788] bg-opacity-25 backdrop-blur-sm z-20 xl:w-[60%] md:w-[75%] w-[95%] px-6 py-8 m-auto rounded-lg gap-10"
          data-aos="fade"
          data-aos-duration="2600"
          data-aos-delay="400"
        >
          <BackButton />
          <div className="flex w-[50%] items-start justify-center xl:gap-10 md:gap-6 gap-4 mx-auto">
            <div className="flex w-full  justify-center flex-col gap-8">
              <div className="flex w-full flex-col gap-6">
                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Asegurado
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    value="Juan Pérez"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Compañía
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    value="Allianz"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    N de Póliza
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    value="3-55963698"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Vigencia Inicio
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    value="11-05-2023"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Moneda
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    value="Pesos"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Estado
                  </label>
                  <input
                    className="bg-[#FFA6A6] text-black rounded-xl py-2 pl-3 border outline-none xl:text-base md:text-base text-sm"
                    value="Vencido"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center gap-6">
              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Productor
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                  value="Virtual Risk"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Riesgo
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                  value="Automotor"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Detalle/Patente
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                  value="AA123BB"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Vigencia Fin
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                  value="11-05-2024"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Premio
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                  value="15500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Forma de pago
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                  value="Cupones"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Button2 text="Editar" />
            <Button1 text="Eliminar" />
            <Button3 text="Anular" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualConsulta;
