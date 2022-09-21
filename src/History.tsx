import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { isNullishCoalesce } from 'typescript';
import { GamesContext } from './contexts/GamesContext';

interface Ads {
  id: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string[]; //converte pra number
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
      `https://3333-edsongomesj-servernlwes-1lh39sgpi82.ws-us67.gitpod.io/games/${id}/ads`
    ).then((response) => {
      setAds(response.data);
    });
  }, []);

  return (
    <div className="flex justify-center   items-center h-[100vh] w-full">
      {games.map((game) => {
        if (id === game.id)
          return (
            <div key={game.id}>
              <h1 className="text-green-500"> {gameTitle} </h1>
              <span className="text-yellow-500"> {game.id}</span>
            </div>
          );
      })}
      <div className="flex  p-1 rounded bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] ">
        <div className="bg-zinc-900 p-4">
          <h1 className="text-white"> {id}</h1>
          {ads.map((ad) => {
            return (
              <div className="flex w-full text-white gap-2" key={ad.id}>
                <span>{ad.name} </span>
                <span className="block">{ad.id} </span>
                <span>{ad.name} </span>
                <span>{ad.yearsPlaying} anos</span>
                <span>{ad.discord} </span>
                <span>'Week Days '{ad.weekDays} </span>
                <span>{ad.useVoiceChannel} </span>
                <span>{ad.hourStart} </span>
                <span>{ad.hourEnd} </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
