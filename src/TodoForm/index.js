import React from "react";
import { TodoContext } from "../TodoContext";
import './form.css'

export function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const [valueInCorrect, setValueInCorrect] = React.useState(false)
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const onCancel = () =>{
        setOpenModal(false)
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        if(newTodoValue === ""){
            setValueInCorrect(true)
        }else{
            addTodo(newTodoValue)
            setOpenModal(false)
        }
    }
    const onChange = (e) =>{
        setNewTodoValue(e.target.value)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <span className={`TodoForm-spanError ${valueInCorrect && "TodoForm-spanError--active"}`}>¡Este cambio es obligatorio!</span>
            <textarea 
                placeholder="Cortar la Cebolla Para el Almuerzo"
                onChange={onChange}
                value={newTodoValue}
                className={`TodoForm-textArea ${valueInCorrect && "TodoForm-textArea--error"}`}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    onClick={onCancel}
                    type='button'
                    className="TodoForm-button TodoForm-button--cancel"
                >
                Cancelar
                </button>
                <button 
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"             >
                Agregar
                </button>
            </div>
        </form>
    )
}