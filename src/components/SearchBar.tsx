import clsx from 'clsx';
import {MagnifyingGlass, Warning} from 'phosphor-react';
import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { Tooltip } from './Tooltip';

interface ISearchBarProps{
  invalid?: boolean;
  value?: string;
  className?: string;
}

export function SearchBar({invalid = false, value, className}: ISearchBarProps) {
  const userSearch = useContext(SearchContext);
  return (
    <div className={
      clsx(
        "flex items-center w-11/12 md:w-4/12 h-11 p-4 border rounded-full",
        {"border-zinc-300 dark:border-zinc-700 focus-within:border-sky-500 dark:focus-within:border-sky-500": !invalid},
        {"border-red-500": invalid},
        `${className}`,
      )}>
      <MagnifyingGlass size={20} color="#71717A" className='mr-2' />
      <input 
        type="text"
        name="search-query"
        id="search-query"
        className="bg-transparent placeholder:text-zinc-500 w-full outline-none"
        placeholder="GitHub User"
        onChange={e => userSearch.setSearch(e.target.value)}
        autoComplete={"off"}
        value={value}
      />
      {invalid && 
        <Tooltip>
          <Warning size={24} color="red" className='mr-2' />
        </Tooltip>
      }
    </div>
  )
}
