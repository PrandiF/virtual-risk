import logo from "../assets/Group 21.png";
function Header() {
  return (
    <div className="absolute w-full py-4 z-40 flex items-center justify-around bg-header-gradient">
      <a href="/inicio">
        <img src={logo} className="w-[300px] cursor-pointer" />
      </a>
      <div className="text-black font-semibold mt-[3%] flex gap-20 text-[18px] font-montserrat">
        <a href="/inicio" className="cursor-pointer hover:underline">
          INICIO
        </a>
        <a href="/cargar" className="cursor-pointer hover:underline">
          CARGAR
        </a>
        <a href="/consultar" className="cursor-pointer hover:underline">
          CONSULTAR
        </a>
      </div>
    </div>
  );
}

export default Header;
