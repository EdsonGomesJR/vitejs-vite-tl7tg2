import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Dialog from '@radix-ui/react-dialog';

import { GamesContext } from './contexts/GamesContext';
import { ToastButton } from './components/ToastButton';
import { CreateAdModal } from './components/CreateAdModal';
import { ConfirmationModal } from './components/ConfirmationModal';
import { Warning } from 'phosphor-react';

interface Ads {
  id: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  hourStart: string;
  hourEnd: string;
}
export function History() {
  const { id } = useParams();
  const [ads, setAds] = useState<Ads[]>([]);
  const [hasAds, setHasAds] = useState(false);
  const { games, listGames } = useContext(GamesContext);

  console.log('os game', games);
  useEffect(() => {
    listGames();
    axios(
      `https://3333-edsongomesj-servernlwes-1lh39sgpi82.ws-us67.gitpod.io/games/${id}/ads`
    ).then((response) => {
      setAds(response.data);
    });
    games.map((game) => {
      if (id === game.id && game._count.ads >= 1) {
        setHasAds(true);
      }
    });
  }, []);

  return (
    <div className="p-2 text-white">
      {hasAds ? (
        <>
          {games.map((game) => {
            if (id === game.id) {
              return (
                <div key={game.id}>
                  <p className="text-center text-3xl text-white m-10">
                    Estes são os anúncios para:{' '}
                  </p>
                  <h1 className="text-6xl text-center text-white font-black">
                    {' '}
                    {game.title}{' '}
                  </h1>
                </div>
              );
            }
          })}
          <div className="p-2 flex  gap-8">
            {ads.map((ad) => {
              return (
                <div className="p-1 rounded bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] ">
                  <div className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 rounded p-4">
                    <div className="flex flex-col text-white gap-2" key={ad.id}>
                      <span className="bg-violet-700 font-black rounded p-2 text-center">
                        {ad.name}
                      </span>
                      <div className="flex justify-between font-bold">
                        <span> Há quanto tempo joga:</span>
                        <span>
                          {ad.yearsPlaying}
                          {ad.yearsPlaying <= 1 ? ' ano' : ' anos'}
                        </span>
                      </div>

                      <span>{ad.discord} </span>
                      <div className="flex flex-col items-center gap-2 font-semibold">
                        Dias da Semana{' '}
                        <div className=" flex items-center">
                          <ToggleGroup.Root
                            type="multiple"
                            className="flex gap-2"
                            value={ad.weekDays}
                          >
                            <ToggleGroup.Item
                              value="0"
                              title="Domingo"
                              className={`w-8 h-8 rounded  ${
                                ad.weekDays.includes('0')
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
                                ad.weekDays.includes('1')
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
                                ad.weekDays.includes('2')
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
                                ad.weekDays.includes('3')
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
                                ad.weekDays.includes('4')
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
                                ad.weekDays.includes('5')
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
                                ad.weekDays.includes('6')
                                  ? 'bg-violet-500'
                                  : 'bg-zinc-500'
                              }`}
                            >
                              S
                            </ToggleGroup.Item>
                          </ToggleGroup.Root>
                        </div>
                      </div>
                      <div className=" flex items-center justify-between font-semibold ">
                        <span> Usa o discord? </span>
                        <span
                          className={
                            ad.useVoiceChannel
                              ? `bg-emerald-500/80 font-black p-2 rounded text-center underline decoration-2 underline-offset-2`
                              : `bg-rose-500/80`
                          }
                        >
                          {ad.useVoiceChannel ? 'Sim' : 'Não'}
                        </span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span> Começa a jogar às </span>
                        <span>{ad.hourStart}h</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span> Parando às </span>
                        <span>{ad.hourEnd}h</span>
                      </div>
                      <Dialog.Root>
                        <Dialog.Trigger>
                          <button className=" bg-violet-600 rounded font-semibold p-2 m-2 transition-colors hover:bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] hover:text-shadow">
                            Chamar pra DUO
                          </button>
                        </Dialog.Trigger>
                        <ConfirmationModal />
                      </Dialog.Root>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-black text-4xl text-white m-10">
            Ainda não recebemos anúncios para esse game...
          </h1>
          <div className="flex items-center justify-center border-2 w-[480px] h-[480px] rounded-xl">
            <div className=" pb-2 border-2 rounded-full ">
              <Warning size={250} className="pb-5 " />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
