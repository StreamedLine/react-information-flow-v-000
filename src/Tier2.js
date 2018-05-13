import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: this.props.childColor 
    }
  }

  render() {
    return (
      <div onClick={this.props.handleChildClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.props.childColor} handleChildClick={this.handleChildClick} />
        <Tier3 color={this.props.childColor} handleChildClick={this.handleChildClick} />
      </div>
    )
  }
}