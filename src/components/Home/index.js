import {Component} from 'react'
import './index.css'
import Message from '../Message/index'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {
    message: 'Please Login',
    login: true,
  }

  onChangeLoginLogout = () => {
    const {login} = this.state
    if (login) {
      this.setState(() => ({
        message: 'Welcome User',
        login: false,
      }))
    } else {
      this.setState(() => ({
        message: 'Please Login',
        login: true,
      }))
    }
  }

  render() {
    const {message, login} = this.state
    return (
      <div className="bg-home-container">
        <div className="cart-container">
          <Message message={message} />
          {login && <Login onChangeLogin={this.onChangeLoginLogout} />}
          {!login && <Logout onChangeLogout={this.onChangeLoginLogout} />}
        </div>
      </div>
    )
  }
}

export default Home
