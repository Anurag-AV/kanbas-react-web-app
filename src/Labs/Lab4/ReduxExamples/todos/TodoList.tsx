import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div>
      <h2>Todo List</h2>

      <div className=" w-25">
        <ul className="list-group" id="wd-todo-list">
          <TodoForm/>
          {todos.map((todo:any) => (
            <TodoItem todo={todo} />
          ))}
        </ul>
      </div>

      <hr />
    </div>
  );
}
