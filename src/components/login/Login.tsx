import Title from "../../commons/Title";
import Button1 from "../../commons/Button1";
import InputText from "../../commons/InputText";
import InputPsw from "../../commons/InputPsw";
import HeaderLogin from "../HeaderLogin";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { login } from "../../services/user.service";
import { useNavigate } from "react-router-dom";
import { useUserStoreLocalStorage } from "../../store/userStore";
function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { loginState } = useUserStoreLocalStorage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(userData.username, userData.password);
      if (res == "User has been logged") {
        loginState();
        navigate("/inicio");
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className="flex w-full h-screen items-center justify-center z-20">
      <HeaderLogin />
      <div
        className="flex relative flex-col bg-[#EAA788] bg-opacity-25 backdrop-blur-sm z-20 xl:w-[30%] md:w-[60%] w-[90%] px-5 items-center gap-10 py-16 m-auto rounded-lg"
        data-aos="fade"
        data-aos-duration="2200"
        data-aos-delay="200"
      >
        <div data-aos="fade" data-aos-duration="2000" data-aos-delay="400">
          <Title text="Bienvenido/a" />
        </div>

        <form className="xl:w-[60%] flex flex-col gap-6">
          <div data-aos="fade" data-aos-duration="2000" data-aos-delay="600">
            <InputText
              placeholder="Usuario"
              width="full"
              onChange={handleChange}
              value={userData.username}
              name="username"
            />
          </div>
          <div data-aos="fade" data-aos-duration="2000" data-aos-delay="600">
            <InputPsw
              onChange={handleChange}
              value={userData.password}
              name="password"
            />
          </div>
        </form>
        <button data-aos="fade" data-aos-duration="2000" data-aos-delay="700">
          <Button1 text="Iniciar Sesión" onClick={handleSubmit} />
        </button>
      </div>
    </div>
  );
}

export default Login;
