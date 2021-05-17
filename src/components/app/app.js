import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'
import './app.css'

const App = function () {
  const todoList = [
    {label: 'Drink coffee', important: false, key: 1},
    {label: 'Build Awesome App', important: true, key: 2},
    {label: 'Have dinner', important: false, key: 3}
  ]
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoList}/>
    </div>
  )
}

export default App