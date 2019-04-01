import React, { Component } from 'react';
import './App.css';

const isOperator = /[x/+-]/, endsWithOperator = /[x/+-]$/;


class Keypad extends Component {
  render(){
    return (
      <div id="keypad">
        <button id="zero"   value="0" onClick={this.props.handleNumber} className="number">0</button>
        <button id="one"    value="1" onClick={this.props.handleNumber} className="number">1</button>
        <button id="two"    value="2" onClick={this.props.handleNumber} className="number">2</button>
        <button id="three"  value="3" onClick={this.props.handleNumber} className="number">3</button>
        <button id="four"   value="4" onClick={this.props.handleNumber} className="number">4</button>
        <button id="five"   value="5" onClick={this.props.handleNumber} className="number">5</button>
        <button id="six"    value="6" onClick={this.props.handleNumber} className="number">6</button>
        <button id="seven"  value="7" onClick={this.props.handleNumber} className="number">7</button>
        <button id="eight"  value="8" onClick={this.props.handleNumber} className="number">8</button>
        <button id="nine"   value="9" onClick={this.props.handleNumber} className="number">9</button>

        <button id="clear"    value="AC" onClick={this.props.handleAC}>AC</button>
        <button id="add"      value="+" onClick={this.props.handleOperator} className="operator">+</button>
        <button id="subtract" value="-" onClick={this.props.handleOperator} className="operator">-</button>
        <button id="multiply" value="x" onClick={this.props.handleOperator} className="operator">x</button>
        <button id="divide"   value="/" onClick={this.props.handleOperator} className="operator">/</button>
        <button id="decimal"  value="." onClick={this.props.handleDecimal}     >.</button>
        <button id="equals"   value="=" onClick={this.props.calculate}>=</button>


      </div>
    );
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "0",
      expression: "",
      calculated: false
    };
    this.handleAC = this.handleAC.bind(this);
    this.handleNumberKey = this.handleNumberKey.bind(this);
    this.handleOperatorKey = this.handleOperatorKey.bind(this);
    this.handleDecimalKey = this.handleDecimalKey.bind(this);
    this.calculate = this.calculate.bind(this);
  }


  handleNumberKey(event) {
    if(this.state.calculated === true){
      console.log("reseting");
      this.setState({
        input: event.target.value,
        expression: event.target.value,
        calculated: false
      });
    }
    else if(event.target.value === "0" && this.state.input === "0"){
      return;
    }
    else if(this.state.input === "0" || isOperator.test(this.state.input)){
      this.setState({
        input: event.target.value,
        expression: this.state.expression + event.target.value
      });
    }
    else{
      this.setState({
        input: this.state.input + event.target.value,
        expression: this.state.expression + event.target.value
      });
    }
  }


  handleOperatorKey(event) {
    if(this.state.calculated === true){
      console.log("reseting");
      this.setState({
        input: event.target.value,
        expression: this.state.input + event.target.value,
        calculated: false
      });
    }
    else if(this.state.input === "0"){

    }
    else if(isOperator.test(this.state.input) === false){
      this.setState({
        input: event.target.value,
        expression: this.state.expression + event.target.value
      });
    }
    else if(isOperator.test(this.state.input) === true){
      this.setState({
        input: event.target.value,
        expression: this.state.expression.slice(0, this.state.expression.length-1) + event.target.value
      });
    }
  }

  handleDecimalKey(event){
    if(this.state.calculated === true){
      console.log("reseting");
      this.setState({
        input: this.state.input + ".",
        expression: this.state.input + ".",
        calculated: false
      });
    }
    else if(this.state.input.includes(".")){
      return;
    }
    else if(this.state.expression[this.state.expression.length-1] === event.target.value){
      return;
    }
    else if(isOperator.test(this.state.input) === true){
      console.log("fuck");
      this.setState({
        input: "0" + event.target.value,
        expression: this.state.expression + "0" + event.target.value
      });
    }
    else{
      console.log("suck");
      this.setState({
        input: this.state.input + event.target.value,
        expression: this.state.expression === ""? "0." : this.state.expression + event.target.value
      });
    }
  }
  handleAC() {
    this.setState({
      input: "0",
      expression: ""
    });
  }
  calculate() {
    if(this.state.output !== "Limit"){
      let expression = this.state.expression;
      if(endsWithOperator.test(expression)){
        expression = expression.slice(0, -1);
      }
      expression = expression.replace(/x/g, "*");
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
      this.setState({
        input: answer.toString(),
        expression: expression.replace(/\*/g, 'x') + '=' + answer,
        calculated: true
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div id="displayContainer">
          <div id="expression">{this.state.expression}</div>
          <div id="display">{this.state.input}</div>
        </div>
        <Keypad handleAC={this.handleAC}
                handleNumber={this.handleNumberKey}
                handleOperator={this.handleOperatorKey}
                handleDecimal={this.handleDecimalKey}
                calculate={this.calculate}/>
      </div>
    );
  }
}

export default App;
