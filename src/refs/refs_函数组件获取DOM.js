/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-12 14:09:08
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-12 14:56:59
 */
import React, { memo,createRef, useRef,forwardRef} from 'react'


/* 函数组件通过ref获取组件对象 */
export default memo(function App() {
    const headerRef = useRef();
    return (
        <div>
            <Header ref={headerRef}></Header>
            <Footer></Footer>
            <button onClick={()=>{
                console.log(headerRef.current)
            }}>+1</button>
        </div>
    )
})

const Header = forwardRef((props,ref)=>{
    return(
     <div ref={ref}>
         <button>log in</button>
         <span>121212</span>
         <Footer></Footer>
     </div>
        
    )
})

function Footer(){
    return (
        <div>bottom</div>
    )
}
