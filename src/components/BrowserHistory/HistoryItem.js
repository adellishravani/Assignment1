const HistoryItem = props => {
  const {historyitem} = props
  const {id, timeAccessed, title, domainUrl, logoUrl} = historyitem

  onDelete = id => {
    onDeleteUser()
  }
  return (
    <li className="list">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logos" alt="app logo" />
      <h1 className="title">{title}</h1>
      <p>{domainUrl}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete"
        onClick={onDelete}
      />
    </li>
  )
}

export default HistoryItem
