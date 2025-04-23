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
            priceCashForSale: 100500,
        },
        children: [
            {
                name: 'Hauler',
                model: TruckModels.Hauler,
                img: 'https://docs.altv.mp/gta/images/vehicle/models/hauler.png',
                state: {
                    unlocked: true,
                    bought: false,
                    priceCash: 1000,
                    needCash: 0,
                },
            },
            {
                name: 'Phantom',
                model: TruckModels.Phantom,
                img: 'https://docs.altv.mp/gta/images/vehicle/models/phantom.png',
                state: {
                    unlocked: true,
                    bought: false,
                    priceCash: 1010,
                    needCash: 0,
                },
                children: [
                    {
                        name: 'Phantom 2',
                        model: TruckModels.Phantom2,
                        img: 'https://docs.altv.mp/gta/images/vehicle/models/phantom2.png',
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
