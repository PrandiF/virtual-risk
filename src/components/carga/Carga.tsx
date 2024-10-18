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
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Carga() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    const { name, value } = e.target;

    setPolizaData((prevPolizaData) => ({
      ...prevPolizaData,
      [name]: name === "premio" ? parseFloat(value) : value,
    }));
  };

  const handleDateChange = (name: string) => (date: string) => {
    setPolizaData((prevPolizaData) => ({
      ...prevPolizaData,
      [name]: date,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      const res = await createPoliza(polizaData);

      if (res) {
        setLoading(false);
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
      setLoading(false);
      if (
        !polizaData.asegurado ||
        !polizaData.compañia ||
        !polizaData.detalle ||
        !polizaData.estado ||
        !polizaData.formaDePago ||
        !polizaData.moneda ||
        !polizaData.numero ||
        !polizaData.numeroPoliza ||
        !polizaData.premio ||
        !polizaData.productor ||
        !polizaData.riesgo ||
        !polizaData.vigenciaFin ||
        !polizaData.vigenciaInicio
      ) {
        Report.failure(
          "Error al cargar la poliza",
          "Por favor, completa todos los campos",
          "Ok"
        );
      }
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
    <div className="relative flex w-full items-center z-20 xl:py-[10%] h-full">
      <Header />
      <div className="flex w-full items-center flex-col gap-8 xl:pt-[2%] xl:pb-0 pt-[20%] pb-[5%]">
        <div
          className="flex flex-col relative bg-[#EAA788] bg-opacity-25 backdrop-blur-sm z-20 xl:w-[50%] md:w-[70%] w-[95%] px-6 xl:py-4 md:py-6 py-4 m-auto rounded-lg xl:gap-6 md:gap-8 gap-4 xl:mt-[5%] "
          data-aos="fade"
          data-aos-duration="2500"
          data-aos-delay="400"
        >
          <div className="flex">
            <BackButton onClick={() => navigate(-1)} />
          </div>
          <Title text="Cargar pólizas" />
          <div className="flex w-[50%] flex-col items-start justify-center gap-5 mx-auto">
            <div className="flex w-full gap-4">
              <InputText
                placeholder="Asegurado"
                value={polizaData.asegurado}
                onChange={handleChange}
                name="asegurado"
                width="full"
              />
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
                  "ANDRES LÓPEZ MURGUEITIO",
                ]}
                value={polizaData.productor}
                onChange={handleChange}
                name="productor"
              />
            </div>
            <div className="flex w-full gap-4">
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
                  "GALICIA",
                  "SMG",
                  "HDI",
                  "MERIDIONAL",
                ]}
                width="full"
                value={polizaData.compañia}
                onChange={handleChange}
                name="compañia"
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
            </div>

            <div className="flex w-full gap-4">
              <InputText
                placeholder="N de Póliza"
                value={polizaData.numeroPoliza}
                onChange={handleChange}
                name="numeroPoliza"
                width="full"
              />

              <InputText
                placeholder="Detalle/Patente"
                value={polizaData.detalle}
                onChange={handleChange}
                name="detalle"
                width="full"
              />
            </div>

            <div className="flex w-full gap-4">
              <InputDate
                placeholder="Vigencia Inicio"
                width="full"
                onChange={handleDateChange("vigenciaInicio")}
              />
              <InputDate
                placeholder="Vigencia Fin"
                width="full"
                onChange={handleDateChange("vigenciaFin")}
              />
            </div>

            <div className="flex w-full gap-4">
              <InputSelect
                options={["Pesos", "Dolares"]}
                placeholder="Moneda"
                value={polizaData.moneda}
                onChange={handleChange}
                name="moneda"
                width="full"
              />
              <InputNumber
                placeholder="Premio"
                value={polizaData.premio}
                onChange={handleChange}
                name="premio"
                width="full"
              />
            </div>

            <div className="flex w-full gap-4">
              {polizaData.formaDePago == "CBU" ? (
                <InputText
                  placeholder="Numero de CBU"
                  name="numero"
                  value={polizaData.numero}
                  onChange={handleChange}
                  width="[50%]"
                />
              ) : polizaData.formaDePago == "TARJETA" ? (
                <InputText
                  placeholder="Numero de tarjeta"
                  name="numero"
                  value={polizaData.numero}
                  onChange={handleChange}
                  width="[50%]"
                />
              ) : (
                ""
              )}
              <InputSelect
                placeholder="Forma de pago"
                options={["CUPONES", "TARJETA", "CBU"]}
                width="[50%]"
                value={polizaData.formaDePago}
                onChange={handleChange}
                name="formaDePago"
              />
            </div>
          </div>
          {loading ? (
            <div className="loading-spinner text-center">
              <ClipLoader color="#4D5061" loading={loading} size={50} />
            </div>
          ) : (
            <div className="mx-auto">
              <Button4 text="Cargar" onClick={handleSubmit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carga;
