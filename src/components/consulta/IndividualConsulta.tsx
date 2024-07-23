import { useParams } from "react-router-dom";
import BackButton from "../../commons/BackButton";
import Button1 from "../../commons/Button1";
import Button2 from "../../commons/Button2";
import Button3 from "../../commons/Button3";
import Header from "../Header";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  deletePoliza,
  editPoliza,
  getPolizaByPolizaNumber,
} from "../../services/poliza.service";
import InputText from "../../commons/InputText";
import InputDate from "../../commons/InputDate";
import InputSelect from "../../commons/InputSelect";

interface PolizaProps {
  id: number;
  asegurado: string;
  compañia: string;
  numeroPoliza: string;
  vigenciaInicio: Date;
  vigenciaFin: Date;
  moneda: string;
  estado: string;
  productor: string;
  riesgo: string;
  detalle: string;
  premio: string;
  formaDePago: string;
  numero: string;
}

function IndividualConsulta() {
  const { polizaNumber } = useParams();
  const [polizaData, setPolizaData] = useState<PolizaProps>({
    id: 0,
    asegurado: "",
    compañia: "",
    numeroPoliza: "",
    vigenciaInicio: new Date(),
    vigenciaFin: new Date(),
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
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    AOS.init();
    if (polizaNumber) {
      getPolizaByPolizaNumber(polizaNumber)
        .then((res) => {
          setPolizaData({
            ...res,
            id: Number(res.id),
            vigenciaInicio: new Date(res.vigenciaInicio),
            vigenciaFin: new Date(res.vigenciaFin),
          });
        })
        .catch((error) => {
          console.error(error);
          setError(
            "Poliza no encontrada. Verifica el número de póliza e intenta nuevamente."
          );
        });
    }
  }, [polizaNumber]);

  const handleDeletePoliza = async () => {
    try {
      await deletePoliza(polizaData?.id);
    } catch (error) {
      console.error("Error al eliminar la poliza:", error);
      throw error;
    }
  };

  if (!polizaNumber) {
    return <div>No existe la póliza solicitada.</div>;
  }

  const handleEditPoliza = async () => {
    try {
      const res = await editPoliza(polizaData?.id, polizaData);
      if (res) console.log(`Poliza ${polizaData.id} editada`);
      setEditar(false);
      return;
    } catch (error) {
      console.log("Error al editar la poliza:", error);
      setEditar(false);
      throw error;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPolizaData((prevPolizaData) => ({
      ...prevPolizaData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateChange = (name: string) => (date: string) => {
    setPolizaData((prevPolizaData) => ({
      ...prevPolizaData,
      [name]: date,
    }));
  };

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
                    <InputText
                      name="asegurado"
                      value={polizaData.asegurado}
                      onChange={handleChange}
                      readonly={!editar}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Compañía
                    </label>
                    <InputText
                      name="compañia"
                      value={polizaData.compañia}
                      onChange={handleChange}
                      readonly={!editar}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      N de Póliza
                    </label>
                    <InputText
                      name="numeroPoliza"
                      value={polizaData.numeroPoliza}
                      onChange={handleChange}
                      readonly={!editar}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Vigencia Inicio
                    </label>
                    <InputDate
                      onChange={handleDateChange("vigenciaInicio")}
                      readonly={!editar}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Moneda
                    </label>
                    <InputText
                      name="moneda"
                      value={polizaData.moneda}
                      onChange={handleChange}
                      readonly={!editar}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      Estado
                    </label>
                    <input
                      className="bg-[#FFA6A6] text-black rounded-xl py-2 pl-3 border outline-none xl:text-base md:text-base text-sm"
                      name="estado"
                      value={polizaData.estado}
                      onChange={handleChange}
                      readOnly={!editar}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col justify-center gap-6">
                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Productor
                  </label>
                  <InputText
                    name="productor"
                    value={polizaData.productor}
                    onChange={handleChange}
                    readonly={!editar}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Riesgo
                  </label>
                  <InputText
                    name="riesgo"
                    value={polizaData.riesgo}
                    onChange={handleChange}
                    readonly={!editar}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Detalle/Patente
                  </label>
                  <InputText
                    name="detalle"
                    value={polizaData.detalle}
                    onChange={handleChange}
                    readonly={!editar}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Vigencia Fin
                  </label>
                  <InputDate
                    onChange={handleDateChange("vigenciaFin")}
                    readonly={!editar}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Premio
                  </label>
                  <InputText
                    name="premio"
                    value={polizaData.premio}
                    onChange={handleChange}
                    readonly={!editar}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                    Forma de pago
                  </label>
                  <InputSelect
                    options={["CUPONES", "TARJETA", "CBU"]}
                    name="formaDePago"
                    value={polizaData.formaDePago}
                    onChange={handleChange}
                    readonly={!editar}
                  />
                </div>

                {polizaData.formaDePago == "CBU" ? (
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      CBU
                    </label>
                    <InputText
                      value={polizaData.numero}
                      onChange={handleChange}
                      readonly={!editar}
                    />
                  </div>
                ) : polizaData.formaDePago == "Tarjeta" ? (
                  <div className="flex flex-col">
                    <label className="text-sm text-start text-[#7c8087] font-semibold ml-1 mt-[-13px]">
                      N de Tarjeta
                    </label>
                    <InputText
                      name="numero"
                      value={polizaData.numero}
                      onChange={handleChange}
                      readonly={!editar}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}

          {editar ? (
            <div className="flex items-center justify-center">
              <Button1 text="Guardar" onClick={handleEditPoliza} />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-6">
              <Button2 text="Editar" onClick={() => setEditar(true)} />
              <Button1 text="Eliminar" onClick={handleDeletePoliza} />
              <Button3 text="Anular" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndividualConsulta;
