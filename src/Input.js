import React, { useState } from "react";
import Todos from "./Todos";

const Input = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const add = (e) => {
    e.preventDefault();
    input.length !== 0
      ? setTodos([...todos, input])
        ? setInput("")
        : setInput("")
      : alert("No todos given!");
  };

  return (
    <div>
      <form>
        <div className="flex flex-col mt-16 w-max md:flex-row border shadow-md mx-auto">
          <input
            className="mx-auto w-48 md:w-max px-3 h-10 text-xl"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Your todo"
          ></input>

          <button
            className="bg-blue-500 hover:bg-blue-400 text-white text-2xl w-full h-8 lg:w-10 lg:h-10 mx-auto"
            type="submit"
            onClick={add}
          >
            +
          </button>
        </div>
        {todos.map((todo) => (
          <p>
            <Todos to={todo} list={todos} set={setTodos}/>
          </p>
        ))}
      </form>
    </div>
  );
};

export default Input;
