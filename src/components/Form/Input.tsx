import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-zinc-900 py-3 px-3 rounded text-sm placeholder:text-zinc-500 mobile:truncate mobile:py-2 mobile:px-2 "
    />
  );
}
