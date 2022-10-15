import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Logo from "./components/Logo";
import { SearchContext } from "./contexts/SearchContext";
import { ThemeContext } from './contexts/ThemeContext';
import { Button } from "./components/Button";
import { SearchBar } from "./components/SearchBar";

function App() {
  const themeContext = useContext(ThemeContext);
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();
  const [invalidSearch, setInvalidSearch] = useState(false);
  
  const routeChange = (userName: string) => {
    if(userName === ""){
      setInvalidSearch(true);
      return;
    }
    navigate(`/user/${userName}`);      
  }

  const userSearch = useContext(SearchContext);

  useEffect(() => {
    if(searchContext.search === "" && invalidSearch == true){
      setInvalidSearch(true)
    }else{
      setInvalidSearch(false)
    }
  }, [searchContext.search])

  useEffect(() => {
    searchContext.setSearch('');
  }, [])  

  return (
    <Layout>
      <form
        className="flex flex-col items-center justify-center flex-1 gap-6 w-full"
        onSubmit={(e) => {
          e.preventDefault()
          routeChange(userSearch.search)
        }
      }>
        <Logo width={372} height={78} dark={themeContext.darkMode} />
        <SearchBar invalid={invalidSearch}/>
        <Button title="GO" type="submit" />
      </form>
    </Layout>     
  )
}

export default App
