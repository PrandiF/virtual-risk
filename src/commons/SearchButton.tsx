import { IoSearchOutline } from "react-icons/io5";

type SearchButtonProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <div
      onClick={onClick}
      className="bg-orange1 text-white flex items-center justify-center rounded-lg cursor-pointer hover:brightness-95 xl:w-[45px] xl:h-[45px]"
    >
      <IoSearchOutline className="hidden xl:flex md:flex text-xl" />
      <p className="xl:hidden md:hidden flex text-base px-6 py-1">Buscar</p>
    </div>
  );
}

export default SearchButton;
