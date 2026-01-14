import { Calculator } from '../../src/services/Calculator';
import { DiscountService } from '../../src/services/DiscountService';
import { OrderService } from '../../src/services/OrderService';

describe('Order Integration Flow', () => {
    test('full order calculation flow', () => {
        const calculator = new Calculator();
        const discountService = new DiscountService();
        const orderService = new OrderService(calculator, discountService);

        const result = orderService.calculateFinalPrice(1500, true);

        expect(result).toBe(1200);
    });
});
