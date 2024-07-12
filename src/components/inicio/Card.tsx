import Button1 from "../../commons/Button1";

type CardProps = {
  img: string;
  buttonText: string;
  buttonHref: string;
};

function Card({ img, buttonText, buttonHref }: CardProps) {
  return (
    <a
      href={buttonHref}
      className="relative w-[22%] h-full rounded-lg shadow-lg overflow-hidden bg-transparent hover:scale-105 transition-transform duration-300"
    >
      {/* <div className="relative w-[22%] h-full rounded-lg shadow-lg overflow-hidden bg-transparent hover:scale-105 "> */}
      <img
        src={img}
        className="w-full h-full object-cover z-0 rounded-lg"
        alt="imagen"
      />
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
        <Button1 text={buttonText} url={buttonHref} />
      </div>
      {/* </div> */}
    </a>
  );
}

export default Card;
