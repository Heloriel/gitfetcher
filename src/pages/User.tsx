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
  language: string;
}

interface IError{
  data:{
    message: string;
  }
}

export default function User() {
  const params = useParams<{user: string}>();
  const [userData, setUserData] = useState({} as IUser);
  const [repo, setRepo] = useState<IRepo[]>();
  const [errorMessage, setErrorMessage] = useState<string | null>("");
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
    axios.get(`https://api.github.com/users/${params.user}`,{
      headers: {
        Authorization: `${import.meta.env.VITE_API_TOKEN}:x-oauth-basic`,
      }
    }).then(
      (response) => {
      setUserData(response.data)
      axios.get(`https://api.github.com/users/${params.user}/repos`,{
        headers: {
          Authorization: `${import.meta.env.VITE_API_TOKEN}:x-oauth-basic`,
        }
      }).then(repo => setRepo(repo.data));    
    })
    .catch( error => {
      setErrorMessage(error.response.data.message)   
    });
  }, [params.user])
  
  return (
    <Layout>
        <form
          className="flex w-full flex-wrap justify-center gap-4 my-10"
          onSubmit={(e) => {
            e.preventDefault()
            routeChange(userSearch.search)
          }
        }
        >
          <SearchBar invalid={invalidSearch} value={userSearch.search} />
          <Button title="GO" />
        </form>
        <div className="flex flex-wrap w-full h-full items-start justify-center gap-6">
          <ProfileCard data={userData} repo={repo}/>
          <Repositories data={repo} error={errorMessage} />
        </div>
    </Layout>
  )
}
