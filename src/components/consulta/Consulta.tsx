import BackButton from "../../commons/BackButton";
import InputDate from "../../commons/InputDate";
import InputText from "../../commons/InputText";
import SearchButton from "../../commons/SearchButton";
import Title from "../../commons/Title";
import Header from "../Header";
import TablaConsulta from "./TablaConsulta";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import CancelButton from "../../commons/CancelButton";
import Pagination from "./Pagination";
import InputSelect from "../../commons/InputSelect";
import { useNavigate } from "react-router-dom";

function Consulta() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  const initialFilterData = {
    asegurado: "",
    compañia: "",
    vigenciaInicio: new Date("1900-01-01"),
    vigenciaFin: new Date("1900-01-01"),
    detalle: "",
    estado: "",
    riesgo: "",
  };

  const [filterData, setFilterData] = useState(initialFilterData);
  const [isFilter, setIsFilter] = useState(false);
  const [pageTotal, setPageTotal] = useState(1);
  const [pageFilter, setPageFilter] = useState(1);
  const [isClean, setIsClean] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setIsClean(false)
    isFilter && setIsFilter(false);
    setFilterData((prevPolizaData) => ({
      ...prevPolizaData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDateChange = (name: string) => (date: string) => {
    setIsClean(false);
    isFilter && setIsFilter(false);
    setFilterData((prevPolizaData) => ({
      ...prevPolizaData,
      [name]: date,
    }));
  };

  const handleSearch = () => {
    setIsFilter(true);
  };

  const handleCancel = () => {
    setFilterData(initialFilterData);
    setIsClean(true);
    setIsFilter(false);
    setPageFilter(1);
    setPageTotal(1);
  };

  const functionSetPageTotal = (num: number) => {
    setPageTotal(num);
  };

  const functionSetPageFilter = (num: number) => {
    setPageFilter(num);
  };
  return (
    <div className="relative flex w-full items-start z-20 pt-[8%]">
      <Header />
      <div className="flex w-full flex-col items-center justify-center gap-8 xl:mt-0 mt-[5%]">
        <div className="flex flex-col xl:gap-12 md:gap-10 gap-8 py-8 px-4 items-center">
          <div
            className="flex mr-auto"
            data-aos="fade"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <BackButton onClick={() => navigate(-1)} />
          </div>
          <div
            className="flex text-center"
            data-aos="fade"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <Title text="Consulta de pólizas" />
          </div>
          <div className="flex flex-col xl:flex-row w-full xl:w-full">
            <div
              className="flex  items-center gap-5 h-full w-[80%] mr-5 "
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <InputText
                placeholder="Asegurado"
                width="full"
                value={filterData.asegurado}
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
                  "GALICIA",
                  "SMG",
                  "HDI",
                  "MERIDIONAL",
                ]}
                width="full"
                value={filterData.compañia}
                onChange={handleChange}
                name="compañia"
                clean={isClean}
              />
            </div>
            <div
              className="flex items-center gap-5 h-full w-full mr-5"
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <InputText
                placeholder="Detalle/Patente"
                width="full"
                value={filterData.detalle}
                onChange={handleChange}
                name="detalle"
              />
              <InputSelect
                placeholder="Estado"
                options={["Vigente", "Vencida", "Anulada"]}
                width="full"
                value={filterData.estado}
                onChange={handleChange}
                name="estado"
                clean={isClean}
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
                value={initialFilterData.riesgo}
                onChange={handleChange}
                name="riesgo"
                clean={isClean}
              />
            </div>
            <div
              className="relative flex items-center gap-5 h-full w-full"
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <p className="text-sm absolute top-[-8px] left-0 text-start text-orange1 font-semibold ml-1 mt-[-13px]">
                Vigencia
              </p>
              <div className="flex gap-5 items-center justify-center w-[80%]">
                <InputDate
                  placeholder="Desde"
                  clean={isClean}
                  width="full"
                  onChange={handleDateChange("vigenciaInicio")}
                />
                <InputDate
                  placeholder="Hasta"
                  clean={isClean}
                  width="full"
                  onChange={handleDateChange("vigenciaFin")}
                />
              </div>
            </div>
            <button
              onClick={isFilter ? handleCancel : handleSearch}
              className="xl:w-fit w-full flex h-full justify-center items-center"
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              {isFilter ? (
                <div className="bg-orange1 text-white flex items-center justify-center rounded-lg cursor-pointer hover:brightness-95 xl:w-[45px] xl:h-[42px]">
                  <CancelButton />
                </div>
              ) : (
                <SearchButton />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 justify-center w-full rounded-lg mb-3">
          <TablaConsulta
            pageTotal={pageTotal}
            pageFilter={pageFilter}
            filter={filterData}
            isFilter={isFilter}
          />
          <Pagination
            pageTotal={pageTotal}
            isFilter={isFilter}
            pageFilter={pageFilter}
            setPageTotal={functionSetPageTotal}
            setPageFilter={functionSetPageFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default Consulta;
