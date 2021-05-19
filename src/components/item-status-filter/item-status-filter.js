import React, {Component} from 'react'
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
  buttons = [
    {state: 'All', label: 'All'},
    {state: 'Active', label: 'Active'},
    {state: 'Done', label: 'Done'}
  ]

  render() {
    const {onChangeStatus, status} = this.props

    const elements = this.buttons.map(({state, label}) => {
      const classNames = state === status
        ? 'btn-info'
        : 'btn-outline-secondary'

      return (
        <button key={state}
                type="button"
                className={`btn ${classNames}`}
                onClick={() => onChangeStatus(state)}>{label}
        </button>
      )
    })

    return (
      <div className="btn-group">
        {elements}
      </div>
    )
  }
}
