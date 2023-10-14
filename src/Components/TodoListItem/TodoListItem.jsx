export const TodoListItem = () => {
  
    const todosItem = todos.map((value)=>{
        const {todo,id} = value;
        console.log(todo)
        return 
            <ul className="todo__list">
            <li key={id}>
                <input type="checkbox" id="check" />
                
                {todo}
                <span>x</span>
            </li>
          
        </ul>
        
    })
    return(
        <>
        <todosItem />
        </>
    )
}