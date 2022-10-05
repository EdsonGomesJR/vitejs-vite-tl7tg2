import { createContext, ReactNode, useState } from 'react';
import { api } from '../../services.api';

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
  modalOpen: boolean;
  handleModal: (state: boolean) => void;
}

interface GamesContextProviderProps {
  children: ReactNode;
}

export const GamesContext = createContext({} as GamesContextType);

export function GamesContextProvider({ children }: GamesContextProviderProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function listGames() {
    const response = await api.get('/games');
    setGames(response.data);

    console.log('ListGames : renderizei do context', response.data);
  }

  function handleModal(state: boolean) {
    setModalOpen(state);
  }

  return (
    <GamesContext.Provider
      value={{
        listGames,
        games,
        modalOpen,
        handleModal,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
}
