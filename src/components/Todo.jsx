import React, { useState } from "react";

export function Todo() {
    const [task, setTask] = useState("")
    const [itemsList, setItemsList] = useState([]) // Will be an array of items


    function handleChangeInput(event) {
        const inputTask = event.target.value
    
        setTask(inputTask) // update the state "task" through "setTask"
    }
    

    //Adds a new item to the list
    function handleAddItemToList(event) {
        event.preventDefault() // Prevents default refresh of the page when submitting a form

        if (!task) {
            return
        }

        setItemsList([...itemsList, task])

        //Clears the input field after submitting the form
        setTask("")
    }


    return (
        <div className="todo-wrapper">
           
            <form onSubmit={handleAddItemToList}>
                <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />
                <button type="submit" > Adicionar </button>
            </form>

            <ul className="todo-list">
                { itemsList.map((item, index ) => (
                    <li key={index}>{item}</li>
                ))}                
            </ul>
        </div>
    )
}