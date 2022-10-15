import { createContext, useState } from "react";

export interface ISearchContext {
  search: string;
  setSearch: Function;
}

interface ISearchContextProps {
  children: React.ReactNode;
};

export const SearchContext = createContext({} as ISearchContext);

export function SearchContextProvider({ children }: ISearchContextProps) {
  const [search, setSearch] = useState('');
  const pack = { search, setSearch};

  return <SearchContext.Provider value={pack}>{children}</SearchContext.Provider>;
}
