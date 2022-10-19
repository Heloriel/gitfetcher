import clsx from "clsx";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Footer";
import { Header } from "./Header";

interface ILayoutProps{
  children: React.ReactNode;
}

export default function Layout({children}: ILayoutProps) {
  const context = useContext(ThemeContext);
  return (
    <main className={clsx({'dark': context.darkMode})}>
      <div className="flex flex-col min-h-screen justify-between bg-white dark:bg-zinc-900 dark:text-white">
      <Header />
        <div className="flex flex-col flex-1 items-center justify-center px-1 md:px-16 gap-4">
          {children}
        </div>
      <Footer />
      </div>
    </main>
  )
}
