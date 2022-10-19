import Logo from "./Logo";
import {Sun, Moon} from 'phosphor-react';
import Switch from "./Switch";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const context = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <header className="
      flex w-full justify-between items-center h-16 border-b border-zinc-300 dark:border-zinc-700
      px-2 md:px-4"
    >      
        <div className="flex-1">
          <a role={'button'} onClick={() => navigate('/')}>
            <Logo dark={context.darkMode} className="aspect-auto w-36 md:w-52"/>
          </a>
        </div>
        <div className="flex-1 flex items-center justify-end gap-x-2">
          <Sun size={28} color={context.darkMode ? '#fff' : '#0EA5E9'} />
            <Switch />
          <Moon size={28} color={context.darkMode ? '#0EA5E9' : '#000'} />
        </div>
    </header>
  )
}