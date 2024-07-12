import BackButton from "../../commons/BackButton";
import InputDate from "../../commons/InputDate";
import InputText from "../../commons/InputText";
import SearchButton from "../../commons/SearchButton";
import Title from "../../commons/Title";

function Consulta() {
  return (
    <div className="flex w-full h-screen items-start z-20 pt-[8%]">
      <div className="flex w-full flex-col gap-8">
        <div className="ml-24">
          <BackButton />
        </div>
        <Title text="Consulta de pólizas" />
        <div className="flex gap-5 py-2 justify-center items-center">
          <InputText placeholder="Asegurado" />
          <InputText placeholder="Compañía" />
          <InputText placeholder="Detalle/Patente" />
          <InputText placeholder="Estado" />
          <div className="flex flex-col justify-center mb-2">
            <p className="text-sm text-start text-orange1 font-semibold ml-1 mt-[-13px]">
              Vigencia
            </p>
            <div className="flex gap-5 items-center">
              <InputDate placeholder="Desde" />
              <InputDate placeholder="Hasta" />
            </div>
          </div>
          <SearchButton />
        </div>
      </div>
    </div>
  );
}

export default Consulta;
