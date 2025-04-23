import { FC } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckTree } from '@/widgets/TruckTree';
import { TTruckTree } from '@/widgets/TruckTree/model/types/TTruckTree.ts';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';

const modulesTree: TTruckTree[] = [
    {
        name: 'Battery 1',
        model: TruckModuleModels.Battery,
        state: {
            unlocked: true,
            bought: true,
            canSale: false,
            set: true,
        },
        children: [
            {
                name: 'Battery 2',
                model: TruckModuleModels.Battery,
                state: {
                    unlocked: true,
                    bought: true,
                },
            },
            {
                name: 'Battery 3',
                model: TruckModuleModels.Battery,
                state: {
                    unlocked: false,
                    bought: false,
                },
                children: [
                    {
                        name: 'Battery 4',
                        model: TruckModuleModels.Battery,
                        state: {
                            unlocked: false,
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
            unlocked: true,
            bought: true,
            canSale: false,
            set: true,
        },
        children: [
            {
                name: 'Engine 2',
                model: TruckModuleModels.Engine,
                state: {
                    unlocked: false,
                    bought: false,
                },
            },
            {
                name: 'Engine 3',
                model: TruckModuleModels.Engine,
                state: {
                    unlocked: false,
                    bought: false,
                },
            },
        ],
    },
    {
        name: 'Fuel tank 1',
        model: TruckModuleModels.FuelTank,
        state: {
            unlocked: true,
            bought: true,
            canSale: false,
            set: true,
        },
        children: [
            {
                name: 'Fuel tank 2',
                model: TruckModuleModels.FuelTank,
                state: {
                    unlocked: false,
                    bought: false,
                },
                children: [
                    {
                        name: 'Fuel tank 3',
                        model: TruckModuleModels.FuelTank,
                        state: {
                            unlocked: false,
                            bought: false,
                        },
                    },
                ],
            },
            {
                name: 'Fuel tank 4',
                model: TruckModuleModels.FuelTank,
                state: {
                    unlocked: false,
                    bought: false,
                },
            },
        ],
    },
    {
        name: 'Axis 1',
        model: TruckModuleModels.Axis,
        state: {
            unlocked: true,
            bought: true,
            canSale: false,
            set: true,
        },
        children: [
            {
                name: 'Axis 2',
                model: TruckModuleModels.Axis,
                state: {
                    unlocked: false,
                    bought: false,
                },
            },
        ],
    },
];
export const TruckModulesPage: FC = () => {
    return (
        <TruckTree
            name={'Frightliner'}
            model={TruckModels.Frightliner}
            tree={modulesTree}
            state={{
                unlocked: true,
                bought: true,
                canSale: true,
                priceCashForSale: 100500,
            }}
        />
    );
};
