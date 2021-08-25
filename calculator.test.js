const { expect } = require('@jest/globals');
const { Calculator } = require('./main');

describe(' Add method', () => {

test('should return sum of two integers', () => {
    const calculator = new Calculator( 1, 1);
    expect(calculator.add()).toBe(2);
  });

test('should have two operands', () => {
    const calculator = new Calculator( 10);
    expect(()=> calculator.add()).toThrow('Please enter two operands');
  });

test('both operands should be numbers', () => {
    const calculator = new Calculator( 10, 'twenty');
    expect(()=> calculator.add()).toThrow('Use two numbers as operands');
  });
  
});

describe(' Subtract method', () => {

    test('should return sum of two integers', () => {
        const calculator = new Calculator( 8, 1);
        expect(calculator.subtract()).toBe(7);
      });
    
    test('should have two operands', () => {
        const calculator = new Calculator( 10);
        expect(()=> calculator.subtract()).toThrow('Please enter two operands');
      });
    
    test('both operands should be numbers', () => {
        const calculator = new Calculator( 10, 'twenty');
        expect(()=> calculator.subtract()).toThrow('Use two numbers as operands');
      });
      
    });

describe(' Multiply method', () => {

    test('should return sum of two integers', () => {
        const calculator = new Calculator( 10, 10);
        expect(calculator.multiply()).toBe(100);
      });
    
    test('should have two operands', () => {
        const calculator = new Calculator( 10);
        expect(()=> calculator.multiply()).toThrow('Please enter two operands');
      });
    
    test('both operands should be numbers', () => {
        const calculator = new Calculator( 10, 'twenty');
        expect(()=> calculator.multiply()).toThrow('Use two numbers as operands');
      });
      
    });

    describe(' Divide method', () => {

        test('should return sum of two integers', () => {
            const calculator = new Calculator( 100, 10);
            expect(calculator.divide()).toBe(10);
          });
        
        test('should have two operands', () => {
            const calculator = new Calculator( 10);
            expect(()=> calculator.divide()).toThrow('Please enter two operands');
          });
        
        test('both operands should be numbers', () => {
            const calculator = new Calculator( 10, 'twenty');
            expect(()=> calculator.divide()).toThrow('Use two numbers as operands');
          });
          
        });
        
    