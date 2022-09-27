import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ConfirmationModal } from './ConfirmationModal';

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
    <div className="flex p-2 ">
      <div
        className={`card flex min-w-[20rem] min-h-[25rem] items-center justify-center
          rounded duration-150 cursor-pointer  
          p-1 bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] ${
            flip ? 'flip' : ''
          }`}
        onClick={() => setFlip(!flip)}
      >
        <div className="front absolute flex  flex-col items-center  justify-center border-[6px] rounded border-zinc-900 inset-[6px] gap-2">
          <div className="absolute top-[0] text-violet-700 p-2 rounded-xl right-[10px]  font-black">
            {' '}
            AD#5256
          </div>
          <div className="border-4 border-violet-700 p-1 rounded-full">
            <div className="flex items-center  justify-center p-[0.10rem] rounded-full bg-violet-500">
              <img
                className="w-32 h-32  rounded-full overflow-hidden"
                src="https://avatars.githubusercontent.com/u/36476485?v=4"
                alt="user image"
              />{' '}
            </div>
          </div>
          <span className="bg-violet-700 p-2 rounded-md font-bold">
            {' '}
            {props.name}{' '}
          </span>

          <div className="flex flex-col pt-4">
            <span className="text-xl text-shadow font-semibold">
              {' '}
              Experiência
            </span>
            <div className="font-black text-[3rem] leading-none text-center  text-shadow">
              {props.yearsPlaying}
            </div>
            <span className="text-xl text-shadow text-center leading-none font-semibold">
              {props.yearsPlaying <= 1 ? ' Ano' : ' Anos'}
            </span>
          </div>
        </div>
        <div className="back absolute bg-gradient-to-br inset-[6px] from-zinc-900 via-zinc-700 to-zinc-500  rounded p-4">
          <div className="flex flex-col text-white gap-2">
            <span className="font-pmarker text-xl  bg-violet-700 font-black rounded p-2 text-center">
              {props.name}
            </span>
            <div className="flex justify-between font-bold mb-1">
              <span> Há quanto tempo joga:</span>
              <span>
                {props.yearsPlaying}
                {props.yearsPlaying <= 1 ? ' ano' : ' anos'}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 font-semibold">
              Dias da Semana{' '}
              <div className=" flex items-center p-2">
                <div className=" flex items-center">
                  <ToggleGroup.Root
                    type="multiple"
                    className="flex gap-2"
                    value={props.weekDays}
                  >
                    <ToggleGroup.Item
                      value="0"
                      title="Domingo"
                      className={`w-8 h-8 rounded  ${
                        props.weekDays.includes('0')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500'
                      }`}
                    >
                      D
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="1"
                      title="Segunda"
                      className={`w-8 h-8 rounded  ${
                        props.weekDays.includes('1')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="2"
                      title="Terça"
                      className={`w-8 h-8 rounded  ${
                        props.weekDays.includes('2')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500'
                      }`}
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="3"
                      title="Quarta"
                      className={`w-8 h-8 rounded  ${
                        props.weekDays.includes('3')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500'
                      }`}
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="4"
                      title="Quinta"
                      className={`w-8 h-8 rounded  ${
                        props.weekDays.includes('4')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500'
                      }`}
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="5"
                      title="Sexta"
                      className={`w-8 h-8 rounded  ${
                        props.weekDays.includes('5')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="6"
                      title="Sábado"
                      className={`w-8 h-8 rounded  ${
                        props.weekDays.includes('6')
                          ? 'bg-violet-500'
                          : 'bg-zinc-500'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between font-semibold ">
              <span> Usa o discord? </span>
              <span
                className={`bg-emerald-500/80 font-black p-2 rounded text-center underline decoration-2 underline-offset-2`}
              >
                Sim
              </span>
            </div>
            <div className="flex justify-between font-semibold">
              <span> Começa a jogar às </span>
              <span>{props.hourStart}h</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span> Parando às </span>
              <span>{props.hourEnd}h</span>
            </div>
            <Dialog.Root>
              <Dialog.Trigger>
                <div className=" bg-violet-600 rounded font-semibold p-2 m-2 transition-colors hover:bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] hover:text-shadow">
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
