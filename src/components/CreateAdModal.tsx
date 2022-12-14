import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from './Form/Input';
import { Check, GameController } from 'phosphor-react';
import { FormEvent, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SelectInput } from './SelectInput';
import { GamesContext } from '../contexts/GamesContext';
import { BASE_URL } from '../utils/baseUrl';
import { Select } from './Select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../services.api';
import * as SelectPrimitive from '@radix-ui/react-select';
import { useNavigate } from 'react-router-dom';

export type GameBannerResponse = {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
};

export type Game = {
  id: string;
  title: string;
  bannerUrl: string;
};

export interface Ad {
  game: string;
  discord: string;
  hourStart: string;
  hourEnd: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function CreateAdModal() {
  const navigate = useNavigate();

  const { games, listGames, handleModal } = useContext(GamesContext);
  const [newAdCreated, setNewAdCreated] = useState(false);

  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    listGames();
  }, [newAdCreated]);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    console.log('data ->', data.game);
    console.log(weekDays);
    console.log(useVoiceChannel);
    // window.location.reload();

    if (!data.name) {
      return;
    }

    try {
      await toast.promise(
        api.post(`/games/${data.game}/ads`, {
          name: data.name,
          yearsPlaying: Number(data.yearsPlaying),
          discord: data.discord,
          weekDays: weekDays.map(Number), //converte pra number
          useVoiceChannel: useVoiceChannel,
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
        }),
        {
          pending: 'Envindo solicita????o',
          success: 'An??ncio criado com sucesso!',
          error: 'Erro ao criar o an??ncio!',
        }
      );
      setTimeout(() => handleModal(false), 3000);
      setNewAdCreated(true);
    } catch (err) {
      alert('Erro ao criar o an??ncio!');
      console.log(err);
    }
  }

  return (
    <Dialog.Portal className="">
      <ToastContainer autoClose={3000} />

      <Dialog.Overlay className="bg-black/60 inset-0 fixed  ">
        <Dialog.DialogContent
          className="fixed bg-[#2a2634] py-4 px-8  
          text-white 
          top-1/2 left-1/2 
          -translate-x-1/2 
          -translate-y-1/2 
          rounded-lg 
          w-[18rem]
          shadow-lg 
          xl:w-[30rem]
          shadow-black/25
        "
        >
          <Dialog.DialogTitle className="xl:text-3xl font-black text-xl text-center">
            Publique um an??ncio
          </Dialog.DialogTitle>

          <form
            onSubmit={handleCreateAd}
            className="xl:mt-8 flex flex-col xl:gap-4 text-sm gap-1 mt-4 "
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                Qual o Game?
              </label>
              <SelectInput games={games} />
              {/* <select
                id="game"
                name="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                defaultValue=""
              >
                <option disabled value="">
                  Selecione o game que deseja jogar
                </option>
                {games.map((game) => {
                  return (
                    <option key={game.id} value={game.id}>
                      {game.title}
                    </option>
                  );
                })}
              </select> */}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input
                id="name"
                name="name"
                placeholder="Como te chamam dentro do game?"
              />
            </div>

            <div className="xl:grid xl:grid-cols-2 xl:gap-6 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga h?? quantos anos?</label>
                <Input
                  id="yearsPlaying"
                  name="yearsPlaying"
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual seu Discord?</label>
                <Input
                  id="discord"
                  name="discord"
                  type="text"
                  placeholder="Usuario#0000 "
                />
              </div>
            </div>
            <div className="flex xl:gap-6 gap-2 flex-col ">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="weekDays">Quando costuma jogar?</label>

                <ToggleGroup.Root
                  type="multiple"
                  className="xl:grid xl:grid-cols-4 xl:gap-2  flex items-center gap-1"
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item
                    value="0"
                    title="Domingo"
                    className={`w-full h-8 rounded  ${
                      weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="1"
                    title="Segunda"
                    className={`w-full h-8 rounded    ${
                      weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="2"
                    title="Ter??a"
                    className={`w-full h-8 rounded    ${
                      weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="3"
                    title="Quarta"
                    className={`w-full h-8 rounded    ${
                      weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="4"
                    title="Quinta"
                    className={`w-full h-8 rounded     ${
                      weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="5"
                    title="Sexta"
                    className={`w-full h-8 rounded    ${
                      weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="6"
                    title="S??bado"
                    className={`w-full h-8 rounded    ${
                      weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Qual hor??rio do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="hourStart"
                    name="hourStart"
                    type="time"
                    placeholder="De"
                  />
                  <Input
                    id="hourEnd"
                    name="hourEnd"
                    type="time"
                    placeholder="At??"
                  />
                </div>
              </div>
            </div>

            <label className="mt-2 flex items-center gap-2 text-sm">
              <Checkbox.Root
                checked={useVoiceChannel}
                onCheckedChange={(checked) => {
                  if (checked === true) {
                    setUseVoiceChannel(true);
                  } else {
                    setUseVoiceChannel(false);
                  }
                }}
                className="w-6 h-6 p-1 rounded bg-zinc-900"
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </label>

            <footer className="mt-4 flex xl:justify-end xl:gap-4 justify-center gap-3 ">
              <Dialog.Close
                className="bg-zinc-500 xl:px-5 xl:h-12 rounded-md font-semibold hover:bg-zinc-600
                px-4 h-10 "
                type="button"
              >
                Cancelar
              </Dialog.Close>
              {}
              <button
                type="submit"
                className="flex xl:gap-3  items-center bg-violet-500 xl:px-5 xl:h-12 rounded-md font-semibold hover:bg-violet-600 
                gap-2 px-4 h-10  "
              >
                <GameController className="w-6 h-6" />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.DialogContent>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
