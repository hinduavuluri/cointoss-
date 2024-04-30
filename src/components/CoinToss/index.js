// Write your code here
import './index.css'
import {Component} from 'react'

const HEAD_IMAGE = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {resultImage: HEAD_IMAGE, totalHeads: 0, totalTails: 0,}

  onClickToss = () => {
    const {totalHeads, totalTails} = this.state
    let image = ''
    let latestHeadCount = totalHeads
    let latestTailsCount = totalTails

    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      image = HEAD_IMAGE
      latestHeadCount += 1
    } else {
      image = TAIL_IMG
      latestTailsCount += 1
    }
    this.setState({
      resultImage: image,
      totalHeads: latestHeadCount,
      totalTails: latestTailsCount,
    })
  }

  render() {
    const {resultImage, totalHeads, totalTails} = this.state
    const totalCount = totalHeads + totalTails
    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={resultImage} alt="toss result" className="toss-image" />
          <button type="button" className="button" onClick={this.OnClickToss}>
            Toss Coin
          </button>
          <div classname="result-container">
            <p classname="result">Total: {totalCount}</p>
            <p classname="result">Heads: {totalHeads}</p>
            <p classname="result">Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
