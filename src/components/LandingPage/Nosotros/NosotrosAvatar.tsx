type avatarProps = {
  name: string;
  position: string;
  img: string;
};

function NosotrosAvatar({ img, name, position }: avatarProps) {
  return (
    <div className="w-[210px]  flex flex-col gap-1 items-center justify-center">
      <div>
        <img
          src={img}
          className="rounded-full xl:w-[200px] w-[150px] xl:h-[200px] h-[150px]  xl:mb-2 mb-0.5"
        />
      </div>

      <p className="font-bold xl:text-xl text-lg">{name}</p>
      <p className="xl:text-lg text-sm">{position}</p>
    </div>
  );
}

export default NosotrosAvatar;
