import React, { Component } from 'react';
import './App.css';
class Keypad extends Component {
  render(){
    return (
      <div id="keypad">
        <button id="zero"   value="0" onClick={this.props.keyPress}>0</button>
        <button id="one"    value="1" onClick={this.props.keyPress}>1</button>
        <button id="two"    value="2" onClick={this.props.keyPress}>2</button>
        <button id="three"  value="3" onClick={this.props.keyPress}>3</button>
        <button id="four"   value="4" onClick={this.props.keyPress}>4</button>
        <button id="five"   value="5" onClick={this.props.keyPress}>5</button>
        <button id="six"    value="6" onClick={this.props.keyPress}>6</button>
        <button id="seven"  value="7" onClick={this.props.keyPress}>7</button>
        <button id="eight"  value="8" onClick={this.props.keyPress}>8</button>
        <button id="nine"   value="9" onClick={this.props.keyPress}>9</button>

        <button id="clear"    value="AC" onClick={this.props.keyPress}>+</button>
        <button id="add"      value="+" onClick={this.props.keyPress}>+</button>
        <button id="subtract" value="-" onClick={this.props.keyPress}>-</button>
        <button id="multiply" value="x" onClick={this.props.keyPress}>x</button>
        <button id="divide"   value="/" onClick={this.props.keyPress}>/</button>
        <button id="decimal"  value="." onClick={this.props.keyPress}>/</button>


      </div>
    );
  }
}
class App extends Component {

  handleKeyPress() {

  }
  render() {
    return (
      <div className="App">
        <div id="display">

        </div>
        <Keypad keyPress={this.handleKeyPress}/>
      </div>
    );
  }
}

export default App;
