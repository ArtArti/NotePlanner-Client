import React from 'react'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'

function TodoList() {

   const dispatch = useDispatch();
   const List = useSelector((state) => state.todo);
  //  const List = useSelector((state) => {
  //   console.log(state.todo); // Log the state for debugging
  //   return state.todo;
  // });
  
   function onFinished(todo, isFinished) {
    dispatch({type:'finish_todo', payload: {todo, isFinished: isFinished}})
   }

   function onDelete(todo) {
     dispatch({type:'delete_todo', payload : {todo}})
   }

   function onEdit(todo, todoText) {
     dispatch({type: 'edit_todo', payload: {todo, todoText}})
   }


  return (
    <>
      <div>
      {List.length > 0 && 
      List.map(todo => <Todo 
                      key={todo.id} 
                      id={todo.id}
                      isFinished={todo.finished}
                      todoData={todo.todoData}
                      changeFinished={(isFinished)=> onFinished(todo ,isFinished)}
                      onDelete={()=> onDelete(todo)}
                      onEdit={(todoText) => onEdit(todo, todoText)}/>
              )}
      </div>
     
    </>
  )
}

export default TodoList;
