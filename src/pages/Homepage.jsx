import { Loading } from "../Components/Loading/Loading"
export const MainPage = ()=>{
    return(
        <div className="page">
             <h1>Main page</h1>

             <Loading />

            {/* <div className="todo">
              <div className="input">
              <label htmlFor="#">
                    <input type="text" name="todo" />
                </label>
                <button>Click me</button>
              </div>
                <ul className="todo__list">
                    <li>
                        <input type="checkbox" id="check" />
                        <span>x</span>
                    </li>
                  
                </ul>
            </div> */}
           
        </div>
    )
} 