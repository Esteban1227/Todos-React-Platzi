import React from "react";
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'

export function TodoSearch(){
    
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
        console.log(e.target.value)
    }

    return [
        <input 
            className="TodoSearch-input" placeholder="Cebolla"
            onChange={onSearchValueChange} 
            value={searchValue}
        />,
    ]
}