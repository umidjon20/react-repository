import { useParams,useNavigate,Link} from "react-router-dom"
import { useState, useEffect } from "react"

import fetchData from "../services/ClientService"

export const UserInfo = () =>{
const [user , setUser] = useState( null)
const [isLoading,setIsLoading] = useState(true)
const { userId } = useParams()
const navigate = useNavigate()

useEffect(()=>{
    fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
        userData =>{
            setUser(userData)
        }
    ).then(()=>{
        setIsLoading(false)
    }).catch(()=>{
        navigate('/not-found')
    })

},[userId])
    return(
        <div className="page">
            <h1>User info</h1>
            {isLoading && !user ?(
                <h3>Loading...</h3>
            ):(
                <ul>
                <li>
                    <strong>Name :</strong> {user?.name}
                </li>
                <li>
                    <strong>Username :</strong> {user?.username}
                </li>
                <li>
                    <strong>Email :</strong> {user?.email}
                </li>
                <li>
                    <strong>Phone :</strong> {user?.phone} 
                </li>
                <li>
                    <strong>Address :</strong> {user?.address.city} 
                </li>
                <li>
                    <strong>Company :</strong> {user?.company.name} 
                </li>

            </ul>
            )}
            {/* istoriya buyicha qaytish */}
                 <button
                 onClick={()=> {
                    navigate(-1)}
                    }>Back
                 </button>
            {/* bu bitta orqoga qaytarish uchun */}
            {/* <Link to={'/users'}>
            <button>Back</button>
            </Link> */}
        </div>
    )
}