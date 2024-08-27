import BackButton from "../../commons/BackButton";
import InputDate from "../../commons/InputDate";
import InputSelect from "../../commons/InputSelect";
import InputText from "../../commons/InputText";
import Title from "../../commons/Title";
import Header from "../Header";
import { Report } from "notiflix/build/notiflix-report-aio";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { createPoliza } from "../../services/poliza.service";
import Button4 from "../../commons/Button4";
import InputNumber from "../../commons/inputNumber";

function Carga() {
  const [polizaData, setPolizaData] = useState({
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
    premio: 0,
    formaDePago: "",
    numero: "",
  });

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

  const handleSubmit = async () => {
    try {
      const res = await createPoliza(polizaData);
      if (res) {
        Report.success(
          "Póliza Cargada",
          "Se cargó una nueva póliza correctamente",
          "Ok",
          () => {
            setPolizaData({
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
              premio: 0,
              formaDePago: "",
              numero: "",
            });
            window.location.reload();
          }
        );
      }
    } catch (error) {
      Report.failure(
        "Error al cargar la póliza",
        "No se pudo cargar la póliza al sistema",
        "Volver"
      );
      throw error;
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative flex w-full items-center z-20 min-h-screen">
      <Header />
      <div className="flex w-full items-center flex-col gap-8 xl:pt-0 xl:pb-0 pt-[30%] pb-[20%]">
        <div
          className="flex flex-col relative bg-[#EAA788] bg-opacity-25 backdrop-blur-sm z-20 xl:w-[50%] md:w-[70%] w-[95%] px-6 xl:py-8 md:py-6 py-4 m-auto rounded-lg xl:gap-10 md:gap-8 gap-6 "
          data-aos="fade"
          data-aos-duration="2500"
          data-aos-delay="400"
        >
          <BackButton />
          <Title text="Cargar pólizas" />
          <div className="flex w-[50%] items-start justify-center gap-5 mx-auto">
            <div className="flex w-full flex-col gap-4">
              <InputText
                placeholder="Asegurado"
                value={polizaData.asegurado}
                onChange={handleChange}
                name="asegurado"
              />
              <InputSelect
                placeholder="Compañía"
                options={[
                  "BERKLEY",
                  "COSENA",
                  "FEDERACIÓN",
                  "SANCOR",
                  "SURA",
                  "ZURICH",
                  "ALLIANZ",
                  "LIBRA",
                  "PREVENCIÓN",
                  "OMINT",
                  "ASOCIART",
                  "CNP",
                  "MARTINEZ SOSA",
                  "SAN CRISTOBAL",
                  "RIVADAVIA",
                  "MERCANTIL ANDINA",
                  "HANSTEATICA",
                  "ZURICH EX QBE",
                  "C&C",
                  "CHUBB",
                ]}
                width="full"
                value={polizaData.compañia}
                onChange={handleChange}
                name="compañia"
              />
              <InputText
                placeholder="N de Póliza"
                value={polizaData.numeroPoliza}
                onChange={handleChange}
                name="numeroPoliza"
              />
              <InputDate
                placeholder="Vigencia Inicio"
                width="full"
                onChange={handleDateChange("vigenciaInicio")}
              />
              <InputSelect
              options={[
                "Pesos",
                "Dolares",
              ]}
                placeholder="Moneda"
                value={polizaData.moneda}
                onChange={handleChange}
                name="moneda"
                width="full"
              />
              <InputSelect
                placeholder="Forma de pago"
                options={["CUPONES", "TARJETA", "CBU"]}
                width="full"
                value={polizaData.formaDePago}
                onChange={handleChange}
                name="formaDePago"
              />
            </div>
            <div className="flex w-full flex-col gap-4">
              <InputSelect
                placeholder="Productor"
                width="full"
                options={[
                  "VIRTUAL RISK SA",
                  "ALICIA SUAREZ DE BOSSIO",
                  "JORGE CRIBARO",
                  "NORMA CECILIA IZQUIERDO",
                  "NATALI RIOS",
                  "ANGELICA ALVARENGA",
                ]}
                value={polizaData.productor}
                onChange={handleChange}
                name="productor"
              />
              <InputSelect
                placeholder="Riesgo"
                options={[
                  "AUTOMOTOR",
                  "FLOTA",
                  "MOTO",
                  "COMBINADO FAMILIAR",
                  "VIDA OBLIGATORIO",
                  "VIDA INDIVIDUAL",
                  "VIDA COLECTIVO",
                  "INTEGRAL DE COMERCIO",
                  "INTEGRAL DE CONSORCIO",
                  "RESPONSABILIDAD CIVIL",
                  "CAUCIÓN",
                  "ACCIDENTES PERSONALES",
                  "TODO RIESGO OPERATIVO",
                  "MALA PRAXIS",
                  "ART",
                  "INCENDIO",
                  "R.C. PROFESIONAL",
                  "ROBO Y RIESGOS SIMILARES",
                  "TRANSPORTES",
                  "CASCOS",
                  "REGISTRO",
                  "E. CONTRATO",
                ]}
                width="full"
                value={polizaData.riesgo}
                onChange={handleChange}
                name="riesgo"
              />
              <InputText
                placeholder="Detalle/Patente"
                value={polizaData.detalle}
                onChange={handleChange}
                name="detalle"
              />
              <InputDate
                placeholder="Vigencia Fin"
                width="full"
                onChange={handleDateChange("vigenciaFin")}
              />
              <InputNumber
                placeholder="Premio"
                value={polizaData.premio}
                onChange={handleChange}
                name="premio"
              />
              {polizaData.formaDePago == "CBU" ? (
                <InputText
                  placeholder="Numero de CBU"
                  name="numero"
                  value={polizaData.numero}
                  onChange={handleChange}
                />
              ) : polizaData.formaDePago == "TARJETA" ? (
                <InputText
                  placeholder="Numero de tarjeta"
                  name="numero"
                  value={polizaData.numero}
                  onChange={handleChange}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div data-aos="fade" data-aos-duration="2000" data-aos-delay="600">
          <Button4 text="Cargar" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Carga;
