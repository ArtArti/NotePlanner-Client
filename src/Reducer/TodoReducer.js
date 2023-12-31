// reducers.js

const TodoReducer = (state = [], action) => {

   if(action.type === 'add_todo'){
    let todoText = action.payload.todoText;
  return [
    ...state,
    { id: state.length + 1, todoData: todoText, finished: false }
  ];
 }
 else if (action.type === 'edit_todo') {
    let todo = action.payload.todo;
    let todoText = action.payload.todoText;
    const updatedList = state.map(t => {
      if (t.id === todo.id) {
        // Create a new object with the updated text
        return { ...t, todoData: todoText };
      }
      return t;
    });
    return updatedList;
  } 
  
  else if(action.type === 'delete_todo') {
     let todo = action.payload.todo;
     const updatedList = state.filter(t=> t.id !== todo.id);
     return updatedList;
}

else if (action.type === 'finish_todo') {
  let todo = action.payload.todo;
  let isFinished = action.payload.isFinished;
  const updatedList = state.map(t => {
    if (t.id === todo.id) {
      // Create a new object with the updated 'finished' property
      return { ...t, finished: isFinished };
    }
    return t;
  });
  return updatedList;
}

   return state;
  };
  
  export default TodoReducer;
  