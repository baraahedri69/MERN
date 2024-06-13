import React from 'react'

const CreateTodo = ({onTodoSubmit}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = {
            task: e.target.todoField.value,
            completed: false,
            deleted: false
        }
        onTodoSubmit(todo)
        e.target.todoField.value = ""
    }

    return (
        <>
            <form onSubmit={ handleSubmit } >
                <input type="text" id="todoField"/>
                <button type="submit" className="btn btn-add">Add</button>
            </form>
        </>
    )
}

export default CreateTodo