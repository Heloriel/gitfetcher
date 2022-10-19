import {UsersThree, Heart, Link} from 'phosphor-react';
import { useParams } from 'react-router-dom';

interface IProfileCardProps {
  data: {
    login: string;
    name: string;
    blog?: string;
    avatar_url: string;
    followers: number;
    following: number;
  } | undefined,
  repo: {
    language: string;
  }[] | undefined;
}

export function ProfileCard(props: IProfileCardProps) {
  const userName = useParams<{user: string;}>();

  // const mostUsed: string[] = [];

  // useEffect(() => {
  //   props.repo?.map((repo)=>{
  //     mostUsed.push(repo.language);
  //   });
  //   const counts = {};
  //   mostUsed.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });    
  // }, [props.repo])  

  return (
    <aside
      className="
        flex flex-col justify-center items-center border border-zinc-300
        dark:bg-zinc-800 dark:border-none rounded-lg p-8 gap-6 max-w-[350px] min-w-[350px]
      "
    >
      <img
        src={props.data ? props.data.avatar_url : '/images/default_user.jpg'}
        alt="User Profile Picture"
        className="rounded-full min-w-[256px] max-w-[256px] aspect-auto"  
      />
      <div className="text-center">
        <span className="block text-2xl font-bold">{props.data ? props.data.name : userName.user}</span>
        <span className="block text-zinc-500">{props.data ? props.data.login : 'User Not Found'}</span>
      </div>
      <div className="flex w-full">
        {props.data ?
        <span className={'flex flex-1 gap-2'}>
          <UsersThree size={22} /> {props.data.followers}
        </span>
        : ''
        }
        { props.data ?
        <span className={'flex flex-1 justify-end gap-2'}>
          <Heart size={22} /> {props.data.following}
        </span>
        : ''
        }
      </div>
      {props.data?.blog &&
        <a href={props.data.blog} className="flex items-center gap-2" target={'_blank'}>
          <Link size={16} /> {props.data.blog}
        </a>}
    </aside>
  )
}
