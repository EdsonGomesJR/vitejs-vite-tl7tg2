import * as ToggleGroup from '@radix-ui/react-toggle-group';
import useMediaQuery from '../../utils/useMediaQuery';
import * as Dialog from '@radix-ui/react-dialog';
import { ConfirmationModal } from '../ConfirmationModal';

interface BackCardProps {
  weekDays: string[];
  useVoiceChannel: boolean;
  hourStart: string;
  hourEnd: string;
}

export function CardBack(props: BackCardProps) {
  const matches = useMediaQuery('(min-width: 1280px)');

  return (
    <div
      className="back absolute 
          bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500   
          rounded 
          p-2 
          inset-[4px]
          xl:p-4 
          xl:inset-[6px] 
          "
    >
      <div className="flex flex-col text-white xl:gap-4 gap-1">
        <span
          className="xl:text-xl xl:bg-violet-700 xl:font-semibold xl:rounded xl:p-2 xl:text-center xl:block
            hidden"
        >
          Detalhes
        </span>

        <div className="flex flex-col items-center xl:gap-2 font-semibold gap-1">
          Dias da Semana que Joga:
          <div className=" flex items-center xl:p-2 ">
            <div className=" flex items-center">
              <ToggleGroup.Root
                type="multiple"
                className="flex xl:gap-2 gap-1"
                value={props.weekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"
                  className={`xl:w-8 h-8 rounded w-full p-2 flex items-center justify-center  ${
                    props.weekDays.includes('0')
                      ? 'bg-violet-500'
                      : 'xl:bg-zinc-500 xl:flex hidden'
                  }`}
                >
                  {matches ? 'D' : 'Domingo'}
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title="Segunda"
                  className={`xl:w-8 h-8 rounded w-full p-2 flex items-center justify-center ${
                    props.weekDays.includes('1')
                      ? 'bg-violet-500'
                      : 'xl:bg-zinc-500 xl:flex hidden'
                  }`}
                >
                  {matches ? 'S' : 'Segunda'}
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title="Terça"
                  className={`xl:w-8 h-8 rounded w-full p-2 flex items-center justify-center  ${
                    props.weekDays.includes('2')
                      ? 'bg-violet-500'
                      : 'xl:bg-zinc-500 xl:flex hidden'
                  }`}
                >
                  {matches ? 'T' : 'Terça'}
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title="Quarta"
                  className={`xl:w-8 h-8 rounded w-full p-2 flex items-center justify-center ${
                    props.weekDays.includes('3')
                      ? 'bg-violet-500'
                      : 'xl:bg-zinc-500 xl:flex hidden'
                  }`}
                >
                  {matches ? 'Q' : 'Quarta'}
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title="Quinta"
                  className={`xl:w-8 h-8 rounded w-full p-2 flex items-center justify-center ${
                    props.weekDays.includes('4')
                      ? 'bg-violet-500'
                      : 'xl:bg-zinc-500 xl:flex hidden'
                  }`}
                >
                  {matches ? 'Q' : 'Quinta'}
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title="Sexta"
                  className={`xl:w-8 h-8 rounded w-full p-2 flex items-center justify-center ${
                    props.weekDays.includes('5')
                      ? 'bg-violet-500'
                      : 'xl:bg-zinc-500 xl:flex hidden'
                  }`}
                >
                  {matches ? 'S' : 'Sexta'}
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title="Sábado"
                  className={`xl:w-8 h-8 rounded w-full p-2 flex items-center justify-center ${
                    props.weekDays.includes('6')
                      ? 'bg-violet-500'
                      : 'xl:bg-zinc-500 xl:flex hidden'
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
            className={` font-black xl:p-2 rounded text-center underline decoration-2 underline-offset-2 p-1 ${
              props.useVoiceChannel ? 'bg-emerald-500/80' : 'bg-rose-500/80'
            }`}
          >
            {props.useVoiceChannel ? 'Sim' : 'Não'}
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
            <div
              className=" bg-violet-600 rounded font-semibold p-2 xl:m-2 transition-colors 
                hover:bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] hover:text-shadow 
                m-[0.2rem]"
            >
              Chamar pra DUO
            </div>
          </Dialog.Trigger>
          <ConfirmationModal />
        </Dialog.Root>
      </div>
    </div>
  );
}
