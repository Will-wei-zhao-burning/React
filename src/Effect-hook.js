/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-12 10:25:35
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-12 15:33:27
 */
import {useState,useEffect} from 'react'
import './App.css';
/* useEffectHook  */
function App() {
  const [counter, setcounter] = useState(0);
  const [status, setstatus] = useState(0);
  let i = 1
  useEffect(() => {
      document.title = `you clicked${counter} times`;
      i=i+1;
      return()=>{
        setstatus(status+2);
      }
  }, [counter,status])
  return(
      <div>
          <div>Clicked:{counter}</div>
          <div>{i}</div>
          <div>Status:{status}</div>
          <button onClick={()=>setcounter(counter+1)}>+1</button>
      </div>
  )
}

export default App;