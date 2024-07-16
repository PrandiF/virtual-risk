import logo from "../assets/Group 21.png";
function Header() {
  return (
    <div className="absolute top-0 left-0 w-full py-4 xl:px-0 md:px-1 px-3 z-40 flex items-center xl:justify-around justify-between bg-header-gradient">
      <a href="/inicio">
        <img src={logo} className="xl:w-[300px] md:w-[200px] w-[100px] cursor-pointer" />
      </a>
      <div className="text-black font-semibold mt-[3%] flex xl:gap-20 md:gap-8 gap-4 xl:text-[18px] md:text-[14px] text-[12px] font-montserrat">
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
