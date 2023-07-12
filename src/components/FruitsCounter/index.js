import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrementMango = () => {
    this.setState(prevState => {
      console.log(`${prevState.count1}`)
      return {count1: prevState.count1 + 1}
    })
  }

  onIncrementBanana = () => {
    this.setState(prevState => {
      console.log(`${prevState.count2}`)
      return {count2: prevState.count2 + 1}
    })
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="main-container">
        <div className="cards">
          <h1 className="heading">
            Bob ate <span className="count">{count1}</span> mangoes{' '}
            <span className="count">{count2}</span> bananas
          </h1>
          <div className="main-card">
            <div className="card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="submit"
                className="btn"
                onClick={this.onIncrementMango}
              >
                Eat mango
              </button>
            </div>
            <div className="card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="submit"
                className="btn"
                onClick={this.onIncrementBanana}
              >
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
