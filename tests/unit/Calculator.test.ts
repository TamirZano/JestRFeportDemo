import { Calculator } from '../../src/services/Calculator';

describe('Calculator', () => {
    const calculator = new Calculator();

    test('add positive numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('add negative number throws error', () => {
        expect(() => calculator.add(-1, 2)).toThrow();
    });

    test('divide normally', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divide by zero throws error', () => {
        expect(() => calculator.divide(10, 0)).toThrow();
    });
});
