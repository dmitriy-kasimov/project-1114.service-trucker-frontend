import { FC } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { Card } from '@project-1114/ui-kit';

import cls from './TestWidget.module.scss';
import { TreeTrucks } from '@/widgets/TreeTrucks';
import { TTrucksTree } from '@/widgets/TreeTrucks/model/types/TTrucksTree.ts';

const trees: TTrucksTree[] = [
    {
        model: TruckModels.Frightliner,
        state: {
            explored: true,
            bought: true,
            canSale: true,
            priceCashForSale: 100500,
        },
        children: [
            {
                model: TruckModels.Hauler,
                state: {
                    explored: true,
                    bought: false,
                    priceCash: 1000,
                    needCash: 0,
                },
            },
            {
                model: TruckModels.Phantom,
                state: {
                    explored: true,
                    bought: false,
                    priceCash: 1010,
                    needCash: 0,
                },
                children: [
                    {
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

export const TestWidget: FC = () => {
    return (
        <Card className={cls.Card}>
            <TreeTrucks trees={trees} />
        </Card>
    );
};
