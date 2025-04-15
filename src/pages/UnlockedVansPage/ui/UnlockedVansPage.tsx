import { FC } from 'react';
import { TrucksTree } from '@/widgets/TrucksTree';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTruckTree } from '@/widgets/TrucksTree/model/types/TTruckTree.ts';

const tree: TTruckTree[] = [
    {
        name: 'Frightliner',
        model: TruckModels.Frightliner,
        state: {
            explored: true,
            bought: true,
            canSale: true,
            priceCashForSale: 100500,
        },
        children: [
            {
                name: 'Hauler',
                model: TruckModels.Hauler,
                state: {
                    explored: true,
                    bought: false,
                    priceCash: 1000,
                    needCash: 0,
                },
            },
            {
                name: 'Phantom',
                model: TruckModels.Phantom,
                state: {
                    explored: true,
                    bought: false,
                    priceCash: 1010,
                    needCash: 0,
                },
                children: [
                    {
                        name: 'Phantom 2',
                        model: TruckModels.Phantom2,
                        state: {
                            explored: false,
                            bought: false,
                            priceScore: 100,
                            needScore: 0,
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
