/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-12 10:25:35
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-12 11:16:54
 */
import {useState,useEffect} from 'react'
import './App.css';
/* useEffectHook  */
function App() {
  const [counter, setcounter] = useState(0);
  const [status, setstatus] = useState(0);
  useEffect(() => {
      document.title = `you clicked${counter} times`;
      return()=>{
        setstatus(status+2);
      }
  }, [counter,status])
  return(
      <div>
          <div>Clicked:{counter}</div>
          <div>Status:{status}</div>
          <button onClick={()=>setcounter(counter+1)}>+1</button>
      </div>
  )
}

export default App;