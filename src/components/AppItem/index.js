// Write your code here
import './index.css'
const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl, category, appId} = eachApp
  return (
    <li className="app-list-item">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
