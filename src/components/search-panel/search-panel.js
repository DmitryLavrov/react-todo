import React, {Component} from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {
  state = {
    searchText: ''
  }

  onChangeText = (e) => {
    this.setState({searchText: e.target.value})
    this.props.onTypeSearch(e.target.value)
  }

  render() {
    return (
      <input className="form-control search-input"
             placeholder="search"
             onChange={this.onChangeText}
             value={this.state.searchText}/>
    )
  }
}

