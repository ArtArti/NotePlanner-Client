import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

const Todo = ({ todoData, isFinished, changeFinished, onDelete, onEdit }) => {
  const [finished, setFinished] = useState(isFinished);
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  // Create a ref for the input field
  const inputRef = useRef(null);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  return (
    <>
      <li className=" mb-1 border-b border-gray-300 space-y-2">
        <div className=" flex items-center justify-between p-4 px-3">
          {/* checked box section */}
          <div className=" flex items-center space-x-3">
            <input
              type="checkbox"
              checked={finished}
              onChange={(e) => {
                setFinished(e.target.checked);
                changeFinished(e.target.checked);
              }}
              className="round rounded-none"
            />
          </div>

          {/* input section */}
          <div className=" flex items-center justify-between p-1 px-3 w-full">
            {editing ? (
              <div className=" flex items-center space-x-3 w-full">
                <input
                  type="text"
                  value={editText}
                  onChange={handleChange}
                  ref={inputRef}
                  className="w-full bg-transparent py-3 text-lg"
                />
              </div>
            ) : (
              <span className="w-full bg-transparent py-3 text-lg">
                {todoData}
              </span>
            )}
          </div>

          {/* button section */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setEditing(!editing);
                onEdit(editText);
              }}
            >
              {!editing ? (
                <FontAwesomeIcon
                  icon={faEdit}
                  className=" text-gray-500 hover:text-yellow-500"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSave}
                  className=" text-gray-500 hover:text-yellow-500"
                />
              )}
            </button>
            <button onClick={onDelete}>
              <FontAwesomeIcon
                icon={faTrash}
                className=" text-gray-500 hover:text-red-500"
              />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Todo;
