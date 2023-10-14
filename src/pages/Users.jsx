import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import fetchData from "../services/ClientService";

export const Users = ()=>{
    const [users,setUsers] = useState(null)
    const [isLoading,setIsLoading] = useState(true)


    useEffect(()=> {
        fetchData('https://jsonplaceholder.typicode.com/users').then((usersData)=>{
            setUsers(usersData)
        }).then(()=>{
            setIsLoading(false)
        })
    },[])

    {/* bu loading quyishni 2_yuli */}
    const loadingSpinner = isLoading ? <h3>Loading...</h3> : null
    const usersList = !isLoading && users ? (
        <ul>
            {users?.map(user=>{
             return  <li key={user.id}> 
             <Link to={`${user.id}`}>{user.name}</Link>
         </li>
            })}
         </ul>
    ) : null;
    ///
    return(
        <div className="page">
            <h1>Users list  page</h1>
            {loadingSpinner}
            {usersList}

            {/* bu loading quyishni 1_yuli */}

        {/* {isLoading ? (
            <h3>Loading...</h3>
        ):(
            <ul>
            {users?.map(user=>{
             return  <li key={user.id}> 
             {user.name}
         </li>
            })}
         </ul>
        )} */}
        </div>
    )
} 