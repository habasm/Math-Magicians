import calculate from './calculate';

describe('To test the functionality of "AC"', () => {
  test('should reset input after pressing "AC"', () => {
    const obj = {
      total: 1,
      next: '2',
      operation: '+',
    };

    const expected = {
      total: null,
      next: null,
      operation: null,
    };

    const buttonName = 'AC';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

describe('To test the functionality of inputs"', () => {
  test('should return empty object if buttonName = "0" and obj.next = "0"', () => {
    const obj = {
      next: '0',
    };

    const expected = {};
    const buttonName = '0';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

// If there is no operation, update next and clear the value
describe('To test the functionality of inputs"', () => {
  test('should return obj.next = obj.next + buttonName if obj.next = any number', () => {
    const obj = {
      next: '1',
    };

    const expected = {
      total: null,
      next: '15',
    };

    const buttonName = '5';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

// If there is an operation, update next
describe('To test the functionality of inputs"', () => {
  test('should return obj.next = buttonName if obj.operation = any operator', () => {
    const obj = {
      next: '8',
      operation: 'x',
    };

    const expected = {
      total: 0,
      operation: 'x',
    };

    const buttonName = 'x';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

describe('To test the functionality of "."', () => {
  test('should return ...obj if obj.next includes "." after pressing "."', () => {
    const obj = {
      next: '2.',
      operation: '+',
    };

    const expected = {
      next: '2.',
      operation: '+',
    };

    const buttonName = '.';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  test('should return obj.next includes "." after pressing "."', () => {
    const obj = {
      next: '7',
    };

    const expected = {
      next: '7.',
    };

    const buttonName = '.';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  test('should return obj.next = "0." after pressing "." with previous operation', () => {
    const obj = {
      operation: '-',
    };

    const expected = {
      next: '0.',
      operation: '-',
    };

    const buttonName = '.';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  test('should return empty object if obj.total includes "." after pressing "."', () => {
    const obj = {
      total: 10.5,
      next: '.',
    };

    const expected = {
      total: 10.5,
      next: '.',
    };

    const buttonName = '.';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  test('should return obj.total includes "." after pressing "."', () => {
    const obj = {
      total: 15,
      next: '.',
    };

    const expected = {
      total: 15,
      next: '.',
    };

    const buttonName = '.';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  test('should return obj.next = "0." after pressing "."', () => {
    const obj = {
      next: '0.',
    };

    const expected = {
      next: '0.',
    };

    const buttonName = '.';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

describe('To test the functionality of "="', () => {
  test('should evaluate input after pressing "="', () => {
    const obj = {
      total: 1,
      next: '2',
      operation: '+',
    };

    const expected = {
      total: '3',
      next: null,
      operation: null,
    };

    const buttonName = '=';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  // '=' with no operation, nothing to do
  test('should return empty object if no operation after pressing "="', () => {
    const obj = {
      total: 1,
      next: '2',
    };

    const expected = {};

    const buttonName = '=';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

describe('To test the functionality of "+/-"', () => {
  test('should return obj.next with inverted symbol after pressing "+/-"', () => {
    const obj = {
      next: '4',
    };

    const expected = {
      next: '-4',
    };

    const buttonName = '+/-';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  test('should return obj.total with inverted symbol after pressing "+/-"', () => {
    const obj = {
      total: 13,
    };

    const expected = {
      total: '-13',
    };

    const buttonName = '+/-';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

// User pressed an operation after pressing '='
describe('To test the functionality of "="', () => {
  test('should return empty object if obj.total = any value after pressing "="', () => {
    const obj = {
      total: 1,
    };

    const expected = {};

    const buttonName = '=';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

// User pressed an operation button and there is an existing operation
describe('To test the functionality of calculator component', () => {
  test('should return empty object if obj.total = any value and there is an existing operation', () => {
    const obj = {
      total: 1,
      operation: '+',
    };

    const expected = {
      total: 1,
      operation: 'x',
    };

    const buttonName = 'x';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  test('should return obj.total = "0" after pressing any other operator', () => {
    const obj = {
      operation: 'x',
    };

    const expected = {
      total: 0,
      operation: '÷',
    };

    const buttonName = '÷';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  test('should evaluate input after pressing any other operator', () => {
    const obj = {
      total: 5,
      next: '7',
      operation: 'x',
    };

    const expected = {
      total: '35',
      next: null,
      operation: 'x',
    };

    const buttonName = 'x';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});

// no operation yet, but the user typed one
// The user hasn't typed a number yet, just save the operation
describe('To test the functionality of calculator component', () => {
  test('should return empty object if obj.next = null after pressing any operator', () => {
    const obj = {};

    const expected = {
      operation: '-',
    };

    const buttonName = '-';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });

  // save the operation and shift 'next' into 'total'
  test('should return empty object if obj.next = null after pressing any operator', () => {
    const obj = {
      next: 4,
    };

    const expected = {
      total: 4,
      next: null,
      operation: '+',
    };

    const buttonName = '+';
    const result = calculate(obj, buttonName);

    expect(result).toEqual(expected);
  });
});
