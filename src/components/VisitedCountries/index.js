import './index.css'

const VisitedCountries = props => {
  const {item, changeToNot} = props
  const {imageUrl, name, id} = item

  const remove = () => {
    changeToNot(id)
  }

  return (
    <li className="v-item">
      <img src={imageUrl} alt="thumbnail" className="country-img" />
      <div className="row">
        <p className="name">{name}</p>
        <button
          type="button"
          className="btn-remove"
          onClick={remove}
          data-testid="delete"
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
