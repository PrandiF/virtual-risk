type Button1Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

function Button3({ text, onClick }: Button1Props) {
  return (
    <div
      onClick={onClick}
      className="z-30 bg-button2-gradient py-1 w-[150px] flex items-center justify-center shadow-lg rounded-3xl cursor-pointer hover:brightness-95"
    >
      <p className="z-30 font-montserrat font-medium text-orange1 text-center">{text}</p>
    </div>
  );
}

export default Button3;
