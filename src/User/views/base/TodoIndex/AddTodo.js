import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";


const AddTodo = ({ darkTheme }) => {

  const [inputText, setInputText] = useState(" ");
  const dispatch = useDispatch();
 

  return (
    
      <div
        className={` ${
          darkTheme ? "bg-gray-800" : "bg-white"
        } w-full  flex space-x-2 items-center  rounded-lg px-4`}>
        <FontAwesomeIcon icon={faCirclePlus}  className="px-0 text-gray-500"/>
        <input
          className=" bg-transparent w-full h-fit p-1 py-4 text-lg border-collapse"
          type="text"
          placeholder="Add a new task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className=" px-4 uppercase text-gray-500"
         onClick={() => {
          dispatch({type:'add_todo', payload:{todoText: inputText}})
          setInputText('');
         }}>
          Add
        </button>
      </div>
  );
};

export default AddTodo;
