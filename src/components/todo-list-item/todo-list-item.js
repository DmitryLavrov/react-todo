import React from 'react'
import './todo-list-item.css'

const TodoListItem = ({label, important}) => {
  const style = {color: important ? 'tomato' : 'black'}
  return (
    <span className="todo-list-item">
      <span style={style} className="todo-list-item-label">
        {label}
      </span>
      <button type="button" className="btn btn-outline-success btn-sm">
        <span className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  )
}

export default TodoListItem