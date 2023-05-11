import '../Login/index.css'

const Logout = props => {
  const {onChangeLogout} = props
  const onLogout = () => {
    onChangeLogout()
  }
  return (
    <button className="button" onClick={onLogout} type="button">
      Logout
    </button>
  )
}

export default Logout
