type Button1Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  onEnter?: () => void;
  url?: string;
};

function Button1({ text, onClick, url }: Button1Props) {
  return (
    <a
      href={url}
      onClick={onClick}
      className="z-30 bg-[#ffffffb6] text-[#fd7e14] font-semibold py-1 w-full flex items-center justify-center shadow-lg rounded-3xl cursor-pointer hover:brightness-95"
    >
      {text}
    </a>
  );
}

export default Button1;
