import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor();
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor),
      grandChildColor: getReducedColor(getReducedColor(initialColor))
    }
  }

  handleOnClick = () => {
    const color = getRandomColor();
    this.setState({color: color, childColor: getReducedColor(color), grandChildColor: getReducedColor(getReducedColor(color))});
  }

  handleChildClick = (e) => {
    const color = getRandomColor()
    if (e.target.classList.contains("tier2")) {
      this.setState({childColor: color, grandChildColor: getReducedColor(color)})
    } else {
      this.setState({grandChildColor: color})
    }
    e.stopPropagation()
  }

  render() {
    return (
      <div onClick={this.handleOnClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} childColor={this.state.grandChildColor} handleChildClick={this.handleChildClick} />
        <Tier2 color={this.state.childColor} childColor={this.state.grandChildColor} handleChildClick={this.handleChildClick} />
      </div>
    )
  }
}