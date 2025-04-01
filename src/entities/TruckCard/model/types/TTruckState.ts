export type TTruckState = {
    explored: boolean;
    bought: boolean;

    priceScore?: number;
    needScore?: number;

    priceCash?: number;
    needCash?: number;

    canSale?: boolean;
    priceCashForSale?: number;

    // scorePrice: number;
    // hasScore: number;
    // cashPrice: number;
    // hasCash: number;
};
