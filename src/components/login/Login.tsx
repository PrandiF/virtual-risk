import Title from "../../commons/Title";
import Button1 from "../../commons/Button1";
import InputText from "../../commons/InputText";
import InputPsw from "../../commons/InputPsw";

function Login() {
  return (
    <div className="flex w-full h-screen items-center justify-center z-20">
      <div className="flex relative flex-col bg-[#EAA788] bg-opacity-25 backdrop-blur-sm z-20 w-[30%] px-5 items-center gap-10 py-16 m-auto rounded-lg">
        <Title text="Bienvenido/a" />
        <form className="w-[60%] flex flex-col gap-6">
          <InputText placeholder="Usuario" width="60%" />
          <InputPsw />
        </form>
        <Button1 text="Iniciar Sesión" />
      </div>
    </div>
  );
}

export default Login;
