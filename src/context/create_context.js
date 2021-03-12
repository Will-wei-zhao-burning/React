/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-12 10:25:35
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-12 12:05:33
 */


 /* 默认值--在没有provider时生效 */
import React ,{ createContext } from "react"

const ThemeContext = createContext('light')

class App extends React.Component{
    render(){
        return (
                <ToolBar></ToolBar>
        )
    }
}

function ToolBar(){
    return (
        <>
         <ThemeButton></ThemeButton>
        </>
    )
}

function ThemeButton(){
    return (
        <>
         <ThemeContext.Consumer>
             {value=>{
                 return (
                     <button>{value}</button>
                 )
             }}
         </ThemeContext.Consumer>
        </>
    )
}

export default App;