import React from "react";
import "./TodoItem.css"
import { AiOutlineCheckCircle, AiFillDelete } from 'react-icons/ai';

export function TodoItem(props) {
    return (
        <li className="TodoItem">
        <span
            className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
            onClick={props.onComplete}
        >
            <AiOutlineCheckCircle />
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
            <AiFillDelete />
            </span>
        </li>
    );
}
