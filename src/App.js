import { useState } from "react";

const arr = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
  {
    id: 2,
    text: "Learn Redux",
    completed: false,
  },
  {
    id: 3,
    text: "Learn React Router",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(arr);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => {
                setTodos(
                  todos.map((t) => {
                    if (t.id === todo.id) {
                      t.completed = !t.completed;
                    }
                    return t;
                  })
                );
              }}
            >
              edit
            </button>
            <button
              onClick={() => {
                setTodos(todos.filter((t) => t.id !== todo.id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, text }]);
          setText("");
        }}
      >
        Add Todo
      </button>
    </>
  );
}

export default App;
