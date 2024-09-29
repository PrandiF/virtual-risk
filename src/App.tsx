import "./index.css";
import imageBackground from "./assets/Fondo.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/inicio/Home";
import Carga from "./components/carga/Carga";
import Consulta from "./components/consulta/Consulta";
import IndividualConsulta from "./components/consulta/IndividualConsulta";
import { useUserStoreLocalStorage } from "./store/userStore";
import Landing from "./components/LandingPage/Landing";

function App() {
  const { isAuthenticated } = useUserStoreLocalStorage();
  return (
    <Router>
      <div className="h-screen w-full font-roboto scroll-smooth flex flex-col">
        <img
          src={imageBackground}
          alt="fondo"
          className="flex absolute top-0 left-0 inset-0 w-screen h-full object-cover"
        />

        <Routes>
          <Route path="/" element={<Landing />} />
          {isAuthenticated ? (
            <>
              <Route path="/virtualNet/login" element={<Navigate to="/virtualNet/inicio" replace />} />
              <Route path="/virtualNet/inicio" element={<Home />} />
              <Route path="/virtualNet/cargar" element={<Carga />} />
              <Route path="/virtualNet/consultar" element={<Consulta />} />
              <Route
                path="/consultar/consulta-individual/:polizaNumber"
                element={<IndividualConsulta />}
              />
            </>
          ) : (
            <Route path="/virtualNet/login" element={<Login />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
