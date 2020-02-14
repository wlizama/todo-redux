import React, { PropTypes } from 'react'

const Todo = ({ onclick, completed, text }) => (
    <li
        onclick={onclick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onclick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
