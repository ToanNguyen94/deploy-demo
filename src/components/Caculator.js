import { Component } from "react";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            operator: null,
            displayValue: ''
        }
    }
    calculate = (operator) => {
        const { firstNumber, secondNumber } = this.state;
        switch (operator) {
            case "+": this.setState({ displayValue: parseFloat(firstNumber) + parseFloat(secondNumber) }); break;
            case "-": this.setState({ displayValue: parseFloat(firstNumber) - parseFloat(secondNumber) }); break;
            case "*": this.setState({ displayValue: parseFloat(firstNumber) * parseFloat(secondNumber) }); break;
            case "/": this.setState({ displayValue: parseFloat(firstNumber) / parseFloat(secondNumber) }); break;
            default: this.setState({ displayValue: "Invalid input" }); break;
        }
    }
    render() {
        return (
            <div className="container pt-4">
                <h1>Calculator</h1>
                <input type="number" onChange={(e) => this.setState({ firstNumber: e.target.value })} placeholder="Enter the first number" ></input>
                <br />
                <input type="number" onChange={(e) => this.setState({ secondNumber: e.target.value })} placeholder="Enter the second number" ></input>
                <p>Result: {this.state.displayValue}</p>
                <button className="btn btn-info mx-3" onClick={(e) => { this.calculate("+") }} label='+' >+</button>
                <button className="btn btn-danger mx-3" onClick={(e) => { this.calculate("-") }} label='-' >-</button>
                <button className="btn btn-primary mx-3" onClick={(e) => { this.calculate("*") }} label='*' >*</button>
                <button className="btn btn-warning mx-3" onClick={(e) => { this.calculate("/") }} label='/' >/</button>
            </div>
        )
    }
}
export default Calculator;