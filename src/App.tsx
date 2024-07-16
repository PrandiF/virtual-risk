import Header from "./components/Header";
import "./index.css";
import imageBackground from "./assets/Fondo.png";
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
          className="absolute top-0 left-0 inset-0 w-screen h-screen object-cover"
        />
        {/* <Header /> */}
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
