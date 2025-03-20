import { useEffect } from "react";

const CardRandom = ({ god, delay, items }) => {
  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <section
      className="bg-gradient-to-tl from-[#26304e] to-secondary  p-4 rounded-sm text-white flex flex-col gap-6 card-random"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        key={god.name}
        className="flex font-bold items-center justify-between w-full "
      >
        <div className="flex items-center gap-4 pl-[6px]">
          <img
            src={god.image}
            alt={god.name}
            className="w-16 h-16 rounded-lg border-transparent outline-3 outline-primary outline-offset-3"
          />

          <div className="flex flex-col">
            <p className="text-xl md:text-2xl text-primary">{god.name}</p>
            <p className="text-white/10 text-xs font-normal">
              El starter queda a tu elección.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-20 ">
          <img src={god.role.img} alt={god.role.name} className="h-8 w-8" />
          <p className="text-primary">{god.role.name}</p>
        </div>
      </div>

      <div className="grid grid-cols-6 w-full gap-2">
        {items.map((item) => (
          <div className="flex flex-col items-center ">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-sm border border-primary "
            />
            <p className="text-xs text-pretty text-center text-ellipsis truncate text-white/50">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardRandom;
