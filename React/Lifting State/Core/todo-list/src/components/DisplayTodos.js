import React from 'react'
import '../App.css'

const DisplayTodos = ({onTodoChange, todoList}) => {

    const handleCheck = (e, index) => {
        const todoCopy = [...todoList]
        todoCopy[index].completed = e.target.checked
        onTodoChange(todoCopy)
    }

    const handleDelete = (index) => {
        const confirmedDelete = window.confirm("Do you really want to delete this task?")

        if (confirmedDelete) {
            const todoCopy = [...todoList]
            todoCopy[index].deleted = true
            onTodoChange(todoCopy)
        }
    }

    return (
        <div className="todo-list">
            {todoList.map((item, index) => (
                item.deleted ? ""
                :<div key={index} className="todo-item">
                    <div>
                        <input type="checkbox" onChange={ (e) => handleCheck(e, index) } />
                        <span className={item.completed === true ? "completed":""}>{ item.task }</span>
                    </div>
                    <button className="btn btn-delete" onClick={ (e) => handleDelete(index) }>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default DisplayTodos