import BackButton from "../../commons/BackButton";
import Button1 from "../../commons/Button1";
import InputDate from "../../commons/InputDate";
import InputSelect from "../../commons/InputSelect";
import InputText from "../../commons/InputText";
import Title from "../../commons/Title";
import Header from "../Header";

function Carga() {
  return (
    <div className="relative flex w-full h-screen items-center z-20 ">
      <Header />
      <div className="flex w-full items-center flex-col gap-8 xl:pt-0 xl:pb-0 pt-[50%] pb-[10%]">
        <div className="flex flex-col relative bg-[#EAA788] bg-opacity-25 backdrop-blur-sm z-20 xl:w-[50%] md:w-[70%] w-[95%] px-6 xl:py-8 md:py-6 py-4 m-auto rounded-lg xl:gap-10 md:gap-8 gap-6 xl:mt-0 ">
          <BackButton />
          <Title text="Cargar pólizas" />
          <div className="flex w-[50%] items-start justify-center gap-5 mx-auto">
            <div className="flex w-full flex-col gap-4">
              <InputText placeholder="Asegurado" />
              <InputSelect
                placeholder="Compañía"
                options={["opcion1", "opcion2", "opcion3"]}
                width="full"
              />
              <InputText placeholder="N de Póliza" />
              <InputDate placeholder="Vigencia Inicio" width="full" />
              <InputText placeholder="Moneda" />
              <InputSelect
                placeholder="Forma de pago"
                options={["option1", "option2", "option3"]}
                width="full"
              />
            </div>
            <div className="flex w-full flex-col gap-4">
              <InputText placeholder="Productor" />
              <InputSelect
                placeholder="Riesgo"
                options={["option1", "option2", "option3"]}
                width="full"
              />
              <InputText placeholder="Detalle/Patente" />
              <InputDate placeholder="Vigencia Fin" width="full" />
              <InputText placeholder="Premio" />
            </div>
          </div>{" "}
        </div>
        <Button1 text="Cargar" />
      </div>
    </div>
  );
}

export default Carga;
