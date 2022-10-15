import {UsersThree, Heart, Link} from 'phosphor-react';

interface IProfileCardProps {
  data: {
    login: string;
    name: string;
    blog?: string;
    avatar_url: string;
    followers: number;
    following: number;
  }
}

export function ProfileCard(props: IProfileCardProps) {
  return (
    <aside
      className="
        flex flex-col justify-center items-center border border-zinc-300
        dark:bg-zinc-800 dark:border-none rounded-lg px-12
        py-6 gap-6
      "
    >
      <img
        src={props.data.avatar_url}
        alt="Profile picture of"
        className="rounded-full w-64 h-64"  
      />
      <div className="text-center">
        <span className="block text-3xl font-bold">{props.data.name}</span>
        <span className="block text-zinc-500">{props.data.login}</span>
      </div>
      <div className="flex w-full">
        <span className='flex flex-1 gap-2'>
          <UsersThree size={22} /> {props.data.followers}
        </span>
        <span className='flex flex-1 gap-2 justify-end'>
          <Heart size={22} /> {props.data.following}
        </span>
      </div>
      {props.data.blog &&
        <a href={props.data.blog} className="flex items-center gap-2" target={'_blank'}>
          <Link size={16} /> {props.data.blog}
        </a>}
    </aside>
  )
}
