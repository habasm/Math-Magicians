import operate from './operate';

describe('To test the functionality of addition', () => {
  test('should Add 7 and 21 to Equal 28', () => {
    const sum = operate('7', '21', '+');
    expect(sum).toBe('28');
  });

  test('should Add -21 and 29 to Equal 8', () => {
    const sum = operate('-21', '29', '+');
    expect(sum).toBe('8');
  });

  test('should Add 8 and -88 to Equal -80', () => {
    const sum = operate('8', '-88', '+');
    expect(sum).toBe('-80');
  });
});

describe('To test the functionality of subtraction', () => {
  test('should Subtract 10 and 1 to Equal 9', () => {
    const difference = operate('10', '1', '-');
    expect(difference).toBe('9');
  });

  test('should Subtract -1 and 2 to Equal -3', () => {
    const difference = operate('-1', '2', '-');
    expect(difference).toBe('-3');
  });

  test('should Subtract 25 and -12 to Equal 37', () => {
    const difference = operate('25', '-12', '-');
    expect(difference).toBe('37');
  });
});

describe('To test the functionality of multiplication', () => {
  test('should Multiply 3 and 4 to Equal 12', () => {
    const product = operate('3', '4', 'x');
    expect(product).toBe('12');
  });

  test('should Multiply -11 and 11', () => {
    const product = operate('-11', '11', 'x');
    expect(product).toBe('-121');
  });

  test('should Multiply 5 and -6 to Equal -30', () => {
    const product = operate('5', '-6', 'x');
    expect(product).toBe('-30');
  });
});

describe('To test the functionality of division', () => {
  test('should Divide 36 and 6 to Equal 6', () => {
    const quotient = operate('36', '6', '÷');
    expect(quotient).toBe('6');
  });

  test('should Divide -40 and 10 to Equal -4', () => {
    const quotient = operate('-40', '10', '÷');
    expect(quotient).toBe('-4');
  });

  test('should Divide 1 and 0 to Equal "Can\'t divide by 0."', () => {
    const quotient = operate('1', '0', '÷');
    expect(quotient).toBe("Can't divide by 0.");
  });
});

describe('To test the functionality of the Modulo Division', () => {
  test('should Mod 1000 and 100 to Equal 0 ', () => {
    const remainder = operate('1000', '100', '%');
    expect(remainder).toBe('0');
  });

  test('should Mod -12 and 5 to Equal -2', () => {
    const remainder = operate('-12', '5', '%');
    expect(remainder).toBe('-2');
  });

  test('should Mod -7 and 0 to Equal "Can\'t find modulo as can\'t divide by 0."', () => {
    const remainder = operate('-7', '0', '%');
    expect(remainder).toBe("Can't find modulo as can't divide by 0.");
  });
});

describe('To test if Unknown Operation', () => {
  test('should Throw Error if Unknown Operation', () => {
    expect(() => {
      operate('1', '2', '3');
    }).toThrowError("Unknown operation '3'");
  });
});
