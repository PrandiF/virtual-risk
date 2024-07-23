import { TbWashDrycleanOff } from "react-icons/tb";

type CancelButtonProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
function CancelButton({ onClick }: CancelButtonProps) {

  return (
    <div
      onClick={onClick}
      className="bg-orange1 text-white flex items-center justify-center rounded-lg cursor-pointer hover:brightness-95 xl:w-[45px] xl:h-[42px] duration-200 ease-in-out transition-all"
    >
      <TbWashDrycleanOff className="hidden xl:flex md:hidden text-xl" />
      <p className="xl:hidden flex text-base px-6 py-1">Cancelar</p>
    </div>
  );
}

export default CancelButton;