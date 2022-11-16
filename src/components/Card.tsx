import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./Todo";

interface CardProps {
  todos: Todo[];
}

function Card(props:CardProps) {
  return (
    <div className="w-2/4 h-2/3 rounded-3xl bg-white grid grid-flow-row grid-rows-6 border-b">
      <p className="mt-10 ml-10 font-poppins font-extrabold">To Do List</p>
      <div className="row-span-5 pl-4 pr-4 grid-rows-6 grid-flow-row grid">

      {props.todos.map((todo, index) => {
        return (
            <TodoItem key={index}
              statusColor={todo.statusColor}
              statusText={todo.statusText}
              description={todo.description}
              createDate={todo.createDate}
            ></TodoItem>
        );
      })}
          </div>
    </div>
  );
}

export default Card;
