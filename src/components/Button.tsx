import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({title, ...rest}: IButtonProps) {
  return (
    <button
      className={'border border-sky-500 dark:border-zinc-700 rounded-full w-36 h-11 hover:bg-sky-500 hover:border-sky-500 font-bold transition-colors'}
      {...rest}
    >
      {title}  
    </button>
  )
}
