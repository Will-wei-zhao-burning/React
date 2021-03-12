/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-12 10:09:39
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-12 10:23:51
 */
import {useState} from 'react'
import './App.css';
/* useStateHook */
function App() {
  const [counter,setCounter] = useState(0)
  return (
    <>
    <div>{counter}</div>
    <button onClick={()=>setCounter(counter+1)}>+1</button>
    </>
  );
}

export default App;
