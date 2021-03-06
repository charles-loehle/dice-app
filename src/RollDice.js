import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  state = {
    class1: 'fas fa-dice-three',
    class2: 'fas fa-dice-two',
    animateDiceClass: '',
    buttonText: 'Roll Dice',
    disableButton: false
  }

  roll = () => {
    let dice1RandomSideIndex = [Math.floor(Math.random() * this.props.sides.length)];
    let dice2RandomSideIndex = [Math.floor(Math.random() * this.props.sides.length)];
    this.setState({
      class1: this.props.sides[dice1RandomSideIndex].class,
      class2: this.props.sides[dice2RandomSideIndex].class,
      animateDiceClass: 'shake',
      buttonText: 'Rolling...',
      disableButton: true
    });

    setTimeout(() => {
      this.setState({ animateDiceClass: '', buttonText: 'Roll Dice', disableButton: false })
    }, 1000);
  }
  render() {
    return (
      <div>
        <Die
          diceClass1={this.state.class1}
          diceClass2={this.state.class2}
          animateDiceClass={this.state.animateDiceClass}
        />
        <button disabled={this.state.disableButton} className="btn btn-outline" onClick={this.roll}>{this.state.buttonText}</button>
      </div>
    )
  }
}

RollDice.defaultProps = {
  sides: [
    { class: "fas fa-dice-one" },
    { class: "fas fa-dice-two" },
    { class: "fas fa-dice-three" },
    { class: "fas fa-dice-four" },
    { class: "fas fa-dice-five" },
    { class: "fas fa-dice-six" }
  ]
}

export default RollDice