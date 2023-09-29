// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {value: false}

  onButton = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  getButton = () => {
    const {value} = this.state

    return value ? 'subscribed' : 'subscribe'
  }

  render() {
    const onButton = this.getButton()

    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! happy learning</p>
        <button type="button" onClick={this.onButton}>
          {onButton}
        </button>
      </div>
    )
  }
}

export default Welcome
