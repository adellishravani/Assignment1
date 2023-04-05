import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  state = {searchInput: '', detailsList: historyList}
  onChangeInput = event => {
    this.state({searchInput: event.target.value})
  }

  onDeleteUser = id => {
    const {detailsList} = this.state
  }

  render() {
    const {historyList} = this.props
    const {searchInput} = this.state
    const SearchResults = historyList.filter(each =>
      each.title.includes(searchInput),
    )

    return (
      <div>
        <div className="topbg">
          <div className="nav">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logoHistory"
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searchlogo"
            />
          </div>
          <div>
            <input
              type="search"
              placeholder="search history"
              onChange={this.onChangeInput}
              value={searchInput}
            />
          </div>
        </div>
        <div>
          <ul>
            {SearchResults.map(each => (
              <HistoryItem historyitem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
