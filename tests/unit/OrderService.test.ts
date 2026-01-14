import { Calculator } from '../../src/services/Calculator';
import { DiscountService } from '../../src/services/DiscountService';
import { OrderService } from '../../src/services/OrderService';

describe('OrderService', () => {
    const orderService = new OrderService(
        new Calculator(),
        new DiscountService()
    );

    test('final price with vip discount', () => {
        expect(orderService.calculateFinalPrice(1200, true)).toBe(960);
    });

    test('final price without discount', () => {
        expect(orderService.calculateFinalPrice(200, false)).toBe(200);
    });
});
