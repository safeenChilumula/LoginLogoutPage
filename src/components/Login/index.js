import './index.css'
import {Component} from 'react'

class Login extends Component {
  render() {
    const {onChangeLogin} = this.props

    return (
      <button onClick={onChangeLogin} className="button" type="button">
        Login
      </button>
    )
  }
}

export default Login
