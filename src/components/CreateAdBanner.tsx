import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <>
      <div className="pt-1  self-stretch bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] mt-8  rounded-t-lg overflow-hidden "></div>

      <div className="flex justify-between items-center bg-[#2A2634] px-8 py-6 rounded-b-lg self-stretch ">
        <div>
          <strong className="block text-white text-2xl font-black">
            {' '}
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger className=" flex items-center gap-3 py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </>
  );
}
