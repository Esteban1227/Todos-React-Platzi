import React from "react";
import './createTodoButton.css'
import { IoIosCreate } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { TodoContext } from "../TodoContext";

export function CreateTodoButton(props){
    const { openModal }  = React.useContext(TodoContext)
    
    console.log(openModal)
    const onClickButton = () => {
        props.setOpenModal(!props.openModal)
    }
    return(
        <button 
        className="CreateTodoButton"
        onClick={ onClickButton }
        >
        <span className="iconButton">
            {
                openModal ? <IoClose/> : <IoIosCreate/>
            }
        </span>
        </button>
    )
}