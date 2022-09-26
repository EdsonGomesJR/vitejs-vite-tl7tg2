import axios from 'axios';
import { createContext, ReactNode, useState } from 'react';
import { BASE_URL } from '../utils/baseUrl';

interface Game {
  id: string;
  bannerUrl: string;
  title: string;
  _count: {
    ads: number;
  };
}
interface GamesContextType {
  listGames: () => void;
  games: Game[];
}

interface GamesContextProviderProps {
  children: ReactNode;
}

export const GamesContext = createContext({} as GamesContextType);

export function GamesContextProvider({ children }: GamesContextProviderProps) {
  const [games, setGames] = useState<Game[]>([]);

  function listGames() {
    axios(`${BASE_URL}/games`).then((response) => {
      setGames(response.data);
    });

    console.log('ListGames : renderizei do context', games);
  }

  return (
    <GamesContext.Provider
      value={{
        listGames,
        games,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
}
