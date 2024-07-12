import Header from "./components/Header";
import "./index.css";
import imageBackground from "./assets/Fondo.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/inicio/Home";
import Carga from "./components/carga/Carga";
import Consulta from "./components/consulta/Consulta";
import IndividualConsulta from "./components/consulta/IndividualConsulta";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full font-roboto scroll-smooth flex flex-col">
        <img
          src={imageBackground}
          alt="fondo"
          className="fixed flex w-screen object-cover z-0 top-[-50%]"
        />
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/cargar" element={<Carga />} />
          <Route path="/consultar" element={<Consulta />} />
          <Route
            path="/consultar/consulta-individual"
            element={<IndividualConsulta />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
