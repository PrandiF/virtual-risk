type Button1Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  url?: string;
};

function Button1({ text, onClick, url }: Button1Props) {
  return (
    <a
      href={url}
      onClick={onClick}
      className="z-30 bg-button1-gradient py-1 w-[150px] flex items-center justify-center shadow-lg rounded-3xl cursor-pointer hover:brightness-95"
    >
      <p className="z-30 font-montserrat font-medium text-white text-center">
        {text}
      </p>
    </a>
  );
}

export default Button1;
