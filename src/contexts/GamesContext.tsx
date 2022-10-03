import axios from 'axios';
import { createContext, ReactNode, useState } from 'react';
import { api } from '../../services.api';
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

  async function listGames() {
    const response = await api.get('/games');
    setGames(response.data);

    console.log('ListGames : renderizei do context', response.data);
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
