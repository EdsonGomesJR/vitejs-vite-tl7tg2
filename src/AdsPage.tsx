import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GamesContext } from './contexts/GamesContext';
import { Warning } from 'phosphor-react';
import { Loading } from './components/Loading';
import { BASE_URL } from './utils/baseUrl';
import { ClickFlipCard } from './components/Card/ClickFlipCard';
import { api } from '../services.api';

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
export function AdsPage() {
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

    loadAds();

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [loading]);

  async function loadAds() {
    const response = await api.get(`/games/${id}/ads`);
    setAds(response.data);
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=" p-2 text-white flex flex-col items-center justify-center">
          {games.map((game) => {
            if (id === game.id) {
              return (
                <div key={game.id}>
                  <p className="text-center text-3xl text-white xl:m-10 m-4 xl:mb-0 mb-7">
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
            <div
              className="p-2 flex xl:flex-row items-center xl:gap-8 
            flex-col  "
            >
              {ads.map((ad) => {
                return (
                  <div
                    key={ad.id}
                    className="flex items-center justify-center  "
                  >
                    <ClickFlipCard
                      id={ad.id}
                      hourEnd={ad.hourEnd}
                      hourStart={ad.hourStart}
                      name={ad.name}
                      useVoiceChannel={ad.useVoiceChannel}
                      weekDays={ad.weekDays}
                      yearsPlaying={ad.yearsPlaying}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className={`${
                hasAds
                  ? 'none'
                  : 'flex items-center text-center justify-center flex-col xl:mt-[10rem]'
              } `}
            >
              <h1 className="font-black text-3xl xl:text-4xl text-white m-10">
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