import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../scss/Calculator.scss';
import calculate from '../logic/calculate';

const buttons = [
  {
    symbol: 'AC',
    id: uuidv4(),
    name: 'AC',
    color: 'Gray',
  },
  {
    symbol: '+/-',
    id: uuidv4(),
    name: 'Inverter',
    color: 'Gray',
  },
  {
    symbol: '%',
    id: uuidv4(),
    name: 'Modulo',
    color: 'Gray',
  },
  {
    symbol: '÷',
    id: uuidv4(),
    name: 'Divide',
    color: 'Orange',
  },
  {
    symbol: '7',
    id: uuidv4(),
    name: 'Seven',
    color: 'Gray',
  },
  {
    symbol: '8',
    id: uuidv4(),
    name: 'Eight',
    color: 'Gray',
  },
  {
    symbol: '9',
    id: uuidv4(),
    name: 'Nine',
    color: 'Gray',
  },
  {
    symbol: 'x',
    id: uuidv4(),
    name: 'Multiply',
    color: 'Orange',
  },
  {
    symbol: '4',
    id: uuidv4(),
    name: 'Four',
    color: 'Gray',
  },
  {
    symbol: '5',
    id: uuidv4(),
    name: 'Five',
    color: 'Gray',
  },
  {
    symbol: '6',
    id: uuidv4(),
    name: 'Six',
    color: 'Gray',
  },
  {
    symbol: '-',
    id: uuidv4(),
    name: 'Minus',
    color: 'Orange',
  },
  {
    symbol: '1',
    id: uuidv4(),
    name: 'One',
    color: 'Gray',
  },
  {
    symbol: '2',
    id: uuidv4(),
    name: 'Two',
    color: 'Gray',
  },
  {
    symbol: '3',
    id: uuidv4(),
    name: 'Three',
    color: 'Gray',
  },
  {
    symbol: '+',
    id: uuidv4(),
    name: 'Plus',
    color: 'Orange',
  },
  {
    symbol: '0',
    id: uuidv4(),
    name: 'Zero',
    color: 'Gray',
  },
  {
    symbol: '.',
    id: uuidv4(),
    name: 'Dot',
    color: 'Gray',
  },
  {
    symbol: '=',
    id: uuidv4(),
    name: 'Equal',
    color: 'Orange',
  },
];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    this.setState((prevState) => calculate(prevState, e.target.innerText));
  };

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (next === null && operation === null && total === null) {
      result = 0;
    }

    if (next !== null && operation === null && total === null) {
      result = next;
    }

    if (next === null && operation !== null && total !== null) {
      result = total + operation;
    }

    if (next !== null && operation !== null && total !== null) {
      result = total + operation + next;
    }

    if (next === null && operation === null && total !== null) {
      result = total;
    }

    return (
      <div className="Calculator">
        <span className="Display">{result}</span>
        <section className="Keypad">
          {buttons.map((button) => (
            <button
              type="button"
              onClick={this.handleClick}
              key={button.id}
              className={`Button ${button.name} ${button.color}`}
            >
              {button.symbol}
            </button>
          ))}
        </section>
      </div>
    );
  }
}

export default Calculator;
