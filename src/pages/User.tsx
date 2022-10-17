import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/Button';
import { SearchContext } from "../contexts/SearchContext";
import { ProfileCard } from "../components/ProfileCard";
import { Repositories } from "../components/Repositories";

interface IUser {
  login: string;
  name: string;
  blog?: string;
  avatar_url: string;
  followers: number;
  following: number;
  repos_url: string;
}

interface IRepo {
  id: string;
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  updated_at: string;
}

export default function User() {
  const params = useParams<{user: string}>();
  const [userData, setUserData] = useState({} as IUser);
  const [repo, setRepo] = useState<IRepo[]>();
  const [invalidSearch, setInvalidSearch] = useState(false);
  const navigate = useNavigate();

  const userSearch = useContext(SearchContext);

  const routeChange = (userName: string) => {
    if(userName === ""){
      setInvalidSearch(true);
      return;
    }
    navigate(`/user/${userName}`);      
  }

   useEffect(() => {
    if(userSearch.search === "" && invalidSearch == true){
      setInvalidSearch(true)
    }else{
      setInvalidSearch(false)
    }
  }, [userSearch.search])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${params.user}`)
    .then((response) => { setUserData(response.data) })
    .catch( response => {console.log(response)});
    axios.get(`https://api.github.com/users/${params.user}/repos`)
    .then( (repo) => {
      setRepo(repo.data);
      console.log(repo.data);
      }      
    );
  }, [params.user])
  
  return (
    <Layout>
      <form
        className="flex w-full justify-center gap-4 my-10"
        onSubmit={(e) => {
          e.preventDefault()
          routeChange(userSearch.search)
        }
      }  
      >
        <SearchBar invalid={invalidSearch} value={userSearch.search} />
        <Button title="GO" />
      </form>
      <div className="flex w-full h-full items-start justify-center gap-6">
        <ProfileCard data={userData} />
        <Repositories data={repo} />
      </div>
    </Layout>
  )
}
