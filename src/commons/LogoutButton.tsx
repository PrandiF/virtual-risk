import { TbLogout } from "react-icons/tb";
import { logout } from "../services/user.service";
import { useNavigate } from "react-router-dom";
function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await logout();
      console.log(res);
      if (res == "Cookies deleted") navigate("/");
    } catch (error) {
      throw error;
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-orange1 text-white flex items-center justify-center rounded-lg cursor-pointer hover:brightness-95 py-2 px-2"
      title="Cerrar Sesión"
    >
      <TbLogout className="flex text-lg" />
    </button>
  );
}

export default LogoutButton;
