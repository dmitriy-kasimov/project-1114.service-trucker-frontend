import { FC } from 'react';
import { TrucksTree } from '@/widgets/TrucksTree';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTruckTree } from '@/widgets/TrucksTree/model/types/TTruckTree.ts';
import { TruckModulesTree } from '@/widgets/TruckModulesTree';
import { TTruckModulesTree } from '@/widgets/TruckModulesTree/model/types/TTruckModulesTree.ts';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';

const tree: TTruckTree[] = [
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

const modulesTree: TTruckModulesTree[] = [
    {
        name: 'Battery 1',
        model: TruckModuleModels.Battery,
        state: {
            explored: true,
            bought: true,
            canSale: false,
            set: true,
        },
        children: [
            {
                name: 'Battery 2',
                model: TruckModuleModels.Battery,
                state: {
                    explored: false,
                    bought: false,
                },
            },
            {
                name: 'Battery 3',
                model: TruckModuleModels.Battery,
                state: {
                    explored: false,
                    bought: false,
                },
                children: [
                    {
                        name: 'Battery 4',
                        model: TruckModuleModels.Battery,
                        state: {
                            explored: false,
                            bought: false,
                        },
                    },
                ],
            },
        ],
    },
    {
        name: 'Engine 1',
        model: TruckModuleModels.Engine,
        state: {
            explored: true,
            bought: true,
            canSale: false,
            set: false,
        },
        children: [
            {
                name: 'Engine 2',
                model: TruckModuleModels.Engine,
                state: {
                    explored: false,
                    bought: false,
                },
            },
            {
                name: 'Engine 3',
                model: TruckModuleModels.Engine,
                state: {
                    explored: false,
                    bought: false,
                },
            },
        ],
    },
    {
        name: 'Fuel tank 1',
        model: TruckModuleModels.FuelTank,
        state: {
            explored: true,
            bought: true,
            canSale: false,
            set: false,
        },
        children: [
            {
                name: 'Fuel tank 2',
                model: TruckModuleModels.FuelTank,
                state: {
                    explored: false,
                    bought: false,
                },
                children: [
                    {
                        name: 'Fuel tank 3',
                        model: TruckModuleModels.FuelTank,
                        state: {
                            explored: false,
                            bought: false,
                        },
                    },
                ],
            },
            {
                name: 'Fuel tank 4',
                model: TruckModuleModels.FuelTank,
                state: {
                    explored: false,
                    bought: false,
                },
            },
        ],
    },
    {
        name: 'Axis 1',
        model: TruckModuleModels.Axis,
        state: {
            explored: true,
            bought: true,
            canSale: false,
            set: false,
        },
        children: [
            {
                name: 'Axis 2',
                model: TruckModuleModels.Axis,
                state: {
                    explored: false,
                    bought: false,
                },
            },
        ],
    },
];

export const MainPage: FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <TrucksTree tree={tree} />
            <TruckModulesTree
                model={TruckModels.Frightliner}
                tree={modulesTree}
            />
        </div>
    );
};
