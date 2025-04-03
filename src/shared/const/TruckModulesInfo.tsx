import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TTruckModule } from '@/shared/types/TTruckModule.ts';

import AxisIcon from '@/shared/assets/icons/AxisIcon.svg?react';
import EngineIcon from '@/shared/assets/icons/EngineIcon.svg?react';
import FuelTankIcon from '@/shared/assets/icons/FuelTankIcon.svg?react';
import BatteryIcon from '@/shared/assets/icons/BatteryIcon.svg?react';

import { Icon } from '@project-1114/ui-kit';

export const TruckModulesInfo: Record<TruckModuleModels, TTruckModule> = {
    [TruckModuleModels.Axis]: {
        icon: <Icon Svg={AxisIcon} width={60} height={60} stroke={'white'} />,
    },
    [TruckModuleModels.Engine]: {
        icon: <Icon Svg={EngineIcon} width={60} height={60} />,
    },
    [TruckModuleModels.FuelTank]: {
        icon: <Icon Svg={FuelTankIcon} width={60} height={60} />,
    },
    [TruckModuleModels.Battery]: {
        icon: <Icon Svg={BatteryIcon} width={60} height={60} />,
    },
};
