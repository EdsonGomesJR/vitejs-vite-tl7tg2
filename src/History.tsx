import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { GamesContext } from './contexts/GamesContext';

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
  const [gameTitle, setGameTitle] = useState('');
  const [ads, setAds] = useState<Ads[]>([]);
  const { games, listGames } = useContext(GamesContext);

  console.log('os game', games);
  useEffect(() => {
    listGames();
    axios(
      `https://3333-edsongomesj-servernlwes-1lh39sgpi82.ws-us65.gitpod.io/games/${id}/ads`
    ).then((response) => {
      setAds(response.data);
    });
  }, []);

  return (
    <div className="p-2">
      {games.map((game) => {
        if (id === game.id)
          return (
            <div key={game.id}>
              <h1 className="text-6xl text-center text-white font-black mt-20">
                {' '}
                {game.title}{' '}
              </h1>
            </div>
          );
      })}
      <div className="p-2 flex  gap-8">
        {ads.map((ad) => {
          return (
            <div className="p-1 rounded bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] ">
              <div className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 rounded p-4">
                <div className="flex flex-col text-white gap-2" key={ad.id}>
                  <span className="bg-purple-700 font-black rounded p-2 text-center">
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
                  <div className="flex justify-between font-semibold">
                    <span> Usa o discord? </span>
                    <span className="underline decoration-2 underline-offset-2">
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
                </div>
              </div>
            </div>
          );
        })}

        <div> </div>
      </div>
    </div>
  );
}
