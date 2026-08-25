import React, { useCallback, useMemo, useState } from "react";
import Todo from "./Todo";

function TodoList() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Learn React",
      completed: false
    },
    {
      id: 2,
      task: "Learn Node.js",
      completed: false
    },
    {
      id: 3,
      task: "Learn Java",
      completed: true
    },
    {
      id: 4,
      task: "Learn Docker",
      completed: false
    }
  ]);

  const [task, setTask] = useState("");

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");


  // Add Todo
  const addTodo = useCallback(() => {

    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false
    };

    setTodos(prevTodos => [
      ...prevTodos,
      newTodo
    ]);

    setTask("");

  }, [task]);


  // Delete Todo
  const deleteTodo = useCallback((id) => {

    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );

  }, []);


  // Toggle Todo
  const toggleTodo = useCallback((id) => {

    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );

  }, []);


  // Search + Filter
  const filteredTodos = useMemo(() => {

    return todos.filter(todo => {

      const matchesSearch =
        todo.task
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" ||
        (filter === "completed" && todo.completed) ||
        (filter === "pending" && !todo.completed);

      return matchesSearch && matchesFilter;

    });

  }, [todos, search, filter]);


  return (
    <div>

      <h2>Todo Application</h2>


      {/* Add Todo */}

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>


      <br />
      <br />


      {/* Search */}

      <input
        type="text"
        placeholder="Search todo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <br />
      <br />


      {/* Filter */}

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">
          All
        </option>

        <option value="completed">
          Completed
        </option>

        <option value="pending">
          Pending
        </option>
      </select>


      <h3>Todos</h3>


      {filteredTodos.length === 0 ? (

        <p>No todos found</p>

      ) : (

        filteredTodos.map(todo => (

          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />

        ))

      )}

    </div>
  );
}

export default TodoList;