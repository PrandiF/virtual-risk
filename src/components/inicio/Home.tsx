import Title from "../../commons/Title";
import imgCargar from "../../assets/imagenCargar.png";
import imgConsultar from "../../assets/imagenConsultar.png";
import Card from "./Card";
import RespnosiveCards from "./RespnosiveCards";
import Header from "../Header";

function Home() {
  return (
    <div className="relative flex w-full h-screen items-center z-20 ">
      <Header />
      <div className="flex items-center justify-center flex-col gap-16 mx-auto">
        <div className="flex text-center">
          <Title text="¿Qué operación desea realizar?" />
        </div>
        <div className="xl:flex hidden gap-10 justify-center items-center">
          <Card img={imgCargar} buttonText="Cargar" buttonHref="/cargar" />
          <Card
            img={imgConsultar}
            buttonText="Consultar"
            buttonHref="/consultar"
          />
        </div>
        <div className="xl:hidden flex justify-center items-center">
          <RespnosiveCards />
        </div>
      </div>
    </div>
  );
}

export default Home;
