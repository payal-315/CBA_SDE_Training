import React from "react";

function Todo({ todo, deleteTodo, toggleTodo }) {

  console.log("Todo rendered:", todo.task);

  return (
    <div>

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.completed
            ? "line-through"
            : "none"
        }}
      >
        {todo.task}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>

    </div>
  );
}

export default React.memo(Todo);