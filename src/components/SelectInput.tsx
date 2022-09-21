import React from 'react';
import { styled } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';

interface SelectInputProps {
  games: Array<Games>;
}
interface Games {
  id: string;
  title: string;
}

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: violet.violet11,
  cursor: 'default',
};

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

// Exports

export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

export function SelectInput(props: SelectInputProps) {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.SelectTrigger
        className="select-trigger flex items-center bg-zinc-900 justify-between py-3 px-3 rounded text-sm  hover:font-semibold transition-all "
        aria-label="Games"
      >
        <SelectPrimitive.Value placeholder="Selecione o game que deseja jogar" />
        <SelectPrimitive.SelectIcon>
          <ChevronDownIcon height={20} width={20} />
        </SelectPrimitive.SelectIcon>
      </SelectPrimitive.SelectTrigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="bg-white overflow-hidden rounded">
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectPrimitive.Viewport className="p-[2px] bg-zinc-600 ">
            <SelectPrimitive.Group className="bg-zinc-900 ">
              <SelectPrimitive.Label className=" px-[25px] py-[0.5px] text-sm border-b  leading-[25px] text-zinc-500 border-zinc-100/20">
                Selecione o game que deseja jogar
              </SelectPrimitive.Label>
              {props.games.map((game) => {
                return (
                  <SelectPrimitive.Item
                    className="
                    select-item select-none rounded-sm text-md
                    text-zinc-300 flex items-center h-[25px] pr-[35px] pl-[25px]
                      relative "
                    key={game.id}
                    value={game.title}
                  >
                    <SelectPrimitive.ItemText className="">
                      {game.title}
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                      <CheckIcon />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                );
              })}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
