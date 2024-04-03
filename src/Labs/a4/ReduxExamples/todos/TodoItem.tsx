import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {deleteTodo, setTodo } from "./todosReducer";
import { TodoType } from "../../../store";
interface TodoItemProps {
    todo: TodoType;
  }
  
  function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item">
        {todo.title}
      <button onClick={() => dispatch(deleteTodo(todo.id))}className="btn btn-danger" style={{ marginLeft:'110px',marginRight : '10px'}}> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}className="btn btn-primary" style={{ marginLeft:'5px'}}> Edit </button>
      
    </li>
  );
}
export default TodoItem;
