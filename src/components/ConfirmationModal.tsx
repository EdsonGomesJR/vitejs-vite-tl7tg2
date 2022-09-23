import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from './Form/Input';
import { Check, GameController, Handshake } from 'phosphor-react';
import { FormEvent, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SelectInput } from './SelectInput';
import { GamesContext } from '../contexts/GamesContext';
import { NavLink } from 'react-router-dom';

export function ConfirmationModal() {
  const { games, listGames } = useContext(GamesContext);

  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    listGames();
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    // console.log(data);
    // console.log(weekDays);
    // console.log(useVoiceChannel);

    if (!data.name) {
      return;
    }

    try {
      await axios.post(
        `https://3333-edsongomesj-servernlwes-1lh39sgpi82.ws-us67.gitpod.io/games/${data.game}/ads`,
        {
          name: data.name,
          yearsPlaying: Number(data.yearsPlaying),
          discord: data.discord,
          weekDays: weekDays.map(Number), //converte pra number
          useVoiceChannel: useVoiceChannel,
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
        }
      );
      alert('Anuncio criado com sucesso!');
    } catch (err) {
      alert('Erro ao criar o anúncio!');
      console.log(err);
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed ">
        <Dialog.DialogContent className="fixed bg-[#2a2634] py-10 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25 ">
          <Dialog.DialogTitle className="text-3xl text-center font-black">
            Convite feito!
          </Dialog.DialogTitle>

          <div className="mt-8 flex flex-col gap-4  ">
            <div className="flex flex-col gap-2 items-center mt-2">
              <span className="font-black text-center text-2xl bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent ">
                Agora é só aguardar o seu DUO
              </span>
            </div>
            <div className="flex flex-col gap-2 items-center ">
              <Handshake size={120} />
            </div>

            <footer className="mt-4 flex justify-center  gap-4">
              <NavLink to="/">
                <Dialog.Close
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600"
                  type="button"
                >
                  Ok
                </Dialog.Close>
              </NavLink>
            </footer>
          </div>
        </Dialog.DialogContent>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
