import { FC } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckTree } from '@/widgets/TruckTree';
import { TTruckTree } from '@/widgets/TruckTree/model/types/TTruckTree.ts';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';

const modulesTree: TTruckTree[] = [
    {
        name: 'Battery 1',
        img: 'https://solarwarehousesa.com/cdn/shop/files/610-622-mfr-ingle-car-battery-726.png?v=1707852859',
        model: TruckModuleModels.Battery,
        state: {
            unlocked: true,
            bought: true,
            canSale: false,
            set: true,
        },
        modules: [
            {
                name: 'Battery 2',
                img: 'https://solarwarehousesa.com/cdn/shop/files/610-622-mfr-ingle-car-battery-726.png?v=1707852859',
                model: TruckModuleModels.Battery,
                state: {
                    unlocked: true,
                    bought: true,
                },
            },
        ],
    },
    {
        name: 'Engine 1',
        img: 'https://atlas-content1-cdn.pixelsquid.com/assets_v2/252/2529258979264042826/jpeg-600/G03.jpg',
        model: TruckModuleModels.Engine,
        state: {
            unlocked: true,
            bought: true,
            canSale: false,
            set: true,
        },
        modules: [
            {
                name: 'Engine 2',
                img: 'https://atlas-content1-cdn.pixelsquid.com/assets_v2/252/2529258979264042826/jpeg-600/G03.jpg',
                model: TruckModuleModels.Engine,
                state: {
                    unlocked: false,
                    bought: false,
                    needScore: 10,
                    priceScore: 20,
                },
                child: {
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
            },
        ],
    },
    {
        name: 'Fuel tank 1',
        img: 'https://5.imimg.com/data5/PR/LP/QI/SELLER-10602912/automotive-car-deep-draw-metal-fuel-tank-500x500-500x500.jpg',
        model: TruckModuleModels.FuelTank,
        state: {
            unlocked: true,
            bought: true,
            canSale: false,
            set: true,
        },
        modules: [
            {
                name: 'Fuel tank 2',
                img: 'https://5.imimg.com/data5/PR/LP/QI/SELLER-10602912/automotive-car-deep-draw-metal-fuel-tank-500x500-500x500.jpg',
                model: TruckModuleModels.FuelTank,
                state: {
                    unlocked: false,
                    bought: false,
                    priceScore: 14,
                    needScore: 4,
                },
            },
            {
                name: 'Fuel tank 3',
                img: 'https://5.imimg.com/data5/PR/LP/QI/SELLER-10602912/automotive-car-deep-draw-metal-fuel-tank-500x500-500x500.jpg',
                model: TruckModuleModels.FuelTank,
                state: {
                    unlocked: true,
                    bought: false,
                    priceCash: 14000,
                    needCash: 0,
                },
            },
        ],
    },
    {
        name: 'Axis 1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kf9vuJmCFqsdEfClTFUJpsIQnW-_bf8M0A&s',
        model: TruckModuleModels.Axis,
        state: {
            unlocked: true,
            bought: true,
            canSale: false,
            set: true,
        },
    },
];
export const TruckModulesPage: FC = () => {
    return (
        <TruckTree
            name={'Phantom'}
            img="https://docs.altv.mp/gta/images/vehicle/models/phantom.png"
            model={TruckModels.Phantom}
            tree={modulesTree}
            state={{
                unlocked: true,
                bought: true,
                priceCashForSale: 55000,
                canSale: true,
            }}
            parents={[
                {
                    name: 'Frightliner',
                    model: TruckModels.Frightliner,
                    img: 'https://docs.altv.mp/gta/images/vehicle/models/packer.png',
                    state: {
                        unlocked: true,
                        bought: true,
                        canSale: true,
                        priceCashForSale: 35000,
                    },
                },
            ]}
        />
    );
};
