import clsx from "clsx";
import { useContext } from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import {Header} from "./components/Header";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import {ThemeContext} from './contexts/ThemeContext';

function App() {
  const context = useContext(ThemeContext);
  return (
    <main className={clsx({'dark': context.darkMode})}>
      <div className="flex flex-col h-screen bg-white dark:bg-zinc-900 dark:text-white">
        <Header />
        <div className="flex flex-col items-center justify-center flex-1 gap-6">
          <Logo width={372} height={78} dark={context.darkMode} />
          <SearchBar />
          <Button title="GO" />
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default App
