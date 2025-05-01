import { FC } from 'react';
import { TrucksTree } from '@/widgets/TrucksTree';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTrucksTree } from '@/widgets/TrucksTree';

const tree: TTrucksTree[] = [
    {
        name: 'Frightliner',
        img: 'https://docs.altv.mp/gta/images/vehicle/models/packer.png',
        model: TruckModels.Frightliner,
        state: {
            unlocked: true,
            bought: true,
            canSale: true,
            priceCashForSale: 35000,
        },
        children: [
            {
                name: 'Hauler',
                model: TruckModels.Hauler,
                img: 'https://docs.altv.mp/gta/images/vehicle/models/hauler.png',
                state: {
                    unlocked: false,
                    bought: false,
                    priceScore: 45,
                    needScore: 28,
                },
                children: [
                    {
                        name: 'Hauler 2',
                        model: TruckModels.Hauler2,
                        img: 'https://docs.altv.mp/gta/images/vehicle/models/hauler2.png',
                        state: {
                            unlocked: false,
                            bought: false,
                            priceScore: 85,
                            needScore: 68,
                        },
                    },
                ],
            },
            {
                name: 'Phantom',
                model: TruckModels.Phantom,
                img: 'https://docs.altv.mp/gta/images/vehicle/models/phantom.png',
                state: {
                    unlocked: true,
                    bought: true,
                    priceCashForSale: 55000,
                    canSale: true,
                },
                children: [
                    {
                        name: 'Phantom 3',
                        model: TruckModels.Phantom3,
                        img: 'https://docs.altv.mp/gta/images/vehicle/models/phantom3.png',
                        state: {
                            unlocked: false,
                            bought: false,
                            priceScore: 100,
                            needScore: 1000,
                        },
                    },
                ],
            },
        ],
    },
];

export const UnlockedVansPage: FC = () => {
    return <TrucksTree tree={tree} />;
};
