import {FolderOpen, ArrowSquareOut} from 'phosphor-react';

interface IRepo {
  data: {
    name: string;
    html_url: string;
    stargazers_count: number;
    watchers_count: number;
    updated_at: string;
  }
}

export default function Repository({data}: IRepo) {
  return (
    <li className="flex w-full items-center bg-zinc-200 dark:bg-zinc-700 rounded-lg px-4 py-2 gap-4">
      <div>
        <FolderOpen size={38} />
      </div>
      <div className='flex-1'>
        <div>
          <span className='text-xl font-bold'>{data.name}</span>
        </div>
        <div>
          <span className='text-xs text-zinc-500'>{data.updated_at}</span>
        </div>
      </div>
      <div><ArrowSquareOut size={32} /></div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="ts" className='max-w-[32px]' />
      </div>
    </li>
  )
}
