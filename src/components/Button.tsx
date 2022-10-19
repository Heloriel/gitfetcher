import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export function Button({title, className, ...rest}: IButtonProps) {
  return (
    <button
      className={`
        border border-sky-500 rounded-full min-w-[9rem] h-11 hover:bg-sky-500 hover:border-sky-500 font-bold
        transition-colors ${className}
      `}      
      {...rest}
    >
      {title}  
    </button>
  )
}
