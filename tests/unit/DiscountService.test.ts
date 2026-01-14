import { DiscountService } from '../../src/services/DiscountService';

describe('DiscountService', () => {
    const service = new DiscountService();

    test('vip discount over 1000', () => {
        expect(service.calculateDiscount(1200, true)).toBe(240);
    });

    test('regular discount over 500', () => {
        expect(service.calculateDiscount(600, false)).toBe(60);
    });

    test('no discount', () => {
        expect(service.calculateDiscount(300, false)).toBe(0);
    });
});
