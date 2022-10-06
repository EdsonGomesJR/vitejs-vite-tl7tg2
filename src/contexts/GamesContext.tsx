import { createContext, ReactNode, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  gameTitle: string;
  handleGameInfo: (paramsId: string | undefined) => void;
  gameId: string;
  gameBannerUrl: string;
  gameCountAds: number;
}

interface GamesContextProviderProps {
  children: ReactNode;
}

export const GamesContext = createContext({} as GamesContextType);

export function GamesContextProvider({ children }: GamesContextProviderProps) {
  const { id } = useParams();
  const [gameTitle, setGameTitle] = useState('');
  const [gameId, setGameId] = useState('');
  const [gameBannerUrl, setGameBannerUrl] = useState('');
  const [gameCountAds, setGameCountAds] = useState(0);
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

  function handleGameInfo(paramsId: string | undefined) {
    games.map((game) => {
      if (paramsId == game.id) {
        setGameTitle(game.title);
        setGameId(game.id);
        setGameBannerUrl(game.bannerUrl);
        setGameCountAds(game._count.ads);
      }
    });
    console.log('função handleGame', gameTitle);
  }
  return (
    <GamesContext.Provider
      value={{
        listGames,
        games,
        modalOpen,
        handleModal,
        gameTitle,
        handleGameInfo,
        gameBannerUrl,
        gameCountAds,
        gameId,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
}
