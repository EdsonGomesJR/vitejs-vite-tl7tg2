import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GamesContext } from './contexts/GamesContext';
import { Warning } from 'phosphor-react';
import { Loading } from './components/Loading';
import { BASE_URL } from './utils/baseUrl';
import { ClickFlipCard } from './components/ClickFlipCard';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listGames();
    games.map((game) => {
      if (id === game.id && game._count.ads >= 1) {
        setHasAds(true);
        setLoading(false);
      }
    });
    axios(`${BASE_URL}/games/${id}/ads`).then((response) => {
      setAds(response.data);
    });

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-2 text-white">
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
          {hasAds && !loading ? (
            <div className="p-2 flex mobile:flex-col mobile:gap-2 mobile:items-center gap-8">
              {ads.map((ad) => {
                return (
                  <div key={ad.id}>
                    <ClickFlipCard
                      id={ad.id}
                      hourEnd={ad.hourEnd}
                      hourStart={ad.hourStart}
                      name={ad.name}
                      useVoiceChannel={ad.useVoiceChannel}
                      weekDays={ad.weekDays}
                      yearsPlaying={ad.yearsPlaying}
                    />
                    {/* <div
                    key={ad.id}
                    className={`p-1 rounded bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] `}
                  >
                    <div className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 rounded p-4">
                      <div className="flex flex-col text-white gap-2">
                        <span className="font-pmarker text-xl  bg-violet-700 font-black rounded p-2 text-center">
                          {ad.name}
                        </span>
                        <div className="flex justify-between font-bold">
                          <span> Há quanto tempo joga:</span>
                          <span>
                            {ad.yearsPlaying}
                            {ad.yearsPlaying <= 1 ? ' ano' : ' anos'}
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-2 font-semibold">
                          Dias da Semana{' '}
                          
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
                  </div> */}
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className={`${
                hasAds
                  ? 'none'
                  : 'flex items-center  justify-center flex-col mt-[10rem]'
              } `}
            >
              <h1 className="font-black text-4xl text-white m-10">
                Ainda não recebemos anúncios para esse game...
              </h1>
              <div className="flex items-center justify-center p-2  opacity-80 rounded-full bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]">
                <div className=" pb-2  rounded-full bg-black  ">
                  <Warning size={250} className="pb-5 text-yellow-600" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
