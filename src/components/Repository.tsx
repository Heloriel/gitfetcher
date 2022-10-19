import {FolderOpen, GitFork, Star} from 'phosphor-react';

interface IRepo {
  data: {
    id: string;
    name: string;
    html_url: string;
    stargazers_count: number;
    forks: number;
    updated_at: string;
    language: string;
  }
}

export default function Repository({data}: IRepo) {

  function lastUpdated(){
    // return new Date(data.updated_at).toISOString().substr(11, 8);
    const date1 = new Date(data.updated_at);
    const date2 = new Date(Date.now());

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  } 

  return (
    <li
      className="
        flex w-full items-center  rounded-md border border-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800
        hover:bg-zinc-100 transition-colors"
      >
      <a href={data.html_url} target={'_blank'} className="flex w-full px-4 py-2 gap-2 items-center">
      <div className='hidden sm:block'>
        <FolderOpen size={38} />
      </div>
      <div className='flex-1'>
        <div>
          <span className='text-sm sm:text-xl font-bold'>{data.name}</span>
        </div>
        <div>
          <span className='text-xs text-zinc-500'>Last updated {lastUpdated()} days ago.</span>
        </div>
      </div>
      <div className='flex gap-2'>
        <span>{data.forks}</span>
        <GitFork size={22} />
      </div>
      <div className='flex gap-2'>
        <span>{data.stargazers_count}</span>
        <Star size={22} />
      </div>
      {data.language &&
        <div className='hidden sm:block'>
          <img
            src={`https://xesque.rocketseat.dev/platform/tech/${data.language}.svg`.toLocaleLowerCase()}
            onError={(event) => event.currentTarget.style.display = 'none'}
            className='max-w-[32px]'
            title={data.language}
          />
        </div>
      }
      </a>
    </li>
  )
}
