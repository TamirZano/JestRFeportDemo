import { Calculator } from './Calculator';
import { DiscountService } from './DiscountService';

export class OrderService {
    constructor(
        private calculator: Calculator,
        private discountService: DiscountService
    ) {}

    calculateFinalPrice(amount: number, isVip: boolean): number {
        const discount = this.discountService.calculateDiscount(amount, isVip);
        const finalPrice = this.calculator.add(amount, -discount);

        if (finalPrice < 0) {
            return 0;
        }

        return finalPrice;
    }
}
