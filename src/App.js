import React from 'react'
import {createGlobalStyle} from "styled-components"
import TodoTemplate from './Components/TodoTemplate'
import TodoHead from './Components/TodoHead'
import TodoList from './Components/TodoList'
import TodoItem from './Components/TodoItem'


const GlobalStyle = createGlobalStyle`
body{
  background: #E3E317;
}
`


function App(){
  return(
    <>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoHead/>
      <TodoList/>
    </TodoTemplate>
    </>
  )
}
export default App;