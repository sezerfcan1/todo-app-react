import React from "react";
import { Todo } from "./Todo";

function TodoItem(todo: Todo) {
  return todo.statusColor === "pending" ? (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-[20%] flex flex-col justify-center">
          <div
            className={` bg-[#FFFAEE] flex justify-center rounded-[22px] items-center h-10`}
          >
            <p className="text-[#FECF51] font-medium ">{todo.statusText}</p>
          </div>
        </div>
        <div className="w-[100%] flex flex-col justify-center mb-4">
          <div className="h-[60%] pl-6">
            <div className="">
              <h4 className="font-poppins font-light">
                {todo.createDate.toDateString()}
              </h4>
              <p className="font-poppins font-thin text-[12px]">
                {todo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-black m-auto"></div>
    </div>
  ) : todo.statusColor === "failed" ? (
    <div className="flex flex-col">
    <div className="flex">
      <div className="w-[20%] flex flex-col justify-center">
        <div
          className={` bg-[#FDEEE9] flex justify-center rounded-[22px] items-center h-10`}
        >
          <p className="text-[#F35321] font-medium ">{todo.statusText}</p>
        </div>
      </div>
      <div className="w-[100%] flex flex-col justify-center">
        <div className="h-[60%] pl-6">
          <div className="">
            <h4 className="font-poppins font-light">
              {todo.createDate.toDateString()}
            </h4>
            <p className="font-poppins font-thin text-[12px]">
              {todo.description}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[100%] h-[1px] bg-black m-auto"></div>
  </div>
  ) : (
    <div className="flex flex-col">
    <div className="flex">
      <div className="w-[20%] flex flex-col justify-center">
        <div
          className={` bg-[#EDF8F7] flex justify-center rounded-[22px] items-center h-10`}
        >
          <p className="text-[#44BCA9] font-medium ">{todo.statusText}</p>
        </div>
      </div>
      <div className="w-[100%] flex flex-col justify-center">
        <div className="h-[60%] pl-6">
          <div className="">
            <h4 className="font-poppins font-light">
              {todo.createDate.toDateString()}
            </h4>
            <p className="font-poppins font-thin text-[12px]">
              {todo.description}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[100%] h-[1px] bg-black m-auto"></div>
  </div>
  );
}

export default TodoItem;
