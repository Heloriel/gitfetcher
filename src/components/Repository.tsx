import {FolderOpen, ArrowSquareOut} from 'phosphor-react';

interface IRepo {
  data: {
    id: string;
    name: string;
    html_url: string;
    stargazers_count: number;
    watchers_count: number;
    updated_at: string;
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
        flex w-full items-center bg-zinc-100 dark:bg-zinc-700 rounded-lg hover:bg-zinc-200
        dark:hover:bg-zinc-600"
      >
      <a href={data.html_url} target={'_blank'} className="flex w-full px-4 py-2 gap-4 items-center">
      <div>
        <FolderOpen size={38} />
      </div>
      <div className='flex-1'>
        <div>
          <span className='text-xl font-bold'>{data.name}</span>
        </div>
        <div>
          <span className='text-xs text-zinc-500'>Last updated {lastUpdated()} days ago.</span>
        </div>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="ts" className='max-w-[32px]' />
      </div>
      </a>
    </li>
  )
}
