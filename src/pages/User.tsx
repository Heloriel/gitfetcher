import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { SearchBar } from '../components/SearchBar';
import { Button } from '../components/Button';
import { SearchContext } from "../contexts/SearchContext";

interface IUser {
  login: string;
  bio?: string;
}

export default function User() {
  const params = useParams<{user: string}>();
  const [user, setUser] = useState({} as IUser);
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
    axios.get(`https://api.github.com/users/${params.user}`).then(
      (response) => {
        setUser(response.data)
        console.log(response.data);        
      }).catch( response => {console.log(response)});
  }, [params.user])
  
  return (
    <Layout>
      <form
        className="flex w-full justify-center gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          routeChange(userSearch.search)
        }
      }  
      >
        <SearchBar invalid={invalidSearch} value={userSearch.search} />
        <Button title="GO" />
      </form>
      <div className="flex flex-col w-full items-center justify-center gap-6">
        {user.login}
      </div>
    </Layout>
  )
}
