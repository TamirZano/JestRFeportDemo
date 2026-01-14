export class Calculator {
    add(a: number, b: number): number {
        if (a < 0 || b < 0) {
            throw new Error('Negative numbers are not allowed');
        }

        return a + b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Division by zero');
        }

        if (a === 0) {
            return 0;
        }

        return a / b;
    }
}
