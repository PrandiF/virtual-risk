import { IoSearchOutline } from "react-icons/io5";

type SearchButtonProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <div
      onClick={onClick}
      className="bg-orange1 text-white text-xl py-2 px-2 flex items-center justify-center rounded-lg cursor-pointer hover:brightness-95"
    >
      <IoSearchOutline />
    </div>
  );
}

export default SearchButton;
