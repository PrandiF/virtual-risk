import logo from "../assets/logoVR.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function HeaderLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="absolute top-0 left-0 w-full py-6 z-40 flex items-center justify-center bg-header-gradient"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="200"
    >
      <button onClick={() => navigate("/")}>
        <img src={logo} className="xl:w-[300px] w-[180px]" />
      </button>
    </div>
  );
}

export default HeaderLogin;
