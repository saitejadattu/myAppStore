// Write your code here
import './index.css'

const TabItem = props => {
  const {eachlist, displayCategory, textHigh} = props
  const {displayText, tabId} = eachlist

  const changeCategory = () => {
    displayCategory(tabId)
  }
  const textStyle = textHigh === tabId ? 'text-style' : ''
  return (
    <li className="text-list-item">
      <button
        type="button"
        onClick={changeCategory}
        className={`app-category-button ${textStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
