import { useState } from "react";
import { Todo } from "./Todo";


interface FormProps {
    todos: Todo[];
    setTodos: Function
  }

function Form(props:FormProps) {

    const [description , setDescription ] = useState<string>()


    const addTodo = () => {
        props.setTodos([...props.todos, {description : description , statusText :"Pending" ,  statusColor: "pending" , createDate: new Date()} ])
        console.log(props.todos)
    }



  return (
    <div className="w-1/4 h-1/3 rounded-3xl bg-white grid grid-flow-row grid-rows-6 border-b">
        <div>
        <input onChange={(e) => setDescription(e.target.value)} id="firstName" type="text" className="form-control is-valid" placeholder="Description" autoComplete="additional-name" value={description}></input>
        </div>
        <div>
            <button onClick={() => addTodo()} className="border-2 w-16 rounded-3xl border-indigo-400">Add</button>
        </div>
    </div>
  )
}

export default Form