import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from './Form/Input';
import { Check, GameController } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { SelectInput } from './SelectInput';
import { styled } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';

const StyledTrigger = styled(Select.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  color: violet.violet11,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: mauve.mauve3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
  // '&[data-placeholder]': { color: violet.violet9 },
});

const StyledIcon = styled(Select.SelectIcon, {
  color: violet.violet11,
});

const StyledContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const StyledViewport = styled(Select.Viewport, {
  padding: 5,
});

function Content({ children, ...props }) {
  return (
    <Select.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </Select.Portal>
  );
}

const StyledItem = styled(Select.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
});

const StyledLabel = styled(Select.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
});

const StyledSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: violet.violet11,
  cursor: 'default',
};

const StyledScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles
);

// Exports
export const Xelect = Select.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = Select.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = Select.Group;
export const SelectItem = StyledItem;
export const SelectItemText = Select.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

interface Game {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    axios(
      'https://3333-edsongomesj-servernlwes-1lh39sgpi82.ws-us65.gitpod.io/games'
    ).then((response) => {
      setGames(response.data);
    });
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    // console.log(data);
    // console.log(weekDays);
    // console.log(useVoiceChannel);

    if (!data.name) {
      return;
    }

    try {
      await axios.post(
        `https://3333-edsongomesj-servernlwes-1lh39sgpi82.ws-us65.gitpod.io/games/${data.game}/ads`,
        {
          name: data.name,
          yearsPlaying: Number(data.yearsPlaying),
          discord: data.discord,
          weekDays: weekDays.map(Number), //converte pra number
          useVoiceChannel: useVoiceChannel,
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
        }
      );
      alert('Anuncio criado com sucesso!');
    } catch (err) {
      alert('Erro ao criar o anúncio!');
      console.log(err);
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.DialogContent className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.DialogTitle className="text-3xl font-black">
            Publique um anúncio
          </Dialog.DialogTitle>

          <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                Qual o Game?
              </label>
              <SelectInput games={games} />
              {/* <Xelect>
                <SelectTrigger className="test" aria-label="Games">
                  <SelectValue placeholder="Selecione o game que deseja jogar" />
                  <SelectIcon>
                    <ChevronDownIcon />
                  </SelectIcon>
                </SelectTrigger>
                <SelectContent>
                  <SelectScrollUpButton>
                    <ChevronUpIcon />
                  </SelectScrollUpButton>
                  <SelectViewport>
                    <SelectGroup>
                      <SelectLabel>
                        Selecione o game que deseja jogar
                      </SelectLabel>
                      {games.map((game) => {
                        return (
                          <SelectItem key={game.id} value={game.title}>
                            <SelectItemText>{game.title}</SelectItemText>
                            <SelectItemIndicator>
                              <CheckIcon />
                            </SelectItemIndicator>
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectViewport>
                  <SelectScrollDownButton>
                    <ChevronDownIcon />
                  </SelectScrollDownButton>
                </SelectContent>
              </Xelect> */}

              {/* <select
                id="game"
                name="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
                defaultValue=""
              >
                <option disabled value="">
                  Selecione o game que deseja jogar
                </option>
                {games.map((game) => {
                  return (
                    <option key={game.id} value={game.id}>
                      {game.title}
                    </option>
                  );
                })}
              </select> */}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input
                id="name"
                name="name"
                placeholder="Como te chamam dentro do game?"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input
                  id="yearsPlaying"
                  name="yearsPlaying"
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual seu Discord?</label>
                <Input
                  id="discord"
                  name="discord"
                  type="text"
                  placeholder="Usuario#0000 "
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>

                <ToggleGroup.Root
                  type="multiple"
                  className="grid grid-cols-4 gap-2"
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <ToggleGroup.Item
                    value="0"
                    title="Domingo"
                    className={`w-8 h-8 rounded  ${
                      weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="1"
                    title="Segunda"
                    className={`w-8 h-8 rounded  ${
                      weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="2"
                    title="Terça"
                    className={`w-8 h-8 rounded  ${
                      weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="3"
                    title="Quarta"
                    className={`w-8 h-8 rounded  ${
                      weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="4"
                    title="Quinta"
                    className={`w-8 h-8 rounded  ${
                      weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="5"
                    title="Sexta"
                    className={`w-8 h-8 rounded  ${
                      weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value="6"
                    title="Sábado"
                    className={`w-8 h-8 rounded  ${
                      weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                    }`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="hourStart"
                    name="hourStart"
                    type="time"
                    placeholder="De"
                  />
                  <Input
                    id="hourEnd"
                    name="hourEnd"
                    type="time"
                    placeholder="Até"
                  />
                </div>
              </div>
            </div>

            <label className="mt-2 flex items-center gap-2 text-sm">
              <Checkbox.Root
                checked={useVoiceChannel}
                onCheckedChange={(checked) => {
                  if (checked === true) {
                    setUseVoiceChannel(true);
                  } else {
                    setUseVoiceChannel(false);
                  }
                }}
                className="w-6 h-6 p-1 rounded bg-zinc-900"
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </label>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                type="button"
              >
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="flex gap-3  items-center bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600 "
              >
                <GameController className="w-6 h-6" />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.DialogContent>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
