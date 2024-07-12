import BackButton from "../../commons/BackButton";
import Button1 from "../../commons/Button1";
import Button2 from "../../commons/Button2";

function IndividualConsulta() {
  return (
    <div className="flex w-full h-screen items-center z-20 ">
      <div className="flex w-full items-start flex-col gap-8">
        <div className="flex flex-col relative bg-[#EAA788] bg-opacity-25 backdrop-blur-sm z-20 w-[60%] px-6 py-8 m-auto rounded-lg gap-10">
          <BackButton />
          <div className="flex w-[50%] items-start justify-center gap-10 mx-auto">
            <div className="flex w-full items-center justify-center flex-col gap-8">
              <div className="flex w-full flex-col justify-center gap-6">
                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Asegurado
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                    value="Juan Pérez"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Compañía
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                    value="Allianz"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    N de Póliza
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                    value="3-55963698"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Vigencia Inicio
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                    value="11-05-2023"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Moneda
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                    value="Pesos"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Forma de pago
                  </label>
                  <input
                    className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                    value="Cupones"
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
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                  value="Virtual Risk"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Riesgo
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                  value="Automotor"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Detalle/Patente
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                  value="AA123BB"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Vigencia Fin
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                  value="11-05-2024"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                  Premio
                </label>
                <input
                  className="bg-white text-black rounded-xl py-2 pl-3 border border-orange1 outline-none"
                  value="15500"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Button2 text="Editar" />
            <Button1 text="Eliminar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualConsulta;
