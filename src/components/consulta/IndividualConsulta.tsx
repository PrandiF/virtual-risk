import { useNavigate, useParams } from "react-router-dom";
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
import { Confirm } from "notiflix/build/notiflix-confirm-aio";

interface PolizaProps {
  asegurado: string;
  compañia: string;
  numeroPoliza: string;
  vigenciaInicio: string;
  vigenciaFin: string;
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
  const navigate = useNavigate();
  const { polizaNumber } = useParams();
  const [polizaData, setPolizaData] = useState<PolizaProps>({
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
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    AOS.init();
    if (polizaNumber) {
      console.log(polizaNumber);
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
    console.log(typeof polizaData.vigenciaInicio, polizaData.vigenciaFin);
  }, [polizaNumber]);

  const handleConfirmDeletePoliza = async () => {
    try {
      const res = await deletePoliza(polizaData.numeroPoliza);
      if (res) {
        navigate("/consultar");
      }
    } catch (error) {
      console.error("Error al eliminar la poliza:", error);
      throw error;
    }
  };

  if (!polizaNumber) {
    return <div>No existe la póliza solicitada.</div>;
  }

  const handleConfirmEditPoliza = async () => {
    try {
      const res = await editPoliza(polizaData.numeroPoliza, polizaData);
      if (res) console.log(`Poliza ${polizaData.numeroPoliza} editada`);
      setEditar(false);
      window.location.reload();
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

  const handleDeletePoliza = async () => {
    Confirm.show(
      "Está a punto de eliminar la póliza",
      "Desea confirmar?",
      "Si",
      "No",
      () => {
        handleConfirmDeletePoliza();
      }
    );
  };

  const handleEditPoliza = async () => {
    Confirm.show(
      "Esta a punto de editar la póliza",
      "Desea confirmar?",
      "Si",
      "No",
      () => {
        handleConfirmEditPoliza();
      }
    );
  };

  // const handleDateChange = (name: string) => (date: string) => {
  //   setPolizaData((prevPolizaData) => ({
  //     ...prevPolizaData,
  //     [name]: date,
  //   }));
  // };

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
                    <InputText
                      name="vigenciaInicio"
                      value={polizaData.vigenciaInicio.substring(0, 10)}
                      onChange={handleChange}
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
                      className={`${
                        {
                          vencida: "bg-[#FFA6A6]",
                          vigente: "bg-[#a6e395]",
                          anulada: "bg-[#b0b0b0]",
                        }[polizaData.estado] || ""
                      } text-black rounded-xl py-2 pl-3 border outline-none xl:text-base md:text-base text-sm`}
                      name="estado"
                      value={polizaData.estado.toUpperCase()}
                      onChange={handleChange}
                      readOnly={!editar}
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
                  <InputText
                    name="vigenciaFin"
                    value={polizaData.vigenciaFin.substring(0, 10)}
                    onChange={handleChange}
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
                  <InputText
                    name="formaDePago"
                    value={polizaData.formaDePago}
                    onChange={handleChange}
                    readonly={!editar}
                  />
                </div>
              </div>
            </div>
          )}

          {editar ? (
            <div className="flex items-center justify-center gap-6">
              <Button1 text="Guardar" onClick={handleEditPoliza} />
              <Button2 text="Cancelar" onClick={() => setEditar(false)} />
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
