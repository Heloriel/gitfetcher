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
  error: string | null;
}

export function Repositories({data, error}: IRepo) {
  return (
    <div className="flex flex-col flex-1">
      <h2 className="text-4xl font-bold pb-6">Repositories ({data ? data.length : 0})</h2>
      <hr className="border-zinc-700" />
      <ul className="flex flex-col gap-2 overflow-y-auto h-full max-h-full py-6 scrollbar-thin scrollbar-thumb-zinc-500">
        {(data && data.length > 0 )? data.map(
          (repo) => {
            return( 
            <Repository data={repo} key={repo.id} />
            )
          }
        ) : <div className="flex flex-1 items-center justify-center text-2xl">{error == null ? <CircleNotch size={32} className="animate-spin" /> : error}</div>}
      </ul>
    </div>
  )
}
