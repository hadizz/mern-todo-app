import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Todos from "./todos";

import "./App.css";
const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [tag, setTag] = useState("span");
  const [tagContent, setTagContent] = useState("");
  const [insideTagContent, setInsideTagContent] = useState("سلام");

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  // get todos from api
  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then((response) => {
        console.log("get from DB", response.data);
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // handle new todo
  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []);

  // add new todo
  const formSubmitted = useCallback(
    (event) => {
      event.preventDefault();
      if (!newTodo.trim()) return;

      axios
        .post("http://localhost:5000/todos", {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          description: newTodo,
        })
        .then((response) => {
          console.log("post to DB", response);
        })
        .catch((error) => {
          console.log(error);
        });

      setTodos([
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          description: newTodo,
          done: false,
        },
      ]);

      setNewTodo("");
    },
    [newTodo, todos]
  );

  // change todo's done status
  const changeTodoDone = useCallback(
    (todo, index) => (event) => {
      axios
        .patch(`http://localhost:5000/todos/${todo.id}`, {
          description: todo.description,
          done: !todo.done,
        })
        .then((response) =>
          console.log("change todo ", todo.id, "done stat", response)
        )
        .catch((error) => console.log(error));
      const newTodos = [...todos];
      newTodos.splice(index, 1, {
        ...todo,
        done: !todo.done,
      });
      setTodos(newTodos);
    },
    [todos]
  );

  // set all todos' done to true
  const markAllDone = useCallback(() => {
    let toChangeTodos = [];
    for (let i = 0; i < todos.length; i++) {
      toChangeTodos.push(
        axios.patch(`http://localhost:5000/todos/${todos[i].id}`, {
          description: todos[i].description,
          done: true,
        })
      );
    }

    console.log("toChangeTodos", toChangeTodos);

    axios
      .all(toChangeTodos)
      .then(
        axios.spread((...responses) => {
          console.log("responses", responses);
        })
      )
      .catch((error) => console.log(error));

    const updatedTodos = todos.map((todo) => {
      return {
        ...todo,
        done: true,
      };
    });
    setTodos(updatedTodos);
  }, [todos]);

  // remove a todo
  const removeTodo = useCallback(
    (todo) => (event) => {
      axios
        .delete(`http://localhost:5000/todos/${todo.id}`)
        .then((response) => console.log("delete id", todo.id, response))
        .catch((error) => console.log(error));
      setTodos(todos.filter((otherTodo) => otherTodo !== todo));
    },
    [todos]
  );

  const inputStyle = {
    direction: "rtl",
    padding: "5px 10px 5px 10px",
    // margin: "5px 0 5px 0",
    border: "0px",
    borderRadius: "10px",
    outline: "none",
    backgroundColor: "lightblue",
  };

  // handle input textbox dimensions
  const handleOnKeyPress = useCallback((event) => {
    // console.log(event.target);
    // this.style.width = ((this.value.length + 1) * 8) + 'px';
    // event.target.style.height = "100px";
    var n = event.target.value.length / 24;
    console.log(n);

    if (n >= 1) {
      console.log(event.target.value.length);
      event.target.style.height = `${(n + 1) * 20}px`;
    }

    // event.target = "<p>hello</p>";
  }, []);

  const CustomTag = `${tag}`;

  // change span to input
  const customTagOnClick = useCallback(
    (event) => {
      if (tag !== "textarea") {
        setTagContent(insideTagContent);
        setInsideTagContent("");
        setTag("textarea");
      }
    },
    [tag]
  );

  // handle changing todo
  const onChangingTodoChange = useCallback((event) => {
    // console.log(event.target.value);

    setTagContent(event.target.value);
  }, []);

  return (
    <div className="container">
      <CustomTag
        value={tagContent}
        onChange={onChangingTodoChange}
        onClick={customTagOnClick}
        // onKeyPress={handleOnKeyPress}
        style={inputStyle}
        cols={40}
      >
        {insideTagContent.length === 0 ? null : insideTagContent}
      </CustomTag>
      <form onSubmit={formSubmitted}>
        <input
          id="newTodo"
          name="newTodo"
          value={newTodo}
          placeholder="یک تسک وارد کنید"
          onChange={onNewTodoChange}
          className="inputNewTask"
          // onKeyPress={handleOnKeyPress}
        />
        <br />
        <button className="addNewTaskButton">اضافه کن</button>
      </form>
      <button className="addNewTaskButton" onClick={markAllDone}>
        انجام همه تسک‌ها
      </button>

      <ul>
        {todos.map((todo, index) => (
          <div key={todo.id} className="todo">
            <li>
              <input
                checked={todo.done}
                type="checkbox"
                onChange={changeTodoDone(todo, index)}
              />
              <button className="del" onClick={removeTodo(todo)}>
                حذف
              </button>
              <span className={todo.done ? "done" : ""}>
                {todo.description}
              </span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
