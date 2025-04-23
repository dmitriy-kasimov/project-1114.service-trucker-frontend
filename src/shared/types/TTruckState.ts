export type TTruckState = {
    unlocked: boolean;
    bought: boolean;

    priceScore?: number;
    needScore?: number;

    priceCash?: number;
    needCash?: number;

    canSale?: boolean;
    priceCashForSale?: number;
};
