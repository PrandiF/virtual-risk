import BackButton from "../../commons/BackButton";
import InputDate from "../../commons/InputDate";
import InputText from "../../commons/InputText";
import SearchButton from "../../commons/SearchButton";
import Title from "../../commons/Title";
import Header from "../Header";
import TablaConsulta from "./TablaConsulta";
import { TbWashDrycleanOff } from "react-icons/tb";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Consulta() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [filterData, setFilterData] = useState({
    asegurado: "",
    compañia: "",
    vigenciaInicio: new Date("1900-01-01"),
    vigenciaFin: new Date("1900-01-01"),
    detalle: "",
    estado: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilterData((prevPolizaData) => ({
      ...prevPolizaData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleDateChange = (name: string) => (date: string) => {
    setFilterData((prevPolizaData) => ({
      ...prevPolizaData,
      [name]: date,
    }));
  };
  const [search, setSearch] = useState(false)
  const [clean, setClean] = useState(false)
  const [isFilter, setIsFilter] = useState(false)
  const handleSearch = () => {
    setSearch(!search)
  }
  useEffect(() => {
    if (!search && clean) {
      setFilterData({
        asegurado: "",
        compañia: "",
        vigenciaInicio: new Date("1900-01-01"),
        vigenciaFin: new Date("1900-01-01"),
        detalle: "",
        estado: "",
      })
      setIsFilter(false)
    } else if (search && !clean) {
      setIsFilter(true)
    } else {
      setIsFilter(false)
    }
  }, [search])
  useEffect(() => {
    if (search) { setSearch(false), setClean(false) }
  }, [filterData])
  return (
    <div className="relative flex w-full h-screen items-start z-20 pt-[8%]">
      <Header />
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-12 py-8 px-4 items-center">
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
              className="flex  items-center gap-5 h-full w-full "
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <InputText placeholder="Asegurado" width="full" value={filterData.asegurado} onChange={handleChange} name="asegurado" />
              <InputText placeholder="Compañía" width="full" value={filterData.compañia} onChange={handleChange} name="compañia" />
            </div>
            <div
              className="flex items-center gap-5 h-full w-full "
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <InputText placeholder="Detalle/Patente" width="full" value={filterData.detalle} onChange={handleChange} name="detalle" />
              <InputText placeholder="Estado" width="full" value={filterData.estado} onChange={handleChange} name="estado" />
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
              <div className="flex gap-5 items-center w-full">
                <InputDate placeholder="Desde" clean={clean} width="full" onChange={handleDateChange("vigenciaInicio")} />
                <InputDate placeholder="Hasta" clean={clean} width="full" onChange={handleDateChange("vigenciaFin")} />
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="xl:w-fit w-full flex h-full justify-center items-center"
              data-aos="fade"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              {search ? (
                <div
                  onClick={() => setClean(true)}
                  className="bg-orange1 text-white flex items-center justify-center rounded-lg cursor-pointer hover:brightness-95 xl:w-[45px] xl:h-[42px]"
                >
                  <TbWashDrycleanOff width={20} className="duration-200 ease-in-out transition-all" />
                </div>
              ) : (
                <SearchButton />
              )}

            </button>
          </div>
        </div>
        <div className="flex items-center px-4 justify-center w-full rounded-lg">
          <TablaConsulta filter={filterData} isFilter={isFilter} />
        </div>
      </div>
    </div>

  );
}

export default Consulta;
