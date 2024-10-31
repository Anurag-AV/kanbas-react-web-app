import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({
  todo
}: {
  todo: { id: string; title: string };
}) {
  
  const dispatch = useDispatch();

  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span className="text-start" style={{ flex: 1 }}>
        {todo.title}
      </span>
      <div>
        <button
          className="btn btn-primary me-2"
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
        >
          Edit
        </button>
        <button
          className="btn btn-danger "
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
