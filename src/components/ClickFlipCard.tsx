import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ConfirmationModal } from './ConfirmationModal';
import useMediaQuery from '../utils/useMediaQuery';

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
  const matches = useMediaQuery('(min-width: 640px)');

  return (
    <div className="flex p-2 ">
      <div
        // Card
        className={`card relative flex min-w-[20rem] min-h-[25rem] items-center justify-center
          rounded duration-150 cursor-pointer  
          p-1 bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]
          mobile:min-h-[12rem] mobile:mb-1
          
          
          
          ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="absolute  border-2 border-zinc-700 rotate-[270deg] -left-6  p-2 rounded-md text-zinc-700 font-black mobile:hidden">
          clique no card
        </div>

        <div
          // Borda preta
          className="front absolute flex  flex-col items-center  justify-center border-[6px] rounded border-zinc-900 inset-[6px] gap-2
          mobile:flex-row mobile:inset-[4px] mobile:gap-6"
        >
          <div
            // Ads Element
            className="absolute top-[0] text-violet-700 p-2  right-[10px]  font-black
          mobile:p-0"
          >
            {' '}
            AD #{props.id.substring(0, 4).toLocaleUpperCase()}
          </div>
          <div className="flex flex-col items-center gap-2">
            {/* Div Image */}
            <div className="border-4 border-violet-700 p-1 rounded-full">
              <div className="flex items-center  justify-center p-[0.10rem] rounded-full bg-violet-500">
                <img
                  className="w-32 h-32  rounded-full overflow-hidden
                mobile:w-20 mobile:h-20 "
                  src="https://avatars.githubusercontent.com/u/36476485?v=4"
                  alt="user image"
                />{' '}
              </div>
            </div>
            <span className="bg-violet-700 p-2 rounded-md font-bold">
              {' '}
              {props.name}{' '}
            </span>
          </div>
          <div className="flex flex-col pt-6 mobile:pt-0 mobile:gap-">
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

            <div className=" hidden mobile:flex mobile:absolute mobile:right-[0.175rem] mobile:bottom-[0.175rem] mobile:text-zinc-700 mobile:border-2 mobile:rounded mobile:p-[0.08rem] mobile:border-zinc-700 mobile:font-black mobile:text-sm">
              {' '}
              clique no card
            </div>
          </div>
        </div>
        <div className="back absolute bg-gradient-to-br inset-[6px] from-zinc-900 via-zinc-700 to-zinc-500   rounded p-4 mobile:p-2 mobile:inset-[4px]">
          <div className="flex flex-col text-white gap-4 mobile:gap-1">
            <span className="text-xl  bg-violet-700 font-semibold rounded p-2 text-center mobile:hidden mobile:p-0">
              Detalhes
            </span>

            <div className="flex flex-col items-center gap-2 font-semibold mobile:gap-1">
              Dias da Semana que Joga:
              <div className=" flex items-center p-2 mobile:p-0">
                <div className=" flex items-center">
                  <ToggleGroup.Root
                    type="multiple"
                    className="flex gap-2 mobile:gap-1"
                    value={props.weekDays}
                  >
                    <ToggleGroup.Item
                      value="0"
                      title="Domingo"
                      className={`w-8 h-8 rounded mobile:w-full mobile:p-2 mobile:flex mobile:items-center mobile:justify-center  ${
                        props.weekDays.includes('0')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500 mobile:hidden'
                      }`}
                    >
                      {matches ? 'D' : 'Domingo'}
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="1"
                      title="Segunda"
                      className={`w-8 h-8 rounded mobile:w-full mobile:p-2 mobile:flex mobile:items-center mobile:justify-center ${
                        props.weekDays.includes('1')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500 mobile:hidden'
                      }`}
                    >
                      {matches ? 'S' : 'Segunda'}
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="2"
                      title="Terça"
                      className={`w-8 h-8 rounded mobile:w-full
                       mobile:p-2 mobile:flex mobile:items-center mobile:justify-center  ${
                         props.weekDays.includes('2')
                           ? 'bg-violet-500'
                           : 'bg-zinc-500 mobile:hidden'
                       }`}
                    >
                      {matches ? 'T' : 'Terça'}
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="3"
                      title="Quarta"
                      className={`w-8 h-8 rounded mobile:w-full 
                      mobile:p-2 
                      mobile:flex 
                      mobile:items-center mobile:justify-center ${
                        props.weekDays.includes('3')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500 mobile:hidden'
                      }`}
                    >
                      {matches ? 'Q' : 'Quarta'}
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="4"
                      title="Quinta"
                      className={`w-8 h-8 rounded         mobile:w-full 
                      mobile:p-2 
                      mobile:flex 
                      mobile:items-center mobile:justify-center ${
                        props.weekDays.includes('4')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500 mobile:hidden'
                      }`}
                    >
                      {matches ? 'Q' : 'Quinta'}
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="5"
                      title="Sexta"
                      className={`w-8 h-8 rounded mobile:w-full mobile:p-2 mobile:flex mobile:items-center mobile:justify-center ${
                        props.weekDays.includes('5')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500 mobile:hidden'
                      }`}
                    >
                      {matches ? 'S' : 'Sexta'}
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="6"
                      title="Sábado"
                      className={`w-8 h-8 rounded mobile:w-full mobile:p-2 mobile:flex mobile:items-center mobile:justify-center ${
                        props.weekDays.includes('6')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500 mobile:hidden'
                      }`}
                    >
                      {matches ? 'S' : 'Sábado'}
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
                </div>
              </div>
            </div>

            <div className=" flex items-center justify-between font-semibold ">
              <span> Usa o discord? </span>
              <span
                className={`bg-emerald-500/80 font-black p-2 rounded text-center underline decoration-2 underline-offset-2 mobile:p-1`}
              >
                Sim
              </span>
            </div>
            <div className="flex justify-between font-semibold">
              <span> Começa a jogar às: </span>
              <span>{props.hourStart}h</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span> Parando às: </span>
              <span>{props.hourEnd}h</span>
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className=" bg-violet-600 rounded font-semibold p-2 m-2 transition-colors hover:bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] hover:text-shadow mobile:m-[0.2rem]">
                  Chamar pra DUO
                </div>
              </Dialog.Trigger>
              <ConfirmationModal />
            </Dialog.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
