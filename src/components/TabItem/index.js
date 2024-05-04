import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-item-button ${activeTabBtnClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
