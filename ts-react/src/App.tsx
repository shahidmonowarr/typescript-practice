import React, { useCallback, useReducer, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Lists from './components/Lists';

// const Box: React.FC<{title:string}> = ({ title}) => {
//   return <div></div>
// };

interface Todo {
  id: number,
  text: string,
}
type ActionType = {type: 'add', text: string} | {type: 'remove', id: number}; 

function App() {

  function reducer(state: Todo[], action: ActionType){
    switch(action.type){
      case 'add':
        return [...state, {id: state.length, text: action.text}];
      case 'remove':
        return state.filter(todo => todo.id !== action.id);
      default:
        return state;
    }
  }
  //useReducer is a hook that takes a reducer function and an initial state and returns a state and a dispatch function
  // useReducer returns a state and a dispatch function
  const [todos, dispatch] = useReducer(reducer,[]);

  const newToDoRef = useRef<HTMLInputElement>(null);

  //useCallback to prevent infinite loop. useCallback returns a memoized callback. 
  const onAddToDo = useCallback(() => {
    if(newToDoRef.current){
      dispatch({type: 'add', text: newToDoRef.current.value});
      newToDoRef.current.value = '';
    }
  },[])

  
  return (
    <div className="App">
      {/* <Box title='hello'></Box> */}
      {/* <Lists></Lists> */}
      <h2>To Do List</h2>
      <input type="text" ref={newToDoRef} />
      <button onClick={onAddToDo}>Add</button>

      {
        todos.map(todo => {
          return <div key={todo.id}>{todo.text} 
          <button onClick={()=> dispatch({type: "remove", id: todo.id})}>Remove</button>
          </div>})
      }
    </div>
  );
}

export default App;
