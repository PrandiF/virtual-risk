import BackButton from "../../commons/BackButton";
import InputDate from "../../commons/InputDate";
import InputText from "../../commons/InputText";
import SearchButton from "../../commons/SearchButton";
import Title from "../../commons/Title";
import Header from "../Header";
import TablaConsulta from "./TablaConsulta";

function Consulta() {
  return (
    <div className="relative flex w-full h-screen items-start z-20 pt-[8%]">
      <Header />
      <div className="flex w-full flex-col gap-8">
        <div className="ml-24">
          <BackButton />
        </div>
        <Title text="Consulta de pólizas" />
        <div className="flex xl:flex-row flex-col gap-5 py-2 xl:px-0 px-4 mx-auto justify-center items-center">
          <div className="flex flex-col xl:flex-row gap-5 w-full xl:w-auto">
            <div className="flex  items-center gap-5 w-full ">
              <InputText placeholder="Asegurado" width="full" />
              <InputText placeholder="Compañía" width="full" />
            </div>
            <div className="flex items-center  gap-5 w-full ">
              <InputText placeholder="Detalle/Patente" width="full" />
              <InputText placeholder="Estado" width="full" />
            </div>
            <div className="flex items-center  gap-5 w-full ">
              <div className="flex flex-col justify-center mb-2 w-full">
                <p className="text-sm text-start text-orange1 font-semibold ml-1 mt-[-13px]">
                  Vigencia
                </p>
                <div className="flex  gap-5 items-center w-full ">
                  <InputDate placeholder="Desde" width="full" />
                  <InputDate placeholder="Hasta" width="full" />
                </div>
              </div>
            </div>
            <div className="xl:w-fit md:w-fit w-[30%] flex mx-auto items-center">
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
