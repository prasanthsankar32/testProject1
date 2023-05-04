import { useReducer } from 'react';

const initialState = { count : 0 };

function App() {

  const [state,dispatch] = useReducer(reducer,initialState); 

  return(
    <div>
      Count : { state.count }
      {/* <button onClick={() => dispatch({type:'increment'})}>+</button>
      <button onClick={() => dispatch({type:'decrement'})}>-</button> */}
      <button onClick={() => dispatch({type:'increment',payload:5})}>+</button>
      <button onClick={() => dispatch({type:'decrement',payload:5})}>-</button>
    </div>
  )
}

export default App;

function reducer(state,action) {
  switch(action.type) {
    case 'increment':
      return {count : state.count + action.payload}
    case 'decrement':
      return {count : state.count - action.payload}
    default:
      throw new Error();
  }
}