import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Virtual Risk S.A. de Josè María Izquierdo.",
          "Más de 40 años como profesionales en seguros.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default TypeWriter;
