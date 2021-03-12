/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-12 15:04:15
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-12 15:35:36
 */
import React, { memo ,useState , useEffect, useRef} from 'react'
/* useRef 第二种用法 保留值 */
export default memo(function App() {
     const [count, setcount] = useState(0)
     console.log('函数组件渲染')
     const numRef  = useRef(count)
     
     useEffect(() => {
        numRef.current = count;
        console.log('Effect渲染！',numRef.current);
     }, [count])

    return (
        <div>
            <h2>{numRef.current}</h2>
            <h2>{count}</h2>
            <button onClick={()=>setcount(count+10)}>+10</button>
        </div>
    )
})
