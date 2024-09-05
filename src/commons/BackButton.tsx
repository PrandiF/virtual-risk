import { FaArrowLeft } from "react-icons/fa";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function BackButton({ onClick }: ButtonProps) {
  return (
    <div
      className="cursor-pointer text-orange1  underline flex gap-0.5 items-center"
      onClick={onClick}
    >
      <FaArrowLeft />
      <p className="xl:text-lg md:text-lg text-sm font-semibold">Atrás</p>
    </div>
  );
}

export default BackButton;
