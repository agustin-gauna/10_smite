const FlipCard = ({ onClick, isFlipped, name, img, frontText }) => {
  return (
    <div className="w-20 h-28  md:w-44 md:h-62 perspective justify-between hover:scale-105 transition-all duration-400 ease-in-out">
      <div
        className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          onClick={onClick}
          className="hover:cursor-pointer absolute w-full h-full bg-secondary bg-[url(/dot/dot_card.svg)] bg-no-repeat bg-center flex items-center justify-center text-white font-bold backface-hidden border-transparent outline-3 outline-secondary outline-offset-3 rounded-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h4 className="text-md text-white/50 select-none">{frontText}</h4>
        </div>
        <div
          className="absolute w-full h-full bg-gradient-to-br from-[#26304e] to-secondary  rounded-sm flex items-center justify-center text-white text-2xl font-bold backface-hidden rotate-y-180 border-transparent outline-2 outline-primary outline-offset-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex flex-col gap-2 items-center ">
            {img && (
              <img
                className="w-16 h-16 rounded-sm border border-primary"
                src={img}
                alt={name}
              />
            )}

            <h2 className="text-xs md:text-sm text-white/80 font-bold text-center text-pretty p-2">
              {name}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
