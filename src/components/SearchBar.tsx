import {MagnifyingGlass} from 'phosphor-react';

export default function SearchBar() {
  return (
    <div className="flex items-center w-4/12 h-11 p-4 border border-zinc-300 dark:border-zinc-700 rounded-full focus-within:border-sky-500">
      <MagnifyingGlass size={20} color="#71717A" className='mr-2' />
      <input 
        type="text"
        name="search-query"
        id="search-query"
        className="bg-transparent placeholder:text-zinc-500 w-full outline-none"
        placeholder="GitHub User"
      />
    </div>
  )
}
