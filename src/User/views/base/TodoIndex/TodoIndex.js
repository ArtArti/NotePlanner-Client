import React, { useState } from "react";
// import AddTaskForm from "./components/AddTaskForm";
// import TaskList from "./components/TaskList";

import { MdDarkMode, MdSunny } from "react-icons/md";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoIndex() {
  // const [tasks, setTasks] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className={`hero 
     
      h-screen md:min-h-[700px]  m-auto flex flex-col items-center mt-14 transition-all duration-500`}
    >
      <div
        className={`flex flex-col space-y-6 w-[600px]  md:w-[70%] z-10 p-4 ${
          darkTheme ? "text-white" : "text-black"
        }`}
      >
        <div className=" w-full flex items-center justify-between">
          <h1 className={`uppercase text-4xl font-bold  tracking-widest mb-4 md:text-3xl ${
          darkTheme ? "text-white" : "text-black"
        }`}>
            {/* Task Manager */}
            My Tasks
          </h1>
          
          {darkTheme ? (
            <MdSunny
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${
                darkTheme ? "text-white" : "text-black"
              }`}
              size={32}
            />
          ) : (
            <MdDarkMode
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${
                darkTheme ? "text-white" : "text-black"
              }`}
              size={32}
            />
          )}
        </div>
        <div className=" shadow-md">
          <AddTodo darkTheme={darkTheme}/>
        </div>
        <div
          className={`scroll ${
            darkTheme ? "bg-gray-800" : "bg-white"
          } w-full h-[350px] md:h-[480px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500`}>
            <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default TodoIndex;
