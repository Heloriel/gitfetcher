import Repository from "./Repository";

interface IRepo {
  data: {
    name: string;
    html_url: string;
    stargazers_count: number;
    watchers_count: number;
    updated_at: string;
  }[] | undefined;
}

export function Repositories({data}: IRepo) {
  return (
    <div className="flex flex-col flex-1 border border-zinc-300 dark:bg-zinc-800 dark:border-none rounded-lg px-4">
      <h2 className="text-4xl font-bold px-9 py-6">Repositories ({data ? data.length : 0})</h2>
      <hr className="border-zinc-700 mb-6" />
      <ul className="flex flex-col gap-2 overflow-auto max-h-[50vh]">
        {data ? data.map(
          (repo) => {
            return( 
            <Repository data={repo} />
            )
          }
        ) : <div className="flex flex-1 items-center justify-center text-2xl">No Repositories Found!</div>}
      </ul>
    </div>
  )
}
