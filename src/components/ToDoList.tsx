import React from "react";
import type { RootState } from "../store";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.toDo);
  // console.log("🚀 ~ todos", { ...todos });
  return (
    <div>
      {todos.map((item) => {
        // return <h3 key={item.id}>{item.text}</h3>;

        return <ToDoItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ToDoList;
