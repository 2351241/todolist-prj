import React from "react";
import styled from "styled-components";
import {MdAdd} from 'react-icons/md'


const CircleButton = styled.button`
 background : #38d9a9;

`








function TodoCreate(){
    return(
        <CircleButton>
            <MdAdd/>
        </CircleButton>
    )
}
export default TodoCreate