import { useParams } from "react-router-dom";
import BackButton from "../../commons/BackButton";
import Button1 from "../../commons/Button1";
import Button2 from "../../commons/Button2";
import Button3 from "../../commons/Button3";
import Header from "../Header";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { getPolizaByPolizaNumber } from "../../services/poliza.service";

function IndividualConsulta() {
  const { polizaNumber } = useParams();
  const [polizaData, setPolizaData] = useState({
    asegurado: "",
    compañia: "",
    numeroPoliza: "",
    vigenciaInicio: "",
    vigenciaFin: "",
    moneda: "",
    estado: "",
    productor: "",
    riesgo: "",
    detalle: "",
    premio: "",
    formaDePago: "",
    numero: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init();
    if (polizaNumber) {
      getPolizaByPolizaNumber(polizaNumber)
        .then((res) => {
          setPolizaData(res);
        })
        .catch((error) => {
          console.error(error);
          setError(
            "Poliza no encontrada. Verifica el número de póliza e intenta nuevamente."
          );
        });
    }
  }, [polizaNumber]);

  if (!polizaNumber) {
    return <div>No existe la póliza solicitada.</div>;
  }

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
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <div className="flex w-[50%] items-start justify-center xl:gap-10 md:gap-6 gap-4 mx-auto">
              <div className="flex w-full  justify-center flex-col gap-8">
                <div className="flex w-full flex-col gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Asegurado
                    </label>
                    <input
                      className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                      defaultValue={polizaData.asegurado}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Compañía
                    </label>
                    <input
                      className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                      defaultValue={polizaData.compañia}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      N de Póliza
                    </label>
                    <input
                      className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                      defaultValue={polizaData.numeroPoliza}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Vigencia Inicio
                    </label>
                    <input
                      className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                      defaultValue={polizaData.vigenciaInicio}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Moneda
                    </label>
                    <input
                      className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                      defaultValue={polizaData.moneda}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Estado
                    </label>
                    <input
                      className="bg-[#FFA6A6] text-black rounded-xl py-2 pl-3 border outline-none xl:text-base md:text-base text-sm"
                      defaultValue={polizaData.estado}
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
                    defaultValue={polizaData.productor}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Riesgo
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    defaultValue={polizaData.riesgo}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Detalle/Patente
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    defaultValue={polizaData.detalle}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Vigencia Fin
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    defaultValue={polizaData.vigenciaFin}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Premio
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    defaultValue={polizaData.premio}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Forma de pago
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                    defaultValue={polizaData.formaDePago}
                  />
                </div>

                {polizaData.formaDePago == "CBU" ? (
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      CBU
                    </label>
                    <input
                      className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                      defaultValue={polizaData.numero}
                    />
                  </div>
                ) : polizaData.formaDePago == "Tarjeta" ? (
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      N de Tarjeta
                    </label>
                    <input
                      className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none xl:text-base md:text-base text-sm"
                      defaultValue={polizaData.numero}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
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
