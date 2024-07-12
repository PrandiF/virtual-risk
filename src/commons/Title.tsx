type TitleProps = {
  text: string;
};

function Title({ text }: TitleProps) {
  return (
    <div className="z-20 text-orange1 w-full flex justify-center items-center font-montserrat">
      <p className="text-4xl font-bold z-20">{text}</p>
    </div>
  );
}

export default Title;
