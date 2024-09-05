import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#DC580C] flex justify-between items-center py-8 pl-[8%]">
      <div className="flex flex-col gap-1 xl:text-base text-sm">
        <p>Virtual Risk S.A.</p>
        <p>info@virtualrisk.com.ar</p>
        <p>+54 9 11 4975-1270</p>
      </div>
      <div className="flex gap-6 items-center pr-[8%] xl:text-4xl text-3xl">
        <Link to="">
          <FaInstagram />
        </Link>
        <Link to="">
          <FaFacebookSquare />
        </Link>
        <Link to="">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
