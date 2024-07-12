import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
  return (
    <div className="cursor-pointer text-orange1  underline flex gap-0.5 items-center" onClick={() => window.history.back()}>
      <FaArrowLeft />
      <p className="text-lg font-semibold">Atrás</p>
    </div>
  );
}

export default BackButton;
