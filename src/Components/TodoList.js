import React from 'react'
import styled from "styled-components"
import TodoItem from './TodoItem'

const TodoListBlock = styled.div`
    flex:1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: pink;

`



function TodoList(){
    return (
    <TodoListBlock>
        <TodoItem text="9시 기상하기" done={true}/>
        <TodoItem text="12시 점심식사하기" done={true}/>
        <TodoItem text="15시 과제하기" done={true}/>
        <TodoItem text="18시 뉴스시청하기" done={true}/>
    </TodoListBlock>
    )
}
export default TodoList