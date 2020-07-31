import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment , decrement} from './actions/index3'


function App() {
  const counter = useSelector(state => state.counter);
const islogged = useSelector(state => state.islogged);
const dispatch = useDispatch();
  return(
    <div className="App">
    <h1 className="h1">Counter</h1>
    <h2>{counter}</h2>
<button className="btn" onClick={() => dispatch(increment())}>(+)</button>
<button className="btn" onClick={() => dispatch(decrement())}>(-)</button>
{islogged ?
    <h3>Valuable Information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
