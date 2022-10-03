interface AdsUserProps {
  id: string;
  name: string;
  yearsPlaying: number;
}
export function CardFront(props: AdsUserProps) {
  return (
    <div
      // zinc border
      className="front absolute flex  
          items-center 
          justify-center 
          border-[6px] 
          rounded 
          border-zinc-900 
          inset-[4px] 
          gap-3
          xl:flex-col 
           xl:inset-[6px] xl:gap-2
          "
    >
      <div
        // Ads number Element
        className="absolute top-[0] text-violet-700 xl:p-2  right-[10px] font-black
         "
      >
        {' '}
        AD #{props.id.substring(0, 4).toLocaleUpperCase()}
      </div>
      <div className="flex flex-col items-center gap-2">
        {/* Div Image */}
        <div className="border-4 border-violet-700 p-1 rounded-full">
          <div className="flex items-center  justify-center p-[0.10rem] rounded-full bg-violet-500">
            <img
              className="xl:w-32 xl:h-32  rounded-full overflow-hidden
                   w-20 h-20 "
              src="https://avatars.githubusercontent.com/u/36476485?v=4"
              alt="user image"
            />{' '}
          </div>
        </div>
        <span className=" bg-violet-700 p-2 rounded-md font-bold">
          {' '}
          {props.name}{' '}
        </span>
      </div>
      <div className="flex flex-col xl:pt-6">
        <span className="text-xl text-shadow font-semibold">
          {' '}
          Tempo jogando
        </span>
        <div className="font-black text-[3rem] leading-none text-center  text-shadow">
          {props.yearsPlaying}
        </div>
        <span className="text-xl text-shadow text-center leading-none font-semibold">
          {props.yearsPlaying <= 1 ? ' Ano' : ' Anos'}
        </span>

        <div className=" xl:hidden flex absolute right-[0.175rem] bottom-[0.175rem] text-zinc-700 border-2 rounded p-[0.08rem] border-zinc-700 font-black text-sm">
          {' '}
          clique no card
        </div>
      </div>
    </div>
  );
}
