import React from "react";
import './TodoCounter.css'
import {TodoContext} from '../TodoContext'

export function TodoCounter(props){

    const { totalTodos, completedTodos } = React.useContext(TodoContext) 
    return(
        <h2 className="TodoCounter-title">Has Completado {completedTodos} de {totalTodos} TODOs</h2>
        )
}