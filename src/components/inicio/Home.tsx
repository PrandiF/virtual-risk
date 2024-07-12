import Title from "../../commons/Title";
import imgCargar from "../../assets/imagenCargar.png";
import imgConsultar from "../../assets/imagenConsultar.png";
import Card from "./Card";

function Home() {
  return (
    <div
      id="HOME"
      className="flex flex-col gap-12 items-center justify-center z-40 m-auto"
    >
      <Title text="¿Qué operación desea realizar?" />
      <div className="flex gap-10 justify-center items-center">
        <Card img={imgCargar} buttonText="Cargar" buttonHref="/cargar"/>
        <Card img={imgConsultar} buttonText="Consultar" buttonHref="/consultar"/>
      </div>
    </div>
  );
}

export default Home;
