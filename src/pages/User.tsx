import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

interface IUser {
  login: string;
  bio?: string;
}

export default function User() {
  const params = useParams<{user: string}>();
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${params.user}`).then(
      (response) => {
        setUser(response.data)
        console.log(response.data);        
      }).catch( response => {console.log(response)});
  }, [])
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center flex-1 gap-6">
        {user.login}
      </div>
      <div>
        {user.bio}
      </div>
    </Layout>
  )
}
