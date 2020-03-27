import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onNewTodoChange = useCallback(event => {
    setNewTodo(event.target.value);
  }, []);

  const formSubmitted = useCallback(
    event => {
      event.preventDefault();
      if (!newTodo.trim()) return;
      setTodos([
        {
          id: todos.length ? todos[0].id + 1 : 1,
          content: newTodo,
          done: false
        },
        ...todos
      ]);
      setNewTodo("");
    },
    [newTodo, todos]
  );

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  const addTodo = useCallback(
    (todo, index) => event => {
      const newTodos = [...todos];
      newTodos.splice(index, 1, {
        ...todo,
        done: !todo.done
      });
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo = useCallback(
    todo => event => {
      setTodos(todos.filter(otherTodo => otherTodo !== todo));
    },
    [todos]
  );

  const markAllDone = useCallback(() => {
    const updatedTodos = todos.map(todo => {
      return {
        ...todo,
        done: !todo.done
      };
    });
    setTodos(updatedTodos);
  }, [todos]);

  return (
    <div className="container">
      <form onSubmit={formSubmitted}>
        <label htmlFor="newTodo">:یک تسک وارد کنید</label>
        <input
          id="newTodo"
          name="newTodo"
          value={newTodo}
          onChange={onNewTodoChange}
        />
        <button>اضافه کن</button>
      </form>
      <button onClick={markAllDone}>انجام همه تسک‌ها</button>
      <ul>
        {todos.map((todo, index) => (
          <div key={todo.id} className="todo">
            <li>
              <input
                checked={todo.done}
                type="checkbox"
                onChange={addTodo(todo, index)}
              />
              <button className="del" onClick={removeTodo(todo)}>
                حذف
              </button>
              <span className={todo.done ? "done" : ""}>{todo.content}</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
