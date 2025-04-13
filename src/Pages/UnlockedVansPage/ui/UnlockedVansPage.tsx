import { FC } from 'react';
import { TrucksTree } from '@/widgets/TrucksTree';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTruckTree } from '@/widgets/TrucksTree/model/types/TTruckTree.ts';

import { Modal } from '@project-1114/ui-kit';

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
    return (
        <Modal isOpen={true} closable={true} fullscreen>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <TrucksTree tree={tree} />
            </div>
        </Modal>
    );
};
