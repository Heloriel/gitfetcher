import { CircleNotch } from "phosphor-react";
import Repository from "./Repository";

interface IRepo {
  data: {
    id: string;
    name: string;
    html_url: string;
    stargazers_count: number;
    watchers_count: number;
    updated_at: string;
    language: string;
  }[] | undefined;
}

export function Repositories({data}: IRepo) {
  return (
    <div className="flex flex-col max-h-[484px] h-full flex-1 border border-zinc-300 dark:bg-zinc-800 dark:border-none rounded-lg px-4">
      <h2 className="text-4xl font-bold px-9 py-6">Repositories ({data ? data.length : 0})</h2>
      <hr className="border-zinc-700" />
      <ul className="flex flex-col gap-2 overflow-y-auto h-full max-h-full p-6 scrollbar-thin scrollbar-thumb-zinc-500">
        {(data && data.length > 0 )? data.map(
          (repo) => {
            return( 
            <Repository data={repo} key={repo.id} />
            )
          }
        ) : <div className="flex flex-1 items-center justify-center text-2xl"><CircleNotch size={32} className="animate-spin" /></div>}
      </ul>
    </div>
  )
}
