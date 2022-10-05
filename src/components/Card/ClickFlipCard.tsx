import { useState } from 'react';
import { CardBack } from './CardBack';

import { CardFront } from './CardFront';

interface Ads {
  id: string;
  name: string;
  yearsPlaying: number;
  // discord: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  hourStart: string;
  hourEnd: string;
}
export function ClickFlipCard(props: Ads) {
  const [flip, setFlip] = useState(false);

  return (
    <div className="flex p-3 xl:p-2  mt-2  ">
      <div
        // Card
        className={`card 
          relative 
          flex 
          xl:min-w-[20rem] 
          xl:min-h-[25rem] 
          items-center 
          justify-center
          rounded 
          duration-150 
          cursor-pointer  
          p-1
          bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]
          min-h-[12rem]
          mb-1 
          min-w-[20rem]
          
          ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
      >
        <div className=" hidden  xl:absolute xl:flex  xl:border-2 xl:border-zinc-700 xl:rotate-[270deg] xl:-left-6  xl:p-2 xl:rounded-md xl:text-zinc-700 xl:font-black">
          clique no card
        </div>
        <CardFront
          id={props.id}
          name={props.name}
          yearsPlaying={props.yearsPlaying}
        />
        <CardBack
          hourEnd={props.hourEnd}
          hourStart={props.hourStart}
          useVoiceChannel={props.useVoiceChannel}
          weekDays={props.weekDays}
        />
      </div>
    </div>
  );
}
