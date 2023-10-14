import { Link } from "react-router-dom"
export const NotFound = ()=>{
    return(
        <div className="page">
            <h1>Not Found </h1>
            <Link to={'/'}>
            <button>Back to home</button>
            </Link>
        </div>
    )
} 