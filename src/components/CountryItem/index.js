import './index.css'

const CountryItem = props => {
  const {item, changeToVisited} = props
  const {id, name, isVisited} = item

  const clicked = () => {
    changeToVisited(id)
  }

  return (
    <li className="item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="span">Visited</p>
      ) : (
        <button type="button" className="btn" onClick={clicked}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryItem
