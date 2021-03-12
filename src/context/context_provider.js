/*
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2021-03-12 12:09:17
 * @LastEditors: BurNing
 * @LastEditTime: 2021-03-12 13:43:44
 */
 /* 1.provider的使用
    2.consumer的使用 
  */
 import React ,{ createContext } from "react"

 const ThemeContext = createContext('1')
 const title = {
     reader:'bur',
     writter:'willhook'
 }
 
 class App extends React.Component{
     render(){
         return (
             <ThemeContext.Provider value={title}>
                 <ToolBar></ToolBar>
             </ThemeContext.Provider>    
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
              {title=>{
                  console.log(title)
                  return (
                      <button>{title.writter}</button>
                  )
              }}
          </ThemeContext.Consumer>
         </>
     )
 }
 
 export default App;