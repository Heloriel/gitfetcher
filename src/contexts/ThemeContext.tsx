import { createContext, useState } from "react";

export interface IThemeContext {
  darkMode: boolean;
  setMode: Function;
}

interface IThemeContextProps {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeContextProvider({ children }: IThemeContextProps) {
  const [darkMode, setMode] = useState(true);
  const pack = { darkMode, setMode};

  return <ThemeContext.Provider value={pack}>{children}</ThemeContext.Provider>;
}
