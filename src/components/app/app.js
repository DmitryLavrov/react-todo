import React, {Component} from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'
import './app.css'

export default class App extends Component {

  id = 100

  createItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.id++
    }
  }

  state = {
    todoList: [
      this.createItem('Drink coffee'),
      this.createItem('Build Awesome App'),
      this.createItem('Have a dinner')
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoList}) => {
      return {todoList: [...todoList].filter(item => item.id !== id)}
    })
  }

  addItem = (text) => {
    this.setState(({todoList}) => {
      const newTodoList = [
        ...todoList,
        this.createItem(text)
      ]
      return {todoList: newTodoList}
    })
  }

  toggleProperty = (id, propName) => {
    this.setState(({todoList}) => {
      const newTodoList = [...todoList]
      const idx = newTodoList.findIndex(item => item.id === id)
      newTodoList[idx][propName] = !newTodoList[idx][propName]
      return {todoList: newTodoList}
    })
  }

  onToggleDone = (id) => {
    this.toggleProperty(id, 'done')
  }

  onToggleImportant = (id) => {
    this.toggleProperty(id, 'important')
  }

  render() {
    const {todoList} = this.state
    const countToDo = todoList.filter(item => !item.done).length
    const countDone = todoList.filter(item => item.done).length

    return (
      <div className="todo-app">
        <AppHeader toDo={countToDo} done={countDone}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList todos={todoList}
                  onDeleted={this.deleteItem}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
        <ItemAddForm onAdded={this.addItem}/>
      </div>
    )
  }
}
