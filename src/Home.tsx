import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

import { useEffect, useContext } from 'react';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import { GamesContext } from './contexts/GamesContext';
import { toast, ToastContainer } from 'react-toastify';

export function Home() {
  const { games, listGames, modalOpen, handleModal } = useContext(GamesContext);

  useEffect(() => {
    listGames();
  }, []);

  return (
    <div
      className="xl:max-w-[84rem] mx-auto flex flex-col items-center p-2 xl:p-8 xl:my-20   my-4 
     w-full "
    >
      <img src={logoImg} alt="" />
      <h1
        className="text-5xl text-white  xl:text-6xl font-black mt-5 
     text-center "
      >
        Seu{' '}
        <span className=" bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>
      <div
        className="grid mt-10 grid-cols-2 gap-4 xl:gap-8
        xl:grid-cols-6 
        md:grid-cols-3
      "
      >
        {games.map((game) => {
          return (
            <div key={game.id}>
              <GameBanner
                id={game.id}
                title={game.title}
                bannerUrl={game.bannerUrl}
                adsCount={game._count.ads}
              />
            </div>
          );
        })}
      </div>

      <Dialog.Root open={modalOpen} onOpenChange={handleModal}>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}
