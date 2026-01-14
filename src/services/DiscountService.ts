export class DiscountService {
    calculateDiscount(amount: number, isVip: boolean): number {
        if (amount <= 0) {
            return 0;
        }

        if (isVip && amount > 1000) {
            return amount * 0.2;
        }

        if (amount > 500) {
            return amount * 0.1;
        }

        return 0;
    }
}
