type Button1Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function Button2({ text, onClick }: Button1Props) {
  return (
    <div
      onClick={onClick}
      className="z-30 bg-[#dc3545] py-1 w-[150px] flex items-center justify-center shadow-lg rounded-3xl cursor-pointer hover:brightness-95"
    >
      <p className="z-30 font-montserrat font-medium text-white text-center">
        {text}
      </p>
    </div>
  );
}

export default Button2;
