import { Coffee } from "phosphor-react";
import { MDLogo } from "./MDLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full px-8 border-t border-zinc-300 dark:border-zinc-600">
      <div className="flex flex-col md:flex-row w-full py-8">
        <span className="flex flex-1 justify-center md:justify-start mb-6 md:mb-0">
          <MDLogo className="fill-sky-500" />
        </span>
        <span className="flex flex-1 justify-center md:justify-end text-black dark:text-white">
          {currentYear} - Feito com <Coffee className="mx-2" size={24} /> por mim.
        </span>
      </div>
    </footer>
  );
}
